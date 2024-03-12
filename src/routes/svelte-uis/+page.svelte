<script lang="ts">
	import Components from '../utils/Components.svelte';

	const list = [
		{
			name: 'Svelte 5 UI Lib',
			description: 'A UI library crafted for Svelte 5 Runes.',
			path: 'https://svelte-5-ui-lib.codewithshin.com/'
		},
		{
			name: 'Flowbite Svelte',
			description: 'An official Flowbite component library for Svelte 4/5.',
			path: 'https://flowbite-svelte.com/'
		},
		{
			name: 'Flowbite Svelte Icons',
			description: '540+ SVG Flowbite icons components for Svelte 3/4/5/Runes.',
			path: 'https://flowbite-svelte-icons.codewithshin.com/'
		},
		{
			name: 'Flowbite Svelte Admin Dashboard',
			description: 'Admin dashboard for Flowbite Svelte.',
			path: 'https://flowbite-svelte-admin-dashboard.vercel.app/'
		},
		{
			name: 'Flowbite Svelte Blocks',
			description: 'Svelte blocks for Flowbite Svelte.',
			path: 'https://flowbite-svelte-blocks.codewithshin.com/'
		}
	];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">Flowbite Svelte UIs</h2>
	<p class="mx-auto max-w-3xl text-center text-lg font-normal text-gray-500 dark:text-gray-400">UIs for Svelte 4/5/Runes projects</p>
</div>

<Components componentData={list} />