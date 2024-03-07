<script lang="ts">
	import Slider from '../utils/Slider.svelte';
	const items = [
		{
			name: 'SSIC',
			badge: 'Bash',
			description: 'Svelte SVG Icons Creator: Bash Script for creating Svelte SVG icons',
			href: 'https://shinokada.github.io/ssic/'
		},
		{
			name: 'BIMGC',
			badge: 'Node',
			description:
				'A Node script for converting PNG and JPG images to AVIF and WebP format with various sizes.',
			href: 'https://bimgc.codewithshin.com/'
		},
		{
			name: 'Read HTML Download PDF',
			badge: 'Vivliostyle',
			description: 'Preview and download PDFs with ease.',
			href: 'https://read-doc-download-pdf.vercel.app/'
		},
		{
			name: 'Tera: Terminal Radio',
			badge: 'Bash',
			description:
				'Interactive terminal music radio player. Play your favorite radio station, CRUD your favorite lists, and explore new radio stations from your terminal.',
			href: 'https://tera.codewithshin.com/'
		},
		{
			name: 'Gitstart',
			badge: 'Bash',
			description:
				'Automates creating a GitHub repo. The script creates .gitignore, a license.txt, a README.md file and commit with a message. It will create a remote repo and push all the files.',
			href: 'https://gitstart.codewithshin.com/'
		},
		{
			name: 'TEFFECTS',
			badge: 'Bash 5',
			description:
				'automates creating header images for your articles, email, presentation and other purposes. Tested on macOS and Ubuntu.',
			href: 'https://effects.codewithshin.com/'
		},
		{
			name: 'Shellscript starter',
			badge: 'Shell Script',
			description: 'Quick starter for Shell/Bash script',
			href: 'https://shellscript-starter.codewithshin.com/'
		},
		{
			name: 'MacGNU',
			badge: 'Bash',
			description:
				'Transform the macOS CLI into a fresh GNU/Linux CLI experience by installing missing GNU programs, updating outdated GNU programs, replacing pre-installed BSD programs with their preferred GNU implementation.',
			href: 'https://macgnu.codewithshin.com/'
		},
		{
			name: 'Consize',
			badge: 'Bash',
			description: 'Convert formats and resize image',
			href: 'https://consize.codewithshin.com/'
		},
		{
			name: 'SPT: Simple Pacakage Tool',
			badge: 'Bash',
			description: 'A Bash script to generate a basic DEBIAN package from Github-name/repo-name.',
			href: 'https://spt.codewithshin.com/'
		},
		{
			name: 'Replaceit',
			badge: 'Bash',
			description: 'replaces spaces of file names with underscores as the default',
			href: 'https://replaceit.codewithshin.com/'
		},
		{
			name: 'dotties',
			badge: 'Bash',
			description:
				'Dotties is a simple dotfile management script. It saves specified dotfiles in the home directory to a secret Gist. I also can clone them from the Gist, and more.',
			href: 'https://dotties.codewithshin.com/'
		},
		{
			name: 'awesome',
			badge: 'Bash',
			description:
				'The awesome is a simple shell script package manager. Awesome installs a shell script package from a GitHub repo on your macOS/Linux.',
			href: 'https://awesome.codewithshin.com/'
		},
		{
			name: 'imgtaggen',
			badge: 'Bash',
			description:
				'A CLI tool for generating a responsive image tag with support for AVIF and WebP formats',
			href: 'https://imgtaggen.codewithshin.com/'
		},
		{
			name: 'quick-resize',
			badge: 'Bash',
			description: 'A command-line tool for resizing images quickly and easily. ',
			href: 'https://github.com/shinokada/quick-resize'
		},
		{
			name: 'ssic',
			badge: 'Bash 5',
			description: 'Creates SVG icons for Svelte/SvelteKit from a wide variety of icon libraries.',
			href: 'https://ssic.codewithshin.com/'
		},
		{
			name: 'markdown-docs-as-pdf',
			badge: 'Bash',
			description:
				'A Bash Script to create PDF documents for React, Vue, Svelte, SvelteKit, Nuxt, Vitest, pnpm, Slidev, and more.',
			href: 'https://github.com/shinokada/markdown-docs-as-pdf'
		},
		{
			name: 'pdftoimg',
			badge: 'Bash',
			description:
				'A script is a wrapper for Poppler/pdftoimg. This converts pdf files to image files.',
			href: 'https://github.com/shinokada/pdftoimg'
		}
	];
</script>

<Slider
	title="Terminal Tools"
	list={items}
	cardClass="dark:bg-cyan-900 hover:bg-gray-100 hover:dark:bg-cyan-800 max-w-[400px]"
/>
