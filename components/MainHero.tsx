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
			className='pt-10 md:pt-32 md:pb-24 flex flex-col md:flex-row items-center '
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
					I have a passion for learning, I strive to constantly improve and be
					the best engineer that I can possibly be
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
				<div className='relative group w-full flex justify-center md:justify-end'>
					<Image
						src='/linkedin-picture.jpg'
						alt='avatar'
						width={140}
						height={140}
						className='mt-20 md:mt-0 rounded-xl shadow-lg block md:hidden'
					/>
					<Image
						src='/linkedin-picture.jpg'
						alt='avatar'
						width={200}
						height={200}
						className='mt-20 md:mt-0 rounded-xl shadow-lg hidden md:block'
					/>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default MainHero;
