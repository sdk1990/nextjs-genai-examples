import { Message, OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

import { openAIClient } from '@/app/api/ai/openai.client';

export const runtime = 'edge';

export async function POST(request: Request) {
	const { messages } = await request.json();

	if (!messages) {
		return new NextResponse('No message in the request', { status: 400 });
	}

	const completion = await openAIClient.chat.completions.create({
		model:
			process.env.OPENAI_FINETUNED_MODEL_ID ??
			(() => {
				throw new Error('OPENAI_FINETUNED_MODEL_ID is not set');
			})(),
		messages: messages,
		stream: true,
	});

	const stream = OpenAIStream(completion);

	return new StreamingTextResponse(stream);
}
