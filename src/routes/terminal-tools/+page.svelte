<script lang="ts">
	import Components from '../utils/Components.svelte';
	import MetaTag from '../utils/MetaTag.svelte';
	const list = [
		{
			name: 'TERA: Terminal Radio',
			description: 'Interactive terminal music radio player. Play your favorite radio station, CRUD your favorite lists, and explore new radio stations from your terminal.',
			path: 'https://tera.codewithshin.com/'
		},
		{
			name: 'Teffects',
			description: 'A bash script that automates creating header images for your articles, email, presentation and other purposes.',
			path: 'https://teffects.codewithshin.com/'
		},
		{
			name: 'Shellscript starter',
			description: 'Quick starter for Shell/Bash script',
			path: 'https://shellscript-starter.codewithshin.com/'
		},
		{
			name: 'MacGNU',
			description:
				'Transform the macOS CLI into a fresh GNU/Linux CLI by installing missing GNU programs, updating outdated GNU programs, replacing pre-installed BSD programs.',
			path: 'https://macgnu.codewithshin.com/'
		},
		{
			name: 'Awesome',
			description: 'A simple shell script package manager that installs a shell script package from a GitHub repo on your macOS/Linux.',
			path: 'https://awesome.codewithshin.com/'
		},
		{
			name: 'BIMGC',
			description: 'A Node script for converting PNG and JPG images to AVIF and WebP format with various sizes.',
			path: 'https://bimgc.codewithshin.com/'
		},
		{
			name: 'Consize',
			description: 'Convert formats and resize image',
			path: 'https://consize.codewithshin.com/'
		},
		{
			name: 'SPT: Simple Pacakage Tool',
			description: 'A Bash script to generate a basic DEBIAN package from Github-name/repo-name.',
			path: 'https://spt.codewithshin.com/'
		},
		{
			name: 'Typelet',
			description: 'Create and add large words print it with a typewriter effect.',
			path: 'https://typelet.codewithshin.com/'
		},
		{
			name: 'Gitstart',
			description: 'Automates creating a GitHub repo. The script creates .gitignore, a license.txt, a README.md file and commit with a message. It will create a remote repo and push all the files.',
			path: 'https://gitstart.codewithshin.com/'
		},
		{
			name: 'Gitig',
			description: 'Fix your gitignore problem by recursively removing all unstaged and paths from the index, and adding all files, commit, and push to the origin main.',
      path: 'https://gitig.codewithshin.com/'
		},
		{
			name: 'Replaceit',
			description: 'Replaces spaces of file names with underscores as the default',
			path: 'https://replaceit.codewithshin.com/'
		},
		{
			name: 'Dotties',
			description: 'A dotfile management script that saves specified dotfiles to a secret Gist and clone them from the Gist.',
			path: 'https://dotties.codewithshin.com/'
		},
		{
			name: 'imgtaggen',
			description: 'A CLI tool for generating a responsive image tag with support for AVIF and WebP formats',
			path: 'https://imgtaggen.codewithshin.com/'
		},
		{
			name: 'markdown-docs-as-pdf',
			description: 'A Bash Script to create PDF documents for React, Vue, Svelte, SvelteKit, Nuxt, Vitest, pnpm, Slidev, and more.',
			path: 'https://markdown-docs-as-pdf.codewithshin.com'
		},
		{
			name: 'Cleanit',
			description: 'Cleanit cleanup your ~/Downloads and ~/.Trash directory, and set the cleanup schedule on your MacOS.',
			path: 'https://cleanit.codewithshin.com/'
		},
		{
			name: 'ABI: Automate Brew Install',
			description: 'Automate Brew Install creates a Gist of your Homebrew formula or cask, and install Homebrew them from a Gist',
			path: 'https://abi.codewithshin.com/'
		},
		{
			name: 'Manop',
			description:
				'A simple Bash script that display a command description and options from Man page or help on macOS/Linux.',
			path: 'https://manop.codewithshin.com/'
		},
		{
			name: 'Read HTML Download PDF',
			description: 'Preview and download PDFs with ease.',
			path: 'https://read-doc-download-pdf.codewithshin.com/'
		},
		{
			name: 'SSIC',
			description: 'Svelte SVG Icons Creator: Bash Script for creating Svelte SVG icons',
			path: 'https://ssic.codewithshin.com/'
		},
		{
			name: 'quick-resize',
			description: 'A command-line tool for resizing images quickly and easily.',
			path: 'https://github.com/shinokada/quick-resize'
		},
		{
			name: 'pdftoimg',
			description: 'A wrapper for Poppler/pdftoimg that converts pdf files to image files.',
			path: 'https://github.com/shinokada/pdftoimg'
		},
	];
	// meta tags
	const meta = {
		title: 'Terminal Tools - codewithshin.com',
		ogSubtitle: 'Terminal Tools',
		description: 'Terminal tools for devs. Automate tasks, manage files, convert formats & create graphics. PDFs, Images & more!',
    path: '/terminal-tools'
	}
</script>

<MetaTag {...meta} />

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1>Terminal Tools</h1>
	<h2>Bash and Node.js tools for your terminal.</h2>
</div>

<Components componentData={list} />