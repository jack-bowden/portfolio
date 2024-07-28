'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from './HoverBorderGradient';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Contact', href: '#contact' },
];

const Navbar = () => {
	const [hoveredItem, setHoveredItem] = useState<number | null>(null);

	const lineVariants = {
		hidden: { pathLength: 0 },
		visible: { pathLength: 1, transition: { duration: 1 } },
	};

	const navbarVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
	};

	return (
		<HoverBorderGradient>
			<motion.div
				className='w-full z-[100] hidden md:block border py-4 px-8 rounded-full backdrop-blur-md bg-inherit shadow-md dark:shadow-white/25'
				variants={navbarVariants}
				initial='hidden'
				animate='visible'
			>
				<div className='flex justify-between items-center'>
					<div className='space-x-6 relative'>
						{navItems.map((item, index) => (
							<Link
								className='hover:text-foreground/60 relative'
								href={item.href}
								key={item.name}
								onMouseEnter={() => setHoveredItem(index)}
								onMouseLeave={() => setHoveredItem(null)}
							>
								{item.name}
								{hoveredItem === index && (
									<motion.svg
										className='absolute -bottom-1 left-0 w-full'
										height='2'
										width='100%'
										initial='hidden'
										animate='visible'
									>
										<motion.line
											x1='0'
											y1='0'
											x2='100%'
											y2='0'
											stroke='currentColor'
											strokeWidth='2'
											variants={lineVariants}
										/>
									</motion.svg>
								)}
							</Link>
						))}
					</div>
					<div>
						<ThemeToggle />
					</div>
				</div>
			</motion.div>
		</HoverBorderGradient>
	);
};

export default Navbar;
