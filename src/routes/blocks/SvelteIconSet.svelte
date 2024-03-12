<script lang="ts">
	import Slider from '../utils/Slider.svelte';
	import type { BadgeColorType } from '../utils/Slider.svelte';
	import Components from '../utils/Components.svelte';
	// interface Props{
	// 	size?: "xs" | "sm" | "md" | "lg" | "xl";
	// 	customSize?: string;
	// }
	// let { customSize, size } = $props<Props>();
	const size = 'xs';
	const customSize = 'max-w-[220px]';
	const list = [
		{
			title: 'Flowbite Svelte Icons',
			dir: 'icons',
			badge: 'Svelte 4/5/Runes',
			badgeColor: 'red' as BadgeColorType,
			description: '510+ SVG Flowbite icon components for Svelte 4/5/Runes.',
			path: 'https://flowbite-svelte-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Awesome Icons',
			dir: 'icons',
			badge: 'Svelte 4/5/Runes',
			badgeColor: 'red' as BadgeColorType,
			description: '2000+ Font Awesome SVG icon components for Svelte 4/5/Runes.',
			path: 'https://svelte-awesome-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Supertiny',
			dir: 'icons',
			badge: 'Svelte 4/5/Runes',
			badgeColor: 'red' as BadgeColorType,
			description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte 4/5/Runes.',
			path: 'https://svelte-supertiny.codewithshin.com/'
		},
		{
			title: 'Svelte Ant Design Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '780+ Ant Design SVG Icons (v4.2.1) for Svelte.',
			path: 'https://svelte-ant-design-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Bootstrap SVG Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '1950+ Bootstrap SVG icon components for Svelte.',
			path: 'https://svelte-bootstrap-svg-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Boxicons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '1500+ SVG boxicons components for Svelte.',
			path: 'https://svelte-boxicons.codewithshin.com/'
		},
		{
			title: 'Svelte Circle Flags',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '380+ SVG Circle Flag icons',
			path: 'https://svelte-circle-flags.codewithshin.com/'
		},
		{
			title: 'Svelte Coreui Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '1500+ beautifully crafted CoreUI Icons for Svelte.',
			path: 'https://svelte-coreui-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Cryptocurrency Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '470+ SVG crypto currency icon components for Svelte.',
			path: 'https://svelte-cryptocurrency-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Cssgg Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '700+ SVG icons from css.gg for Svelte.',
			path: 'https://svelte-cssgg-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Evil Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '70+ SVG evil-icons components for Svelte.',
			path: 'https://svelte-evil-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Feathers',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '280+ SVG Feather icons for Svelte.',
			path: 'https://svelte-feathers.codewithshin.com/'
		},
		{
			title: 'Svelte File Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '930+ SVG file icons for Svelte.',
			path: 'https://svelte-file-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Flag Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '260+ SVG flag icons for Svelte.',
			path: 'https://svelte-flag-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Flags',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '250+ SVG flag icons for Svelte',
			path: 'https://svelte-flags.codewithshin.com/'
		},
		{
			title: 'Svelte Google Materialdesign Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '2120+ Google Material Design icons for Svelte.',
			path: 'https://svelte-google-materialdesign-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Heros',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '580+ Tailwind CSS Hero icons for Svelte.',
			path: 'https://svelte-heros.codewithshin.com/'
		},
		{
			title: 'Svelte Heros v2',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '870+ Tailwind CSS Hero icons v2 for Svelte.',
			path: 'https://svelte-heros-v2.codewithshin.com/'
		},
		{
			title: 'Svelte Ionicons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '1330+ Ionicicons for Svelte.',
			path: 'https://svelte-ionicons.codewithshin.com/'
		},
		{
			title: 'Svelte Lucide',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '1210+ Lucide icons for Svelte.',
			path: 'https://svelte-lucide.codewithshin.com/'
		},
		{
			title: 'Svelte Materialdesign Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '7330+ MaterialDesign icons for Svelte.',
			path: 'https://svelte-materialdesign-icons.codewithshin.com/'
		},
		{
			title: 'Svelte Oct',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '270+ Octicons icons for Svelte.',
			path: 'https://svelte-oct.codewithshin.com/'
		},
		{
			title: 'Svelte Radix',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '310+ Radix icons for Svelte.',
			path: 'https://svelte-radix.codewithshin.com/'
		},
		{
			title: 'Svelte Remix Icons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '2270+ Remixicons for Svelte.',
			path: 'https://svelte-remix.codewithshin.com/'
		},
		{
			title: 'Svelte Simples',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '2620+ popular brands Simple-icons for Svelte.',
			path: 'https://svelte-simples.codewithshin.com/'
		},
		{
			title: 'Svelte Tabler',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '4600+ Tabler icons for Svelte.',
			path: 'https://svelte-tabler.codewithshin.com/'
		},
		{
			title: 'Svelte Teenyicons',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '600+ Teenyicons for Svelte.',
			path: 'https://svelte-teenyicons.codewithshin.com/'
		},
		{
			title: 'Svelte Twitter Emoji',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '3600+ Twitter emoji color icons for Svelte.',
			path: 'https://svelte-twitter-emoji.codewithshin.com/'
		},
		{
			title: 'Svelte Weather',
			dir: 'icons',
			badge: 'Svelte 4/5',
			description: '210+ weather-icons for Svelte.',
			path: 'https://svelte-weather.codewithshin.com/'
		}
	];
	const cardClass = 'dark:bg-cyan-900 hover:bg-gray-100 hover:dark:bg-cyan-800 max-w-full sm:max-w-[290px] xl:max-w-[400px]';
</script>

<Components componentData={list} title="Svelte SVG Icon Sets" description="Explore Svelte SVG Icon Sets" />
