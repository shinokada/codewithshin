<script lang="ts">
	import Components from '../utils/Components.svelte';

	const list = [
		{
			name: 'ABI',
			description: 'Automate Brew Install creates a Gist of your Homebrew formula or cask, and install Homebrew them from a Gist',
			path: 'https://github.com/shinokada/abi'
		},
		{
			name: 'Backpack install',
			description: 'Backpack Installer for macOS/Linux.',
			path: 'https://github.com/shinokada/backpack_install'
		},
		
	];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">Other Goodies</h1>
	<h2 class="mx-auto max-w-3xl text-center text-2xl font-normal text-gray-800 dark:text-gray-100">Homebrew</h2>
</div>

<Components componentData={list} />