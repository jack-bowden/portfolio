'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export const MobileThemeToggle = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='md:hidden'>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -50 }}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 20,
							duration: 0.5,
						}}
					>
						<ThemeToggle />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
