'use client';

import { useEffect, useRef } from 'react';
import SocialIcons from './SocialIcons';
import { motion, useAnimation, useInView } from 'framer-motion';
import { BiArrowToTop } from 'react-icons/bi';

const Footer = () => {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [isInView, controls]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const cardVariants = {
		hidden: {
			y: 50, // Adjust this value to control the initial position
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 12,
			},
		},
	};

	return (
		<main className='w-full'>
			<motion.div
				className='w-full justify-center items-center  flex pt-20'
				variants={containerVariants}
				initial='hidden'
				animate={controls}
			>
				<motion.div
					ref={ref}
					variants={cardVariants}
					className='flex flex-col justify-center space-y-2 items-center'
				>
					<p className='text-xl'>2024 - present. Jack Bowden ©</p>
					<SocialIcons />
					<div className='w-full pt-4 flex justify-center'>
						<BiArrowToTop
							className='cursor-pointer hover:text-foreground/60'
							size={32}
							onClick={() => window.scrollTo(0, 0)}
						/>
					</div>
				</motion.div>
			</motion.div>
		</main>
	);
};

export default Footer;
