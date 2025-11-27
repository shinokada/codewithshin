import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
	const pageMetaTags: MetaProps = {
		title: 'Terminal Tools - codewithshin.com',
		description: 'Bash and Node.js tools for your terminal',
		og: {
			title: 'Terminal Tools - codewithshin.com',
			description: 'Bash and Node.js tools for your terminal',
			image: 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Terminal%20Tools'
		},
		twitter: {
			title: 'Terminal Tools - codewithshin.com',
			description: 'Bash and Node.js tools for your terminal',
			image: 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Terminal%20Tools'
		}
	};
	return { pageMetaTags };
};
