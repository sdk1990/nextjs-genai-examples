import type { Metadata } from 'next';

import { BackButton } from '@/components/BackButton';
import { ModelChat } from '@/components/ModelChat';
import { PageHeader } from '@/components/PageHeader';

export const metadata: Metadata = {
	title: 'OpenAI Chat',
};

export default function Chat() {
	return (
		<>
			<BackButton />

			<PageHeader brand='openai' title='OpenAI Chat' />

			<ModelChat className='mt-16' />
		</>
	);
}
