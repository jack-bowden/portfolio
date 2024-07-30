'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
	cardTitle: string;
	cardText: React.ReactNode;
}

const Card = ({ cardTitle, cardText }: CardProps) => {
	const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
		null
	);

	const handleMouseMove = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		const { left, top } = event.currentTarget.getBoundingClientRect();
		setMousePos({
			x: event.clientX - left,
			y: event.clientY - top,
		});
	};

	const handleMouseLeave = () => {
		setMousePos(null);
	};

	return (
		<div
			className='relative flex flex-col text-center border border-black/30 dark:border-white/40 p-4 overflow-auto bg-transparent shadow-lg rounded-lg'
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{mousePos && (
				<motion.div
					className='hidden md:block absolute blur-xl rounded-full bg-indigo-500/60 dark:bg-white/45 pointer-events-none'
					style={{
						top: mousePos.y - 15,
						left: mousePos.x - 15,
						width: 80,
						height: 80,
						transform: 'translate(-50%, -50%)',
						opacity: 0.5,
						zIndex: 1,
					}}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				/>
			)}
			<h3 className='text-xl font-bold mb-4'>{cardTitle}</h3>
			<div className='text-center'>{cardText}</div>
		</div>
	);
};

export default Card;
