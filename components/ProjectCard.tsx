'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const ProjectCard = ({
	children,
	title,

	className,
	containerClassName,
}: {
	children: React.ReactNode;
	title: string;

	className?: string;
	containerClassName?: string;
}) => {
	const [transform, setTransform] = useState(
		'translate(-50%,-50%) rotateX(0deg)'
	);

	const onMouseEnter = () => {
		setTransform('translate(-50%,-50%) rotateX(12.5deg) scale(0.95)');
	};
	const onMouseLeave = () => {
		setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)');
	};

	return (
		<div
			className={cn('relative group/pin  cursor-pointer', containerClassName)}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div
				style={{
					perspective: '1000px',
					transform: 'rotateX(70deg) translateZ(0deg)',
				}}
				className='absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2'
			>
				<div
					style={{
						transform: transform,
					}}
					className='absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl shadow-lg shadow-black/50 dark:shadow-white/50 border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden'
				>
					<div className={cn(' relative ', className)}>{children}</div>
				</div>
			</div>
			<PinPerspective title={title} />
		</div>
	);
};

export const PinPerspective = ({ title }: { title: string }) => {
	return (
		<motion.div className='pointer-events-none w-full h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100  transition duration-500'>
			<div className=' w-full h-full -mt-7 flex-none  inset-0'>
				<div className='absolute top-0 inset-x-0  flex justify-center'>
					<div className='relative flex space-x-2 items-center  rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 '>
						<span className='relative truncate  text-white text-xs font-semibold inline-block py-0.5'>
							{title}
						</span>

						<span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40'></span>
					</div>
				</div>

				<div
					style={{
						perspective: '1000px',
						transform: 'rotateX(70deg) translateZ(0)',
					}}
					className='absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2'
				></div>
			</div>
		</motion.div>
	);
};
