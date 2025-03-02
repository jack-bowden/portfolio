const Background = () => {
	return (
		<div className='min-h-screen w-full absolute dark:bg-black bg-white z-0 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center'>
			<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
		</div>
	);
};

export default Background;
