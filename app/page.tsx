'use client';

import MobileNavbar from '@/components/MobileNavbar';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import { ThemeToggle } from '@/components/ThemeToggle';
import MainHero from '@/components/MainHero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main className='relative min-h-screen'>
			<div className='relative z-10 h-full w-full flex flex-col '>
				<nav className='w-full items-center justify-between md:justify-center flex sticky top-5 z-40 '>
					<Navbar />
					{/* <MobileNavbar /> */}
					<div className='md:hidden'>
						<ThemeToggle />
					</div>
				</nav>
				<MainHero />
				<Projects />
				<About />
				<Skills />
				<Contact />
				<Footer />
			</div>
		</main>
	);
}
