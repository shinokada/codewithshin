<script lang="ts">
	import Components from '../utils/Components.svelte';

	const list = [
		{
			name: 'Tera: Terminal Radio',
			description:
				'Interactive terminal music radio player. Play your favorite radio station, CRUD your favorite lists, and explore new radio stations from your terminal.',
			path: 'https://tera.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-Tera-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'Awesome',
			description:
				'A simple shell script package manager that installs a shell script package from a GitHub repo on your macOS/Linux.',
			path: 'https://awesome.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-Awesome-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'Dotties',
			description:
				'A dotfile management script that saves specified dotfiles to a secret Gist and clone them from the Gist.',
			path: 'https://dotties.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-Botties-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'Cleanit',
			description:
				'Cleanit cleanup your ~/Downloads and ~/.Trash directory, and set the cleanup schedule on your MacOS.',
			path: 'https://consize.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-Cleanit-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'Gitstart',
			description:
				'Automates creating a GitHub repo. The script creates .gitignore, a license.txt, a README.md file and commit with a message. It will create a remote repo and push all the files.',
			path: 'https://gitstart.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-Gitstart-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'Teffects',
			description:
				'A bash script that automates creating header images for your articles, email, presentation and other purposes.',
			path: 'https://teffects.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-Teffects-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'Typelet',
			description: 'Create and add large words print it with a typewriter effect.',
			path: 'https://typelet.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-Typelet-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'MacGNU',
			description:
				'Transform the macOS CLI into a fresh GNU/Linux CLI by installing missing GNU programs, updating outdated GNU programs, replacing pre-installed BSD programs.',
			path: 'https://macgnu.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-MacGNU-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'Manop',
			description:
				'A simple Bash script that display a command description and options from Man page or help on macOS/Linux.',
			path: 'https://manop.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-Manop-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'ABI: Automate Brew Install ',
			description:
				'Automate Brew Install creates a Gist of your Homebrew formula or cask, and install Homebrew them from a Gist',
			path: 'https://abi.codewithshin.com/',
			static_badge: {
				badgeContent: 'Homebrew-Abi-blue',
				logo: 'homebrew'
			}
		},
		{
			name: 'Backpack install',
			description: 'Backpack Installer for macOS/Linux.',
			path: 'https://github.com/shinokada/backpack_install',
			static_badge: {
				badgeContent: 'Homebrew-Backpack_install-blue',
				logo: 'homebrew'
			}
		}
	];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1>Homebrew Taps</h1>
	<h2>For Mac and Linux</h2>
</div>

<Components componentData={list} />
