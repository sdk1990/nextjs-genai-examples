import type { Metadata } from 'next';

import { BackButton } from '@/components/BackButton';
import { ModelChat } from '@/components/ModelChat';
import { PageHeader } from '@/components/PageHeader';
import { PredictionForm } from '@/components/PredictionForm';

export const metadata: Metadata = {
	title: 'OpenAI Chat',
};

export default function Chat() {
	return (
		<>
			<BackButton />

			<PageHeader brand='openai' title='Predict BMI' />

			<PredictionForm />
		</>
	);
}
