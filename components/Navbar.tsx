import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Projects', href: '#projects' },
	{ name: 'Skills', href: '#skills' },
	{ name: 'Experience', href: '#experience' },
];

const Navbar = () => {
	return (
		<div className='w-full z-[100] hidden md:block md:w-3/4 lg:2/3 border py-4 px-8 rounded-full backdrop-blur-md bg-inherit shadow-md dark:shadow-white/25'>
			<div className='flex justify-between items-center'>
				<div className='space-x-6'>
					{navItems.map(item => (
						<Link
							className='hover:text-foreground/60'
							href={item.href}
							key={item.name}
						>
							{item.name}
						</Link>
					))}
				</div>
				<div>
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
