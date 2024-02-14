import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Next.js OpenAI examples',
	description: 'Grab and use these plug & play Next.js x OpenAI examples to kickstart your implementation.',
};

export default function Home() {
	return (
		<>
			<div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
				<div className='fixed flex h-48 w-full flex-col justify-center gap-4 bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none dark:from-black dark:via-black'>
					<h1>Next.js Gen AI Examples</h1>
					<Link
						className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
						href='https://www.sdkode.dev'
						prefetch={false}
						target='_blank'>
						By <Image src='/sdkode-blue.svg' alt='SDKode Logo' width={100} height={24} priority />
					</Link>
				</div>
			</div>

			<div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
				<Image className='relative' src='/openai.svg' alt='OpenAI Logo' width={180} height={37} priority />
			</div>

			<div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4'>
				<Link
					href='/openai/chat'
					className='group btn btn-ghost flex h-full flex-col rounded-lg px-5 py-4 transition-colors'>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Chat{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 text-sm opacity-50`}>Use the OpenAI Chat feature</p>
				</Link>
				<Link
					href='/openai/assistant'
					className='group btn btn-ghost flex h-full flex-col rounded-lg px-5 py-4 transition-colors'>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Assistant{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 text-sm opacity-50`}>Use the beta OpenAI Assistant feature</p>
				</Link>
				<Link
					href='/openai/prediction'
					className='group btn btn-ghost flex h-full flex-col rounded-lg px-5 py-4 transition-colors'>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Prediction{' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 text-sm opacity-50`}>Parse form data and predict something else</p>
				</Link>
				<Link
					href='/google/gemini'
					className='group btn btn-ghost flex h-full flex-col rounded-lg px-5 py-4 transition-colors'>
					<h2 className={`mb-3 text-2xl font-semibold`}>
						Gemini (soon){' '}
						<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
							-&gt;
						</span>
					</h2>
					<p className={`m-0 text-sm opacity-50`}>Use Google Gemini feature</p>
				</Link>
			</div>
		</>
	);
}
