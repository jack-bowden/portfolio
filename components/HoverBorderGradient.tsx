'use client';

import { useState, useEffect } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT';

type HoverBorderGradientProps = MotionProps & {
	containerClassName?: string;
	className?: string;
	duration?: number;
	clockwise?: boolean;
};

export function HoverBorderGradient({
	children,
	containerClassName,
	className,
	duration = 1,
	clockwise = true,
	...props
}: React.PropsWithChildren<HoverBorderGradientProps>) {
	const [hovered, setHovered] = useState<boolean>(false);
	const [direction, setDirection] = useState<Direction>('TOP');

	const rotateDirection = (currentDirection: Direction): Direction => {
		const directions: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
		const currentIndex = directions.indexOf(currentDirection);
		const nextIndex = clockwise
			? (currentIndex - 1 + directions.length) % directions.length
			: (currentIndex + 1) % directions.length;
		return directions[nextIndex];
	};

	const movingMap: Record<Direction, string> = {
		TOP: 'radial-gradient(20.7% 50% at 50% 0%, rgba(99, 102, 241, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
		LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, rgba(99, 102, 241, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
		BOTTOM:
			'radial-gradient(20.7% 50% at 50% 100%, rgba(99, 102, 241, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
		RIGHT:
			'radial-gradient(16.2% 41.199999999999996% at 100% 50%, rgba(99, 102, 241, 0.3) 0%, rgba(255, 255, 255, 0) 100%)',
	};

	const highlight =
		'radial-gradient(75% 181.15942028985506% at 50% 50%, rgba(99, 102, 241, 0.3) 0%, rgba(255, 255, 255, 0) 100%)';

	useEffect(() => {
		if (!hovered) {
			const interval = setInterval(() => {
				setDirection(prevState => rotateDirection(prevState));
			}, duration * 1000);
			return () => clearInterval(interval);
		}
	}, [hovered]);

	const borderVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 2 } },
	};

	return (
		<motion.div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={cn(
				'relative hidden md:flex rounded-full border content-center bg-transparent transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone ',
				containerClassName
			)}
			{...props}
			variants={borderVariants}
			initial='hidden'
			animate='visible'
		>
			<div className={cn('z-10 w-full rounded-[inherit]', className)}>
				{children}
			</div>
			<motion.div
				className={cn(
					'flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]'
				)}
				style={{
					filter: 'blur(2px)',
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
				initial={{ background: movingMap[direction] }}
				animate={{
					background: hovered
						? [movingMap[direction], highlight]
						: movingMap[direction],
				}}
				transition={{ ease: 'linear', duration: duration ?? 1 }}
			/>
			<div className='absolute z-1 flex-none inset-[2px] rounded-[100px]' />
		</motion.div>
	);
}
