'use server';

import { openAIClient } from '@/app/api/ai/openai.client';

export const predictBmi = async (formData: FormData) => {
	const age = formData.get('age'),
		weight = formData.get('weight'),
		length = formData.get('length');

	const completion = await openAIClient.chat.completions.create({
		model:
			process.env.OPENAI_FINETUNED_MODEL_ID ??
			(() => {
				throw new Error('OPENAI_FINETUNED_MODEL_ID is not set');
			})(),
		messages: [
			{
				role: 'system',
				content:
					'Parse the message and return a response. You return a json response with passed input data and the output data.',
			},
			{
				role: 'user',
				content: `I'm a man, ${age} years old, ${length} cm tall and weigh ${weight} kg. What is my BMI?`,
			},
		],
	});

	return completion.choices[0];
};
