<script lang="ts">
	import Components from '../utils/Components.svelte';

	const list = [
		{
			name: 'Svelte Rune Highlight',
			description: 'Syntax highlighting for Svelte 5 Runes using highlight.js.',
			path: 'https://svelte-rune-highlight.codewithshin.com/'
		},
		{
			name: 'Svelte Lib Helpers',
			description: 'Simplify the process of managing exports, documentation, package distribution for Svelte 4/5/Runes.',
			path: 'https://svelte-lib-helpers.codewithshin.com/'
		}
	];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">Svelte Libraries</h2>
	<p class="mx-auto max-w-3xl text-center text-lg font-normal text-gray-500 dark:text-gray-400">Libraries for your Svelte projects.</p>
</div>

<Components componentData={list} />