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
			'/prisma.svg',
			'/tailwind.svg',
			'/typescript.svg',
			'/next.svg',
			'/postgres.svg',
		],
		link: 'https://movies-kappa-ecru.vercel.app/',
	},
	{
		id: 2,
		title: 'Car Rental',
		des: 'Car rental with the ability to browse vehicles and make bookings.',
		img: '/car-rentals.png',
		iconLists: [
			'/next.svg',
			'/tailwind.svg',
			'/typescript.svg',
			'/postgres.svg',
			'/prisma.svg',
		],
		link: 'https://car-rentals-wheat.vercel.app/',
	},
	{
		id: 3,
		title: 'Dashboard',
		des: 'Allowing the creation of users and invoices, with highlighting of key metrics.',
		img: '/dashboard.png',
		iconLists: [
			'/prisma.svg',
			'/tailwind.svg',
			'/typescript.svg',
			'/postgres.svg',
			'/next.svg',
		],
		link: 'https://dashboard-ten-eta-75.vercel.app/',
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
			className='pt-32 lg:pt-[8.75rem]'
			id='projects'
			ref={ref}
		>
			<CardHeading heading='Recent projects' />
			<motion.div
				className='flex flex-wrap items-center justify-center gap-16'
				variants={containerVariants}
				initial='hidden'
				animate={controls}
			>
				{projects.map(item => (
					<motion.div
						key={item.id}
						className='lg:h-[22rem] mt-2 flex items-center justify-center sm:w-96 w-[80vw]'
						variants={cardVariants}
					>
						<ProjectCard title={item.title}>
							<Link
								target='_blank'
								href={item.link}
							>
								<div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] lg:h-[30vh] mb-4'>
									<img
										src={item.img}
										alt='cover'
										className='z-10 absolute w-full h-full object-cover object-center rounded-md'
									/>
								</div>

								<h1 className='font-semibold text-xl line-clamp-1'>
									{item.title}
								</h1>

								<p
									className='lg:text-md lg:font-normal font-light text-sm line-clamp-2'
									style={{
										color: '#BEC1DD',
										margin: '1vh 0',
									}}
								>
									{item.des}
								</p>

								<div className='flex items-center justify-between mt-3 mb-3'>
									<div className='flex items-center space-x-2'>
										{item.iconLists.map((icon, index) => (
											<div
												key={index}
												className='border border-white/[.2] rounded-full flex items-center justify-center w-[28px] h-[28px]'
											>
												<img
													className='size-full'
													src={icon}
													alt={`icon${index + 1}`}
												/>
											</div>
										))}
									</div>

									<div className='flex justify-center items-center'>
										<p className='flex'>Check Live Site</p>
										<FaLocationArrow
											className='ms-3'
											color='#000'
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
