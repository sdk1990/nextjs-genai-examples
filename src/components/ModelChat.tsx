'use client';

import { useChat } from 'ai/react';
import cn from 'classnames';
import { FC, useEffect, useRef } from 'react';

type Props = {
	className?: string;
};

export const ModelChat: FC<Props> = ({ className }) => {
	const latestMessageRef = useRef<HTMLDivElement>(null);
	const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
		api: '/api/chat',
	});

	useEffect(() => {
		if (latestMessageRef.current) {
			latestMessageRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [messages]);

	return (
		<>
			<div className={cn(className, 'w-full flex-grow overflow-y-auto')}>
				{messages.map(({ role, id, content, createdAt }) => (
					<div
						key={id}
						className={cn(
							role === 'system' && 'chat-start',
							role === 'assistant' && 'chat-start',
							role === 'user' && 'chat-end',
							'chat'
						)}>
						<div className='chat-header'>
							<span>
								{role === 'system' && 'AI system'}
								{role === 'assistant' && 'AI Size Guide'}
								{role === 'user' && 'You'}
							</span>
							{createdAt && (
								<time className='text-xs opacity-50'>
									{createdAt.toLocaleTimeString(['nl'], {
										hour: '2-digit',
										minute: '2-digit',
									})}
								</time>
							)}
						</div>

						<div
							className={cn(
								role === 'system' && 'chat-bubble-error',
								role === 'assistant' && 'chat-bubble-warning',
								role === 'user' && 'chat-bubble-success',
								'chat-bubble'
							)}>
							{content}
						</div>
					</div>
				))}
				{isLoading && (
					<div className='items-left mt-8 flex justify-start space-x-2'>
						<span className='sr-only'>Loading...</span>
						<div className='h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.3s]'></div>
						<div className='h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:-0.15s]'></div>
						<div className='h-2 w-2 animate-bounce rounded-full bg-gray-500'></div>
					</div>
				)}
			</div>
			<form className='flex w-full max-w-xl flex-row items-end gap-2' onSubmit={handleSubmit}>
				<div className='join w-full'>
					<input
						className='input join-item input-bordered w-full'
						value={input}
						disabled={isLoading}
						onChange={handleInputChange}
						placeholder='Enter your prompt'
					/>
					<button type='submit' disabled={!input || isLoading} className='btn btn-primary join-item rounded-r-full'>
						Send
					</button>
				</div>
			</form>
		</>
	);
};
