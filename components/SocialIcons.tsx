import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
	return (
		<main>
			<div className='flex space-x-6'>
				<Button
					variant='ghost'
					className='p-0 hover:bg-transparent'
				>
					<Link
						target='_blank'
						href='https://linkedin.com/in/jackbowden22061992'
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
				<Button
					variant='ghost'
					className='p-0 hover:bg-transparent'
				>
					<a href='mailto:jackbowden1992@gmail.com'>
						<Mail className='size-6 md:size-8 hover:text-foreground/60' />
					</a>
				</Button>
			</div>
		</main>
	);
};

export default SocialIcons;
