<script lang="ts">
	import Components from '../utils/Components.svelte';
	import MetaTag from '../utils/MetaTag.svelte';

	const list = [
		{
			name: 'Tera: Terminal Radio',
			description: 'Interactive terminal music radio player. Play your favorite radio station, CRUD your favorite lists, and explore new radio stations from your terminal.',
			path: 'https://tera.codewithshin.com/'
		},
		{
			name: 'Awesome',
			description: 'A simple shell script package manager that installs a shell script package from a GitHub repo on your macOS/Linux.',
			path: 'https://awesome.codewithshin.com/'
		},
		{
			name: 'Dotties',
			description: 'A dotfile management script that saves specified dotfiles to a secret Gist and clone them from the Gist.',
			path: 'https://dotties.codewithshin.com/'
		},
		{
			name: 'Cleanit',
			description: 'Cleanit cleanup your ~/Downloads and ~/.Trash directory, and set the cleanup schedule on your MacOS.',
			path: 'https://consize.codewithshin.com/'
		},
		{
			name: 'Gitstart',
			description: 'Automates creating a GitHub repo. The script creates .gitignore, a license.txt, a README.md file and commit with a message. It will create a remote repo and push all the files.',
			path: 'https://gitstart.codewithshin.com/'
		},
		{
			name: 'Teffects',
			description: 'A bash script that automates creating header images for your articles, email, presentation and other purposes.',
			path: 'https://teffects.codewithshin.com/'
		},
		{
			name: 'Typelet',
			description: 'Create and add large words print it with a typewriter effect.',
			path: 'https://typelet.codewithshin.com/'
		},
		{
			name: 'MacGNU',
			description:
				'Transform the macOS CLI into a fresh GNU/Linux CLI by installing missing GNU programs, updating outdated GNU programs, replacing pre-installed BSD programs.',
			path: 'https://macgnu.codewithshin.com/'
		},
		{
			name: 'Manop',
			description:
				'A simple Bash script that display a command description and options from Man page or help on macOS/Linux.',
			path: 'https://manop.codewithshin.com/'
		},
		{
			name: 'ABI: Automate Brew Install ',
			description: 'Automate Brew Install creates a Gist of your Homebrew formula or cask, and install Homebrew them from a Gist',
			path: 'https://abi.codewithshin.com/'
		},
		{
			name: 'Backpack install',
			description: 'Backpack Installer for macOS/Linux.',
			path: 'https://github.com/shinokada/backpack_install'
		},
	];
	// meta tags
	const meta = {
		title: 'Homebrew Taps - codewithshin.com',
		ogSubtitle: 'Homebrew Taps',
		description: 'Terminal tools for devs includes terminal radio, scripts, dotfiles, & more.  Automate tasks, manage files, & boost efficiency.',
    path: '/homebrew'
	}
</script>

<MetaTag {...meta} />

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1>Homebrew Taps</h1>
	<h2>For Mac and Linux</h2>
</div>

<Components componentData={list} />