'use client';

import cn from 'classnames';
import { FC } from 'react';

type Props = {
	className?: string;
};

export const GeminiChat: FC<Props> = ({ className }) => {
	return (
		<div className={cn(className, 'mt-64 w-full flex-grow overflow-y-auto text-center')}>
			<p className='text-xl font-medium'>Gemini Chat coming soon</p>
		</div>
	);
};
