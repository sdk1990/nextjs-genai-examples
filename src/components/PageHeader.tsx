import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

type Props = {
	title: string;
	brand: 'openai' | 'gemini';
	className?: string;
};

export const PageHeader: FC<Props> = ({ title, brand, className }) => {
	return (
		<div
			className={cn(
				className,
				"relative z-[-1] flex flex-col place-items-center gap-4 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40"
			)}>
			<h1 className='text-lg font-semibold'>{title}</h1>
			<Image
				className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
				src={`/${brand}.svg`}
				alt={`${brand} logo`}
				width={100}
				height={37}
				priority
			/>
		</div>
	);
};
