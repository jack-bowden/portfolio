'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import CardHeading from './CardHeading';
import Card from './Card';

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
		cardText: `My goal for the future is to continue learning, I simply want to improve my skills and advance in as many areas as possible. I enjoy this whole process and I simply want to be the best version of myself. There are so many ways of working, languages, frameworks, this entire industry has so much to offer and I'd love to explore as much as possible.`,
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
			className='w-full pt-36'
			ref={ref}
		>
			<CardHeading heading='About me timeline' />
			<motion.div
				className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-12 place-items-stretch'
				variants={containerVariants}
				initial='hidden'
				animate={controls}
			>
				{cardInfo.map((card, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
						className={
							card.cardTitle === 'Future'
								? 'col-span-1 sm:col-span-2 xl:col-span-1 sm:px-20 lg:px-[16.5rem] xl:px-0'
								: 'flex'
						}
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
