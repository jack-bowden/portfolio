/** @type {import('postcss-load-config').Config} */
const config = {
	plugins:
		process.env.NODE_ENV === 'production'
			? [
					'autoprefixer',
					[
						'@fullhuman/postcss-purgecss',
						{
							content: ['./{pages,components}/**/*.{js,jsx}'],
							safelist: ['html', 'body'],
							defaultExtractor: content =>
								content.match(/[\w-/:]+(?<!:)/g) || [],
						},
					],
			  ]
			: ['autoprefixer'],
};

export default config;
