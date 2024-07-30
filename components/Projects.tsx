'use client';

import { FaLocationArrow } from 'react-icons/fa6';
import { ProjectCard } from './ProjectCard';
import CardHeading from './CardHeading';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'Flick Finder',
		des: 'A movie database app with the option to log in and save your favorites.',
		img: '/movies.png',
		iconLists: [
			{ light: '/prisma.svg', dark: '/dark-prisma.svg' },
			{ light: '/tailwind.svg', dark: '/tailwind.svg' },
			{ light: '/typescript.svg', dark: '/typescript.svg' },
			{ light: '/next.svg', dark: '/dark-next.svg' },
			{ light: '/postgres.svg', dark: '/postgres.svg' },
		],
		link: 'https://movies.jackbowden.co.uk',
	},
	{
		id: 2,
		title: 'Car Rental',
		des: 'Car rental with the ability to browse vehicles and make bookings.',
		img: '/car-rentals.png',
		iconLists: [
			{ light: '/next.svg', dark: '/dark-next.svg' },
			{ light: '/tailwind.svg', dark: '/tailwind.svg' },
			{ light: '/typescript.svg', dark: '/typescript.svg' },
			{ light: '/postgres.svg', dark: '/postgres.svg' },
			{ light: '/prisma.svg', dark: '/dark-prisma.svg' },
		],
		link: 'https://car-rental.jackbowden.co.uk',
	},
	{
		id: 3,
		title: 'Dashboard',
		des: 'Allowing the creation of users and invoices, with highlighting of key metrics.',
		img: '/dashboard.png',
		iconLists: [
			{ light: '/prisma.svg', dark: '/dark-prisma.svg' },
			{ light: '/tailwind.svg', dark: '/tailwind.svg' },
			{ light: '/postgres.svg', dark: '/postgres.svg' },
			{ light: '/typescript.svg', dark: '/typescript.svg' },
			{ light: '/next.svg', dark: '/dark-next.svg' },
		],
		link: 'https://dashboard.jackbowden.co.uk',
	},
];

const Projects = () => {
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
			x: -50,
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
		<div
			className='pt-[8.75rem]'
			id='projects'
			ref={ref}
		>
			<CardHeading
				heading='Recent projects'
				className='mb-14 sm:mb-20 md:mb-14'
			/>
			<motion.div
				className='flex flex-wrap items-center justify-center gap-16'
				variants={containerVariants}
				initial='hidden'
				animate={controls}
			>
				{projects.map(item => (
					<motion.div
						key={item.id}
						className=' lg:h-[22rem] lg:mt-2 -mt-12 sm:-mt-20 md:-mt-12 flex items-center justify-center sm:w-96 w-[80vw]'
						variants={cardVariants}
					>
						<ProjectCard title={item.title}>
							<Link
								target='_blank'
								href={item.link}
							>
								<div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[16vh] lg:h-[30vh] mb-4'>
									<img
										src={item.img}
										alt='cover'
										className='z-10 absolute w-full h-full object-cover object-center rounded-md'
									/>
								</div>

								<h1 className='font-semibold text-xl line-clamp-1'>
									{item.title}
								</h1>

								<p className='lg:text-md pt-1 pl-0.5 lg:font-normal font text-sm font-semibold line-clamp-2'>
									{item.des}
								</p>

								<div className='flex items-center justify-between mt-3 mb-3'>
									<div className='flex items-center space-x-2'>
										{item.iconLists.map((icon, index) => (
											<div
												key={index}
												className='rounded-full flex items-center justify-center w-[18px] h-[18px] md:w-[28px] md:h-[28px]'
											>
												<img
													className='size-full dark:hidden'
													src={icon.light}
													alt={`icon${index + 1}`}
												/>
												<img
													className='size-full hidden dark:block'
													src={icon.dark}
													alt={`icon${index + 1}`}
												/>
											</div>
										))}
									</div>

									<div className='flex justify-center items-center'>
										<p className='flex truncate'>Check Live Site</p>
										<FaLocationArrow
											className='ms-3 dark:hidden block'
											color='#000'
										/>
										<FaLocationArrow
											className='ms-1.5 dark:block hidden'
											color='#fff'
										/>
									</div>
								</div>
							</Link>
						</ProjectCard>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Projects;
