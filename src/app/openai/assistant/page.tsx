import type { Metadata } from 'next';

import { AssistantChat } from '@/components/AssistantChat';
import { BackButton } from '@/components/BackButton';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
	title: 'OpenAI Assistant',
};

export default function Assistant() {
	return (
		<>
			<BackButton />

			<PageHeader brand='openai' title='OpenAI Assistant' />

			<AssistantChat className='mt-16' />
		</>
	);
}
