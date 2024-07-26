/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	images: {
		unoptimized: true,
		domains: ['api.microlink.io'],
	},
};

export default nextConfig;
