'use client';

import { useRef, useEffect } from 'react';
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
				<a
					className='font-bold underline hover:text-indigo-500 transition-all'
					href='https://www.linkedin.com/in/jackbowden22061992/'
				>
					LinkedIn
				</a>{' '}
				or{' '}
				<a
					className='font-bold underline hover:text-indigo-500 transition-all'
					href='https://github.com/jack-bowden'
				>
					GitHub
				</a>{' '}
				where I will be happy to respond to any messages, feedback or whatever
				it may be.
			</>
		),
	},
	{
		cardTitle: 'Say hi',
		cardText: (
			<>
				If you would like to{' '}
				<a
					className='font-bold underline hover:text-indigo-500 transition-all'
					href='mailto:jackbowden1992@gmail.com'
				>
					get in touch
				</a>{' '}
				about anything at all, I'm available to connect or discuss anything
				whether it be related to a project, work, opportunities or anything
				else, my inbox is always open and I will certainly be happy to respond.
			</>
		),
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
							card.cardTitle === 'Say hi'
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

export default Contact;
