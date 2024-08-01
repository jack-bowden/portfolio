'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface CardProps {
	cardTitle: string;
	cardText: React.ReactNode;
}

const Card = ({ cardTitle, cardText }: CardProps) => {
	const { theme } = useTheme();

	const hoverEffect =
		theme === 'dark'
			? {
					scale: 1.05,
					boxShadow: '10px 10px 20px rgba(255, 255, 255, 0.2)',
					transition: { duration: 0.3 },
			  }
			: {
					scale: 1.05,
					boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
					transition: { duration: 0.3 },
			  };

	return (
		<motion.div
			className='relative flex flex-col text-center border border-black/30 dark:border-white/40 p-4 overflow-auto bg-transparent rounded-lg'
			whileHover={hoverEffect}
		>
			<h3 className='text-xl font-bold mb-4'>{cardTitle}</h3>
			<div className='text-center'>{cardText}</div>
		</motion.div>
	);
};

export default Card;
