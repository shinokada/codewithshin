<script lang="ts">
	import Components from '../utils/Components.svelte';

	const list = [
		{
			name: 'SSIC',
			description: 'Svelte SVG Icons Creator: Bash Script for creating Svelte SVG icons',
			path: 'https://shinokada.github.io/ssic/'
		},
		{
			name: 'BIMGC',
			description: 'A Node script for converting PNG and JPG images to AVIF and WebP format with various sizes.',
			path: 'https://bimgc.codewithshin.com/'
		},
		{
			name: 'Read HTML Download PDF',
			description: 'Preview and download PDFs with ease.',
			path: 'https://read-doc-download-pdf.vercel.app/'
		},
		{
			name: 'Tera: Terminal Radio',
			description: 'Interactive terminal music radio player. Play your favorite radio station, CRUD your favorite lists, and explore new radio stations from your terminal.',
			path: 'https://tera.codewithshin.com/'
		},
		{
			name: 'imgtaggen',
			description: 'A CLI tool for generating a responsive image tag with support for AVIF and WebP formats',
			path: 'https://imgtaggen.codewithshin.com/'
		},
		{
			name: 'quick-resize',
			description: 'A command-line tool for resizing images quickly and easily. ',
			path: 'https://github.com/shinokada/quick-resize'
		},
		{
			name: 'markdown-docs-as-pdf',
			description: 'A Bash Script to create PDF documents for React, Vue, Svelte, SvelteKit, Nuxt, Vitest, pnpm, Slidev, and more.',
			path: 'https://github.com/shinokada/markdown-docs-as-pdf'
		},
		{
			name: 'pdftoimg',
			description: 'A script is a wrapper for Poppler/pdftoimg. This converts pdf files to image files.',
			path: 'https://github.com/shinokada/pdftoimg'
		}
	];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">Svelte UIs</h2>
	<p class="mx-auto max-w-3xl text-center text-lg font-normal text-gray-500 dark:text-gray-400">UIs for Svelte 4/5/Runes projects</p>
</div>

<Components componentData={list} />