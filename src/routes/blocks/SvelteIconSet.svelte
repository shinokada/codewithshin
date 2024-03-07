<script lang="ts">
	import Slider from '../utils/Slider.svelte';
	import type { BadgeColorType } from '../utils/Slider.svelte';
	// interface Props{
	// 	size?: "xs" | "sm" | "md" | "lg" | "xl";
	// 	customSize?: string;
	// }
	// let { customSize, size } = $props<Props>();
	const size = 'xs';
	const customSize = 'max-w-[220px]';
	const list = [
		{
			name: 'Svelte SVG Icon Sets',
			badge: 'Svelte 4/5/Runes',
			badgeColor: 'red' as BadgeColorType,
			description: 'Website for Svelte SVG Icon Sets',
			href: 'https://svelte-svg-icons.codewithshin.com/'
		},
		{
			name: 'Flowbite Svelte Icons',
			badge: 'Svelte 4/5/Runes',
			badgeColor: 'red' as BadgeColorType,
			description: '510+ SVG Flowbite icon components for Svelte 4/5/Runes.',
			href: 'https://flowbite-svelte-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Awesome Icons',
			badge: 'Svelte 4/5/Runes',
			badgeColor: 'red' as BadgeColorType,
			description: '2000+ Font Awesome SVG icon components for Svelte 4/5/Runes.',
			href: 'https://svelte-awesome-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Supertiny',
			badge: 'Svelte 4/5/Runes',
			badgeColor: 'red' as BadgeColorType,
			description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte 4/5/Runes.',
			href: 'https://svelte-supertiny.codewithshin.com/'
		},
		{
			name: 'Svelte Ant Design Icons',
			badge: 'Svelte 4/5',
			description: '780+ Ant Design SVG Icons (v4.2.1) for Svelte.',
			href: 'https://svelte-ant-design-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Bootstrap SVG Icons',
			badge: 'Svelte 4/5',
			description: '1950+ Bootstrap SVG icon components for Svelte.',
			href: 'https://svelte-bootstrap-svg-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Boxicons',
			badge: 'Svelte 4/5',
			description: '1500+ SVG boxicons components for Svelte.',
			href: 'https://svelte-boxicons.codewithshin.com/'
		},
		{
			name: 'Svelte Circle Flags',
			badge: 'Svelte 4/5',
			description: '380+ SVG Circle Flag icons',
			href: 'https://svelte-circle-flags.codewithshin.com/'
		},
		{
			name: 'Svelte Coreui Icons',
			badge: 'Svelte 4/5',
			description: '1500+ beautifully crafted CoreUI Icons for Svelte.',
			href: 'https://svelte-coreui-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Cryptocurrency Icons',
			badge: 'Svelte 4/5',
			description: '470+ SVG crypto currency icon components for Svelte.',
			href: 'https://svelte-cryptocurrency-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Cssgg Icons',
			badge: 'Svelte 4/5',
			description: '700+ SVG icons from css.gg for Svelte.',
			href: 'https://svelte-cssgg-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Evil Icons',
			badge: 'Svelte 4/5',
			description: '70+ SVG evil-icons components for Svelte.',
			href: 'https://svelte-evil-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Feathers',
			badge: 'Svelte 4/5',
			description: '280+ SVG Feather icons for Svelte.',
			href: 'https://svelte-feathers.codewithshin.com/'
		},
		{
			name: 'Svelte File Icons',
			badge: 'Svelte 4/5',
			description: '930+ SVG file icons for Svelte.',
			href: 'https://svelte-file-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Flag Icons',
			badge: 'Svelte 4/5',
			description: '260+ SVG flag icons for Svelte.',
			href: 'https://svelte-flag-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Flags',
			badge: 'Svelte 4/5',
			description: '250+ SVG flag icons for Svelte',
			href: 'https://svelte-flags.codewithshin.com/'
		},
		{
			name: 'Svelte Google Materialdesign Icons',
			badge: 'Svelte 4/5',
			description: '2120+ Google Material Design icons for Svelte.',
			href: 'https://svelte-google-materialdesign-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Heros',
			badge: 'Svelte 4/5',
			description: '580+ Tailwind CSS Hero icons for Svelte.',
			href: 'https://svelte-heros.codewithshin.com/'
		},
		{
			name: 'Svelte Heros-v2',
			badge: 'Svelte 4/5',
			description: '870+ Tailwind CSS Hero icons v2 for Svelte.',
			href: 'https://svelte-heros-v2.codewithshin.com/'
		},
		{
			name: 'Svelte Ionicons',
			badge: 'Svelte 4/5',
			description: '1330+ Ionicicons for Svelte.',
			href: 'https://svelte-ionicons.codewithshin.com/'
		},
		{
			name: 'Svelte Lucide',
			badge: 'Svelte 4/5',
			description: '1210+ Lucide icons for Svelte.',
			href: 'https://svelte-lucide.codewithshin.com/'
		},
		{
			name: 'Svelte Materialdesign Icons',
			badge: 'Svelte 4/5',
			description: '7330+ MaterialDesign icons for Svelte.',
			href: 'https://svelte-materialdesign-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Oct',
			badge: 'Svelte 4/5',
			description: '270+ Octicons icons for Svelte.',
			href: 'https://svelte-oct.codewithshin.com/'
		},
		{
			name: 'Svelte Radix',
			badge: 'Svelte 4/5',
			description: '310+ Radix icons for Svelte.',
			href: 'https://svelte-radix.codewithshin.com/'
		},
		{
			name: 'Svelte Remix Icons',
			badge: 'Svelte 4/5',
			description: '2270+ Remixicons for Svelte.',
			href: 'https://svelte-remix-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Simples',
			badge: 'Svelte 4/5',
			description: '2620+ popular brands Simple-icons for Svelte.',
			href: 'https://svelte-simples.codewithshin.com/'
		},
		{
			name: 'Svelte Tabler',
			badge: 'Svelte 4/5',
			description: '4600+ Tabler icons for Svelte.',
			href: 'https://svelte-tabler.codewithshin.com/'
		},
		{
			name: 'Svelte Teenyicons',
			badge: 'Svelte 4/5',
			description: '600+ Teenyicons for Svelte.',
			href: 'https://svelte-teenyicons.codewithshin.com/'
		},
		{
			name: 'Svelte Twitter Emoji',
			badge: 'Svelte 4/5',
			description: '3600+ Twitter emoji color icons for Svelte.',
			href: 'https://svelte-twitter-emoji.codewithshin.com/'
		},
		{
			name: 'Svelte Weather',
			badge: 'Svelte 4/5',
			description: '210+ weather-icons for Svelte.',
			href: 'https://svelte-weather.codewithshin.com/'
		}
	];
</script>

<Slider 
title="29 Svelte SVG Icon Set" 
{list} 
cardClass="dark:bg-cyan-900 hover:bg-gray-100 hover:dark:bg-cyan-800 max-w-full sm:max-w-[280px]"
class='flex justify-center md:justify-start'
/>
