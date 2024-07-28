'use client';

import { useRef, useEffect } from 'react';
import CardHeading from './CardHeading';
import Card from './Card';
import { motion, useAnimation, useInView } from 'framer-motion';

const cardInfo = [
	{
		cardTitle: 'Past',
		cardText: `I started having an interest in IT at a young age, after finishing school I proceeded to do an apprenticeship and enjoy learning as a hobby. After some time in a different industry I decided to fully focus on IT and started with a 1st line engineer role which helped form my likes/dislikes and helped me discover my passion for programming.`,
	},
	{
		cardTitle: 'Present',
		cardText: `Right now I'm fully focused on simply learning as much as possible, I program every single day, I love it, I love learning and the entire process is thoroughly enjoyable to me. My goal is to be part of a company to help me progress and learn as much as possible where I can become a valuable team member.`,
	},
	{
		cardTitle: 'Future',
		cardText: `My goal for the future is to continue learning, I simply want to improve my skills, I want to write better code, I want to debug more efficiently, I enjoy this whole process and I simply want to be the best version of myself. There are so many ways of working, languages, frameworks, this entire industry has so many paths to go down and all I know is that when the opportunity arises, I will be ready and I will become an excellent member of whichever team I am part of.`,
	},
];

const About = () => {
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
			x: 50,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 12,
			},
		},
	};

	return (
		<main
			id='about'
			className='w-full pt-24'
			ref={ref}
		>
			<CardHeading heading='About me timeline' />
			<motion.div
				className='flex flex-wrap justify-center gap-8'
				variants={containerVariants}
				initial='hidden'
				animate={controls}
			>
				{cardInfo.map((card, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
					>
						<Card
							cardTitle={card.cardTitle}
							cardText={card.cardText}
						/>
					</motion.div>
				))}
			</motion.div>
		</main>
	);
};

export default About;
