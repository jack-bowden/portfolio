import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const navItems = [
	{
		id: 0,
		navTitle: 'home',
		href: '#home',
	},
	{
		id: 1,
		navTitle: 'about',
		href: '#about',
	},
	{
		id: 2,
		navTitle: 'projects',
		href: '#projects',
	},
	{
		id: 3,
		navTitle: 'contact',
		href: '#contact',
	},
	{
		id: 4,
		navTitle: 'skills',
		href: '#skills',
	},
];

const MobileNavbar = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const hideNavItemsVariant = {
		opened: {
			opacity: 0,
			y: '-100%',
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
		closed: {
			opacity: 1,
			y: '0%',
			transition: {
				delay: 1.1,
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
	};

	const mobileMenuVariant = {
		opened: {
			y: '0%',
			transition: {
				delay: 0.15,
				duration: 1.1,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
		closed: {
			y: '-100%',
			transition: {
				delay: 0.35,
				duration: 0.63,
				ease: [0.74, 0, 0.19, 1.02],
			},
		},
	};

	const fadeInVariant = {
		opened: {
			opacity: 1,
			transition: {
				delay: 1.2,
			},
		},
		closed: { opacity: 0 },
	};

	const ulVariant = {
		opened: {
			transition: {
				delayChildren: 1,
				staggerChildren: 0.18,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.06,
				staggerDirection: -1,
			},
		},
	};

	const liVariant = {
		opened: {
			opacity: 1,
			y: '0%',
			transition: {
				duration: 0.65,
				ease: 'easeOut',
			},
		},
		closed: {
			opacity: 0,
			y: '100%',
			transition: {
				duration: 0.25,
				ease: 'easeInOut',
			},
		},
	};

	const fadeInStart = { opacity: 0 };
	const fadeInEnd = { opacity: 1 };
	const fadeInTransition = { duration: 1 };

	return (
		<main className='md:hidden w-full max-h-8 flex items-center'>
			<motion.nav
				initial='closed'
				animate={mobileNavOpen ? 'opened' : 'closed'}
				className='nav'
			>
				<div className='menu-container'>
					<motion.div
						variants={hideNavItemsVariant}
						onClick={() => setMobileNavOpen(true)}
					>
						<Menu />
					</motion.div>
				</div>
				<motion.div
					variants={mobileMenuVariant}
					className='mobile-menu'
				>
					<motion.button
						className='text-black/90 hover:text-black/60 dark:text-white/90 dark:hover:text-white/60'
						variants={fadeInVariant}
						onClick={() => setMobileNavOpen(false)}
					>
						Close
					</motion.button>
					<motion.ul variants={ulVariant}>
						{navItems.map(navItem => (
							<motion.li
								whileTap={{ scale: 0.95 }}
								key={navItem.id}
							>
								<motion.div
									variants={liVariant}
									className='text-black/90 hover:text-black/60 dark:text-white/90 dark:hover:text-white/60'
								>
									{navItem.navTitle}
								</motion.div>
							</motion.li>
						))}
					</motion.ul>
				</motion.div>
			</motion.nav>

			<motion.div
				initial={fadeInStart}
				animate={fadeInEnd}
				transition={fadeInTransition}
				className='img-container'
			></motion.div>
		</main>
	);
};

export default MobileNavbar;
