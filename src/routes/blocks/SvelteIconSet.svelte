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
			description: '510+ SVG icons',
			href: 'https://flowbite-svelte-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Awesome Icons',
			badge: 'Svelte 4/5/Runes',
			badgeColor: 'red' as BadgeColorType,
			description: '2000+ SVG icons',
			href: 'https://svelte-awesome-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Supertiny',
			badge: 'Svelte 4/5/Runes',
			badgeColor: 'red' as BadgeColorType,
			description: '340+ SVG logos for popular brands',
			href: 'https://svelte-supertiny.codewithshin.com/'
		},
		{
			name: 'Svelte Ant Design Icons',
			badge: 'Svelte 4/5',
			description: '780+ SVG icons',
			href: 'https://svelte-ant-design-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Bootstrap SVG Icons',
			badge: 'Svelte 4/5',
			description: '1950+ SVG icons',
			href: 'https://svelte-bootstrap-svg-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Boxicons',
			badge: 'Svelte 4/5',
			description: '1500+ SVG icons',
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
			description: '1500+ SVG icons',
			href: 'https://svelte-coreui-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Cryptocurrency Icons',
			badge: 'Svelte 4/5',
			description: '470+ SVG icons',
			href: 'https://svelte-cryptocurrency-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Cssgg Icons',
			badge: 'Svelte 4/5',
			description: '700+ SVG icons',
			href: 'https://svelte-cssgg-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Evil Icons',
			badge: 'Svelte 4/5',
			description: '70+ SVG icons',
			href: 'https://svelte-evil-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Feathers',
			badge: 'Svelte 4/5',
			description: '280+ SVG icons',
			href: 'https://svelte-feathers.codewithshin.com/'
		},
		{
			name: 'Svelte File Icons',
			badge: 'Svelte 4/5',
			description: '930+ SVG icons',
			href: 'https://svelte-file-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Flag Icons',
			badge: 'Svelte 4/5',
			description: '260+ SVG icons',
			href: 'https://svelte-flag-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Flags',
			badge: 'Svelte 4/5',
			description: '250+ SVG icons',
			href: 'https://svelte-flags.codewithshin.com/'
		},
		{
			name: 'Svelte Google Materialdesign Icons',
			badge: 'Svelte 4/5',
			description: '2120+ SVG icons',
			href: 'https://svelte-google-materialdesign-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Heros',
			badge: 'Svelte 4/5',
			description: '580+ SVG icons',
			href: 'https://svelte-heros.codewithshin.com/'
		},
		{
			name: 'Svelte Heros-v2',
			badge: 'Svelte 4/5',
			description: '870+ SVG icons',
			href: 'https://svelte-heros-v2.codewithshin.com/'
		},
		{
			name: 'Svelte Ionicons',
			badge: 'Svelte 4/5',
			description: '1330+ SVG icons',
			href: 'https://svelte-ionicons.codewithshin.com/'
		},
		{
			name: 'Svelte Lucide',
			badge: 'Svelte 4/5',
			description: '1210+ SVG icons',
			href: 'https://svelte-lucide.codewithshin.com/'
		},
		{
			name: 'Svelte Materialdesign Icons',
			badge: 'Svelte 4/5',
			description: '7330+ SVG icons',
			href: 'https://svelte-materialdesign-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Oct',
			badge: 'Svelte 4/5',
			description: '270+ SVG icons',
			href: 'https://svelte-oct.codewithshin.com/'
		},
		{
			name: 'Svelte Radix',
			badge: 'Svelte 4/5',
			description: '310+ SVG icons',
			href: 'https://svelte-radix.codewithshin.com/'
		},
		{
			name: 'Svelte Remix Icons',
			badge: 'Svelte 4/5',
			description: '2270+ SVG icons',
			href: 'https://svelte-remix-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Simples',
			badge: 'Svelte 4/5',
			description: '2620+ SVG icons for popular brands',
			href: 'https://svelte-simples.codewithshin.com/'
		},
		{
			name: 'Svelte Tabler',
			badge: 'Svelte 4/5',
			description: '4600+ SVG icons',
			href: 'https://svelte-tabler.codewithshin.com/'
		},
		{
			name: 'Svelte Teenyicons',
			badge: 'Svelte 4/5',
			description: '600+ SVG icons',
			href: 'https://svelte-teenyicons.codewithshin.com/'
		},
		{
			name: 'Svelte Twitter Emoji',
			badge: 'Svelte 4/5',
			description: '3600+ Twitter emoji SVG color icons',
			href: 'https://svelte-twitter-emoji.codewithshin.com/'
		},
		{
			name: 'Svelte Weather',
			badge: 'Svelte 4/5',
			description: '210+ Weather SVG icons',
			href: 'https://svelte-weather.codewithshin.com/'
		}
	];
</script>

<Slider title="29 Svelte SVG Icon Set" {list} cardClass="dark:bg-cyan-900 hover:bg-gray-50 hover:dark:bg-cyan-800 max-w-[290px]" />
