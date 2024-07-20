import React from 'react';

const CardHeading = ({ heading }: { heading: string }) => {
	return (
		<h1 className='text-2xl sm:text-3xl lg:text-4xl text-center mb-10'>
			{heading}
		</h1>
	);
};

export default CardHeading;
