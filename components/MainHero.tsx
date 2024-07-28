import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MainHero = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.1,
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
			},
		},
	};

	return (
		<motion.div
			className='pt-10 md:pt-24 md:pb-24 flex flex-col md:flex-row items-center'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			<motion.div
				className='w-full md:w-1/2 space-y-6 flex flex-col'
				variants={itemVariants}
			>
				<motion.p variants={itemVariants}>Welcome to my portfolio</motion.p>
				<motion.h1
					className='text-2xl sm:text-3xl lg:text-4xl'
					variants={itemVariants}
				>
					My name is Jack Bowden,
					<br />
					I'm a UK based software engineer
				</motion.h1>
				<motion.p variants={itemVariants}>
					I have a passion for attempting to get my thoughts out in a way that
					not only presents them with a nice, clean interface, but also
					something that functions perfectly sound. I'm always looking to evolve
					and learn in order to be the best I can be.
				</motion.p>
				<motion.div
					className='flex space-x-6'
					variants={itemVariants}
				>
					<Button
						variant='ghost'
						className='p-0 hover:bg-transparent'
					>
						<Link
							target='_blank'
							href='https://www.linkedin.com/in/jackbowden22061992'
						>
							<FaLinkedin className='size-6 md:size-8 hover:text-foreground/60' />
						</Link>
					</Button>
					<Button
						variant='ghost'
						className='p-0 hover:bg-transparent'
					>
						<Link
							target='_blank'
							href='https://github.com/jack-bowden'
						>
							<FaGithub className='size-6 md:size-8 hover:text-foreground/60' />
						</Link>
					</Button>
				</motion.div>
				<motion.div variants={itemVariants}>
					<Button
						className='w-36 border-indigo-500 hover:text-indigo-500 hover:font-bold antialiased'
						variant='outline'
					>
						<Link href='#projects'>View my projects</Link>
					</Button>
				</motion.div>
			</motion.div>
			<motion.div
				className='w-1/2 flex items-center justify-end z-10'
				variants={itemVariants}
			>
				<div className='relative group w-fit'>
					<div className='absolute hidden md:block inset-0 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out shadow-lg'></div>
					<Image
						src='/avatar.png'
						alt='avatar'
						width={200}
						height={200}
						className='opacity-85 mt-4 md:mt-0 rounded-full transition-transform duration-300 ease-in-out md:group-hover:scale-95 relative z-10'
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default MainHero;
