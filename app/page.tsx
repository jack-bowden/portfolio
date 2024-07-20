'use client';

import MobileNavbar from '@/components/MobileNavbar';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Projects from '@/components/Projects';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
	return (
		<main className='relative min-h-screen'>
			<div className='relative z-10 h-full w-full flex flex-col '>
				<nav className='w-full items-center justify-between md:justify-center flex sticky top-0 z-40 '>
					<Navbar />
					<MobileNavbar />
					<div className='md:hidden'>
						<ThemeToggle />
					</div>
				</nav>
				<div className='pt-24 flex flex-col md:flex-row items-center'>
					<div className='w-full md:w-1/2 space-y-6 flex flex-col'>
						<p>Welcome to my portfolio</p>
						<h1 className='text-2xl sm:text-3xl lg:text-4xl'>
							My name is Jack Bowden,
							<br />
							I'm a web developer
						</h1>

						<div className='flex space-x-6'>
							<Button
								variant='ghost'
								className='p-0 hover:bg-transparent'
							>
								<Link href='/'>
									<FaLinkedin className='size-6 md:size-8 hover:text-foreground/60' />
								</Link>
							</Button>
							<Button
								variant='ghost'
								className='p-0 hover:bg-transparent'
							>
								<Link
									target='_blank'
									href='https://github.com/hihihi45?tab=repositories'
								>
									<FaGithub className='size-6 md:size-8 hover:text-foreground/60' />
								</Link>
							</Button>
						</div>
						<Button
							className='w-36 border-indigo-500 hover:text-indigo-500 hover:font-bold antialiased'
							variant='outline'
						>
							<Link href='#projects'>View my projects</Link>
						</Button>
					</div>
					<div className='w-1/2 flex items-center justify-end z-10'>
						<Image
							src='/avatar.png'
							alt='avatar'
							width={200}
							height={200}
							className='opacity-85 mt-12 md:mt-0'
						/>
					</div>
				</div>
				<div className=''>
					<Projects />
				</div>
			</div>
		</main>
	);
}
