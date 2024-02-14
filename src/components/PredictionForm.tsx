'use client';

import cn from 'classnames';
import { FC, useState } from 'react';

import { predictBmi } from '@/app/actions/predictBmi';

type Props = {
	className?: string;
};

export const PredictionForm: FC<Props> = ({ className }) => {
	const [bmiResult, setBmiResult] = useState<any>();

	const handleSubmit = async (data: FormData) => {
		setBmiResult(null);
		const result = await predictBmi(data);

		if (result.message.content) {
			const parsedResult = JSON.parse(result.message.content);
			setBmiResult(parsedResult);
		}
	};

	return (
		<>
			<form action={handleSubmit} className={cn(className, 'flex flex-col gap-4')}>
				<label className='input input-bordered flex items-center gap-2'>
					Age
					<input type='number' name='age' className='grow' placeholder='Enter your age (years)' />
				</label>
				<label className='input input-bordered flex items-center gap-2'>
					Length
					<input type='number' name='length' step={0.1} className='grow' placeholder='Enter your length (cm)' />
				</label>
				<label className='input input-bordered flex items-center gap-2'>
					Weight
					<input type='number' step={0.5} name='weight' className='grow' placeholder='Enter your weight (KGs)' />
				</label>
				<button type='submit' className='btn btn-primary'>
					Predict BMI
				</button>
			</form>
			{bmiResult && <div className='mockup-code mt-8'>{JSON.stringify(bmiResult, null, 2)}</div>}
		</>
	);
};
