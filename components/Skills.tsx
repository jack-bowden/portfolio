'use client';

import { Button } from './ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const frontendSkills = ['HTML', 'Javascript', 'Typescript', 'React', 'Next JS'];
const backendSkills = [
	'Prisma',
	'PostgreSQL',
	'MySQL',
	'Node',
	'Express',
	'MongoDB',
];
const stylingSkills = [
	'Tailwind CSS',
	'Framer Motion',
	'CSS',
	'Material UI',
	'Figma',
];
const miscSkills = [
	'Git',
	'GitHub',
	'Docker',
	'Clerk',
	'VPS',
	'Linux',
	'AWS',
	'Azure',
	'Kubernetes',
];

interface SkillsProps {
	title: string;
	skills: string[];
	controls: any;
	containerVariants: any;
	itemVariants: any;
}

const Skills = () => {
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
		<main
			id='skills'
			className='w-full pt-24'
			ref={ref}
		>
			<h1 className='text-2xl sm:text-3xl lg:text-4xl text-center mb-10'>
				Skills
			</h1>
			<div className='max-w-6xl mx-auto px-2'>
				<SkillSection
					title='Frontend'
					skills={frontendSkills}
					controls={controls}
					containerVariants={containerVariants}
					itemVariants={itemVariants}
				/>
				<SkillSection
					title='Backend'
					skills={backendSkills}
					controls={controls}
					containerVariants={containerVariants}
					itemVariants={itemVariants}
				/>
				<SkillSection
					title='Styling'
					skills={stylingSkills}
					controls={controls}
					containerVariants={containerVariants}
					itemVariants={itemVariants}
				/>
				<SkillSection
					title='Misc'
					skills={miscSkills}
					controls={controls}
					containerVariants={containerVariants}
					itemVariants={itemVariants}
				/>
			</div>
		</main>
	);
};

const SkillSection = ({
	title,
	skills,
	controls,
	containerVariants,
	itemVariants,
}: SkillsProps) => (
	<div className='mb-8'>
		<h3 className='text-xl font-bold mb-4'>{title}</h3>
		<motion.div
			className='flex flex-wrap gap-2 md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4'
			variants={containerVariants}
			initial='hidden'
			animate={controls}
		>
			{skills.map((skill, index) => (
				<motion.div
					key={index}
					variants={itemVariants}
				>
					<Button
						className='cursor-default border-indigo-500 border hover:text-indigo-500 w-full'
						variant='outline'
					>
						{skill}
					</Button>
				</motion.div>
			))}
		</motion.div>
	</div>
);

export default Skills;
