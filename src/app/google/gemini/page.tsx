import type { Metadata } from 'next';

import { BackButton } from '@/components/BackButton';
import { GeminiChat } from '@/components/GeminiChat';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
	title: 'Google Gemini Chat',
};

export default function Gemini() {
	return (
		<>
			<BackButton />

			<PageHeader brand='gemini' title='Google Gemini Chat' />

			<GeminiChat className='mt-16' />
		</>
	);
}
