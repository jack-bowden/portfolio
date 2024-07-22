import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Spotlight } from '@/components/Spotlight';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jack Bowden',
	description: 'Portfolio to present myself and display my work',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
				>
					<div className='min-h-screen h-full relative pb-6'>
						<div className='absolute inset-0 min-h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.08] bg-grid-black/[0.03]' />

						<main className='min-h-screen max-w-6xl px-12 md:px-20 py-4 mx-auto antialiased'>
							<div className='w-[500px] h-[360px] bg-indigo-500/60 dark:bg-white/45 rounded-full absolute z-10 top-[5%] left-[5%] translate-x-[-50%] translate-y-[-50%] blur-3xl opacity-50'></div>
							<div className='w-[300px] h-[240px] bg-indigo-500/60 dark:bg-white/45 rounded-full absolute z-10 top-[27.5%] -right-[20%] translate-x-[-50%] translate-y-[-50%] blur-3xl opacity-50'></div>
							<div className='w-[400px] h-[340px] bg-indigo-500/60 dark:bg-white/45 rounded-full absolute z-10 bottom-[40%] left-[5%] translate-x-[-50%] translate-y-[-50%] blur-3xl opacity-50'></div>
							<div className='w-[300px] h-[240px] bg-indigo-500/60 dark:bg-white/45 rounded-full absolute z-10 bottom-[27.5%] left-[90%] translate-x-[-50%] translate-y-[-50%] blur-3xl opacity-50'></div>
							<div className='w-[380px] h-[340px] bg-indigo-500/60 dark:bg-white/45 rounded-full absolute z-10 bottom-[0%] left-[20%] translate-x-[-50%] translate-y-[-50%] blur-3xl opacity-50'></div>
							{children}
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
