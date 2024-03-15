<script lang="ts">
	import Components from '../utils/Components.svelte';
	const listRunes = [
		{
			name: 'Flowbite Svelte Icons',
			description: '510+ SVG Flowbite icon components for Svelte 4/5/Runes.',
			path: 'https://flowbite-svelte-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Ant Design Icons',
			description: '780+ Ant Design SVG Icons (v4.2.1) for Svelte.',
			path: 'https://svelte-ant-design-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Awesome Icons',
			description: '2000+ Font Awesome SVG icon components for Svelte 4/5/Runes.',
			path: 'https://svelte-awesome-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Supertiny',
			description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte 4/5/Runes.',
			path: 'https://svelte-supertiny.codewithshin.com/'
		}
	];
	const list = [
		{
			name: 'Flowbite Svelte Icons',
			description: '510+ SVG Flowbite icon components for Svelte 4/5/Runes.',
			path: 'https://flowbite-svelte-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Awesome Icons',
			description: '2000+ Font Awesome SVG icon components for Svelte 4/5/Runes.',
			path: 'https://svelte-awesome-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Supertiny',
			description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte 4/5/Runes.',
			path: 'https://svelte-supertiny.codewithshin.com/'
		},
		{
			name: 'Svelte Ant Design Icons',
			description: '780+ Ant Design SVG Icons (v4.2.1) for Svelte.',
			path: 'https://svelte-ant-design-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Bootstrap SVG Icons',
			description: '1950+ Bootstrap SVG icon components for Svelte.',
			path: 'https://svelte-bootstrap-svg-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Boxicons',
			description: '1500+ SVG boxicons components for Svelte.',
			path: 'https://svelte-boxicons.codewithshin.com/'
		},
		{
			name: 'Svelte Circle Flags',
			description: '380+ SVG Circle Flag icons',
			path: 'https://svelte-circle-flags.codewithshin.com/'
		},
		{
			name: 'Svelte Coreui Icons',
			description: '1500+ beautifully crafted CoreUI Icons for Svelte.',
			path: 'https://svelte-coreui-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Cryptocurrency Icons',
			description: '470+ SVG crypto currency icon components for Svelte.',
			path: 'https://svelte-cryptocurrency-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Cssgg Icons',
			description: '700+ SVG icons from css.gg for Svelte.',
			path: 'https://svelte-cssgg-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Evil Icons',
			description: '70+ SVG evil-icons components for Svelte.',
			path: 'https://svelte-evil-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Feathers',
			description: '280+ SVG Feather icons for Svelte.',
			path: 'https://svelte-feathers.codewithshin.com/'
		},
		{
			name: 'Svelte File Icons',
			description: '930+ SVG file icons for Svelte.',
			path: 'https://svelte-file-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Flag Icons',
			description: '260+ SVG flag icons for Svelte.',
			path: 'https://svelte-flag-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Flags',
			description: '250+ SVG flag icons for Svelte',
			path: 'https://svelte-flags.codewithshin.com/'
		},
		{
			name: 'Svelte Google Materialdesign Icons',
			description: '2120+ Google Material Design icons for Svelte.',
			path: 'https://svelte-google-materialdesign-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Heros',
			description: '580+ Tailwind CSS Hero icons for Svelte.',
			path: 'https://svelte-heros.codewithshin.com/'
		},
		{
			name: 'Svelte Heros v2',
			description: '870+ Tailwind CSS Hero icons v2 for Svelte.',
			path: 'https://svelte-heros-v2.codewithshin.com/'
		},
		{
			name: 'Svelte Ionicons',
			description: '1330+ Ionicicons for Svelte.',
			path: 'https://svelte-ionicons.codewithshin.com/'
		},
		{
			name: 'Svelte Lucide',
			description: '1210+ Lucide icons for Svelte.',
			path: 'https://svelte-lucide.codewithshin.com/'
		},
		{
			name: 'Svelte Materialdesign Icons',
			description: '7330+ MaterialDesign icons for Svelte.',
			path: 'https://svelte-materialdesign-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Oct',
			description: '270+ Octicons icons for Svelte.',
			path: 'https://svelte-oct.codewithshin.com/'
		},
		{
			name: 'Svelte Radix',
			description: '310+ Radix icons for Svelte.',
			path: 'https://svelte-radix.codewithshin.com/'
		},
		{
			name: 'Svelte Remix Icons',
			description: '2270+ Remixicons for Svelte.',
			path: 'https://svelte-remix.codewithshin.com/'
		},
		{
			name: 'Svelte Simples',
			description: '2620+ popular brands Simple-icons for Svelte.',
			path: 'https://svelte-simples.codewithshin.com/'
		},
		{
			name: 'Svelte Tabler',
			description: '4600+ Tabler icons for Svelte.',
			path: 'https://svelte-tabler.codewithshin.com/'
		},
		{
			name: 'Svelte Teenyicons',
			description: '600+ Teenyicons for Svelte.',
			path: 'https://svelte-teenyicons.codewithshin.com/'
		},
		{
			name: 'Svelte Twitter Emoji',
			description: '3600+ Twitter emoji color icons for Svelte.',
			path: 'https://svelte-twitter-emoji.codewithshin.com/'
		},
		{
			name: 'Svelte Weather',
			description: '210+ weather-icons for Svelte.',
			path: 'https://svelte-weather.codewithshin.com/'
		}
	];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">29 Svelte SVG Icon Sets</h1>
	<h2 class="mx-auto max-w-3xl text-center text-2xl font-normal text-gray-800 dark:text-gray-100">For Svelte 5/Runes projects</h2>
</div>

<Components componentData={listRunes} />

<div class="my-8 flex flex-col items-center gap-4 sm:gap-4">
	<h2 class="mx-auto max-w-3xl text-center text-2xl font-normal text-gray-800 dark:text-gray-100">For Svelte 4/5 projects</h2>
</div>

<Components componentData={list} />