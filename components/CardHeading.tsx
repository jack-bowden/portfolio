import { cn } from '@/lib/utils';

const CardHeading = ({
	heading,
	className,
}: {
	heading: string;
	className?: string;
}) => {
	return (
		<h1
			className={cn(
				'text-2xl sm:text-3xl lg:text-4xl text-center mb-10',
				className
			)}
		>
			{heading}
		</h1>
	);
};

export default CardHeading;
