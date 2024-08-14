import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	define: {
		__NAME__: `"${pkg.name}"`,
		__TWITTER__: `"${pkg.author.twitter}"`,
	},
});
