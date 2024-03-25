<script lang="ts">
	import Components from '../utils/Components.svelte';
	import MetaTag from '../utils/MetaTag.svelte';

	const list = [
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
		},
		{
			name: 'Svelte Lib Helpers',
			description: 'Simplify the process of managing exports, documentation, package distribution for Svelte 4/5/Runes.',
			path: 'https://svelte-lib-helpers.codewithshin.com/'
		}
	];

	const listRunes = [
		{
			name: 'Svelte 5 UI Lib',
			description: 'A UI library crafted for Svelte 5 Runes.',
			path: 'https://svelte-5-ui-lib.codewithshin.com/'
		},
		{
			name: 'Svelte Rune Highlight',
			description: 'Syntax highlighting for Svelte 5 Runes using highlight.js.',
			path: 'https://svelte-rune-highlight.codewithshin.com/'
		},
		{
			name: 'Svelte Lib Helpers',
			description: 'Simplify the process of managing exports, documentation, package distribution for Svelte 4/5/Runes.',
			path: 'https://svelte-lib-helpers.codewithshin.com/'
		},
		{
			name: 'Svelte Carbonads',
			description: 'A component library that  set up a Carbonads on your SvelteKit project',
			path: 'https://svelte-carbonads.codewithshin.com/'
		}
	];
	const demo = [
		{
			name: 'Dynamic styling',
			description: 'Dynamic styling for Svelte 5/Runes projects',
			path: 'https://stackblitz.com/edit/sveltejs-kit-template-default-psvleh?file=src%2Flib%2Fstyles%2Flight.css'
		}
	]

	// meta tags
	const meta = {
		title: 'Svelte Libraries - codewithshin.com',
		ogSubtitle: 'Svelte Libraries & Projects',
		description: 'Component Libraries and Projects for Svelte 4/5/Runes.',
    path: '/svelte'
	}
</script>

<MetaTag {...meta} />

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1>Svelte Libraries</h1>
	<h2>For Svelte 5/Runes projects</h2>
</div>

<Components componentData={listRunes} />

<div class="my-8 flex flex-col items-center gap-4 sm:gap-4">
	<h2>For Svelte 4/5 projects</h2>
</div>

<Components componentData={list} />

<div class="my-8 flex flex-col items-center gap-4 sm:gap-4">
	<h2>Demo and Starters</h2>
</div>

<Components componentData={demo} />