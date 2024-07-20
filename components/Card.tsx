import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
	cardTitle: string;
	cardText: string | ReactNode;
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
			className='relative text-center w-96 h-80 border border-black/30 dark:border-white/40 p-4 overflow-auto'
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ position: 'relative' }}
		>
			{mousePos && (
				<motion.div
					className='absolute blur-xl rounded-full bg-indigo-500/60 dark:bg-white/45 z-10'
					style={{
						top: mousePos.y - 15,
						left: mousePos.x - 15,
						width: 80,
						height: 80,
						transform: 'translate(-50%, -50%)',
						opacity: 0.5,
					}}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				/>
			)}
			<h3 className='text-xl font-bold my-4'>{cardTitle}</h3>
			<p className='text-center'>{cardText}</p>
		</div>
	);
};

export default Card;
