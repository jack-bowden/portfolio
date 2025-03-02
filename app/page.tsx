'use client';

import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import { ThemeToggle } from '@/components/ThemeToggle';
import MainHero from '@/components/MainHero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MobileThemeToggle } from '@/components/MobileThemeToggle';

export default function Home() {
	return (
		<main className='relative'>
			<div className='relative z-10 w-full flex flex-col '>
				<nav className='w-full items-center justify-between md:justify-center flex sticky top-5 z-40 '>
					<Navbar />

					<div className='md:hidden'>
						<MobileThemeToggle />
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
