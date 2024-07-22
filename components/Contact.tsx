'use client';

import React, { useRef, useEffect } from 'react';
import CardHeading from './CardHeading';
import Card from './Card';
import { motion, useAnimation, useInView } from 'framer-motion';
import { LinkPreview } from './LinkPreview';

const cardInfo = [
	{
		cardTitle: 'Job opportunities',
		cardText:
			"I'm always open to job opportunities, I'm currently in the market and available to discuss any openings. I would enjoy being part of a team that could help with my progression whilst benefitting from my experience and abilities in the process.",
	},
	{
		cardTitle: 'Connect',
		cardText: (
			<>
				If you would like to connect through my socials, please feel free to do
				so by visiting my{' '}
				<LinkPreview
					url='https://www.linkedin.com/in/jackbowden22061992/'
					className='font-bold underline'
				>
					LinkedIn
				</LinkPreview>{' '}
				or{' '}
				<LinkPreview
					url='https://github.com/hihihi45'
					className='font-bold underline'
				>
					GitHub
				</LinkPreview>{' '}
				where I will be happy to respond to any messages, feedback or whatever
				it may be.
			</>
		),
	},
	{
		cardTitle: 'Say hi',
		cardText:
			"If you would like to get in touch about anything at all, I'm available to connect or discuss anything whether it be related to a project, work, opportunities or anything else, my inbox is always open and I will certainly be happy to respond.",
	},
];

const Contact = () => {
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
			id='contact'
			className='w-full pt-24'
			ref={ref}
		>
			<CardHeading heading='Get in touch' />
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

export default Contact;
