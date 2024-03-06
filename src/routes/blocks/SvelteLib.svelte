<script lang="ts">
	import SliderObj from '../utils/SliderObj.svelte';
	const sveltelist: {
		[key: string]: {
			name: string;
			badge: string;
			badgeColor:
				| 'yellow'
				| 'blue'
				| 'gray'
				| 'red'
				| 'green'
				| 'indigo'
				| 'purple'
				| 'pink'
				| 'primary'
				| 'none'
				| undefined;
			description: string;
			href: string;
		}[];
	} = {
		'Svelte 5 Runes UI': [
			{
				name: 'Svelte 5 UI Lib',
				badge: 'Svelte 5:Runes',
				badgeColor: 'pink',
				description: 'A collection of Svelte 5 UI components',
				href: 'https://svelte-5-ui-lib.codewithshin.com/'
			},
			{
				name: 'Svelte Rune Highlight',
				badge: 'Svelte 5:Runes',
				badgeColor: 'pink',
				description: 'A collection of Svelte 5 UI components',
				href: 'https://svelte-rune-highlight.codewithshin.com/'
			},
		],
		'Flowbite: Svelte 4/5': [
			{
				name: 'Flowbite Svelte',
				badge: 'Svelte 4/5',
				badgeColor: 'blue',
				description: 'A collection of Flowbite UI components',
				href: 'https://flowbite-svelte.com/'
			},
			{
				name: 'Flowbite Svelte Blocks',
				badge: 'Svelte 4/5',
				badgeColor: 'blue',
				description: 'A collection of Flowbite blocks for Svelte',
				href: 'https://flowbite-svelte-blocks.codewithshin.com/'
			},
			{
				name: 'Flowbite Svelte Icons',
				badge: 'Svelte 4/5',
				badgeColor: 'blue',
				description: 'A collection of Flowbite icons for Svelte',
				href: 'https://flowbite-svelte-icons.codewithshin.com/'
			},
			{
				name: 'Flowbite Svelte Admin Dashboard',
				badge: 'Svelte 4/5',
				badgeColor: 'blue',
				description: 'Admin Dashboard for Flowbite Svelte',
				href: 'https://flowbite-svelte-admin-dashboard.vercel.app/'
			}
		],
		Libraries: [
			{
				name: 'Svelte Lib Helpers: 4/5/Runes',
				badge: 'Svelte 4/5/Runes',
				badgeColor: 'purple',
				description: 'A collection of helpers for Svelte 4/5/Runes libraries',
				href: 'https://svelte-lib-helpers.codewithshin.com/'
			},
			{
				name: 'SRIT',
				badge: 'Svelte 4/5',
				badgeColor: 'blue',
				description:
					'Svelte Responsive Image Tag (SRIT) makes it easy to create responsive images with automatic format selection based on browser support.',
				href: 'https://srit.codewithshin.com/'
			}
		]
	};
</script>

<SliderObj
	list={sveltelist}
	title="Svelte Libraries"
	cardClass="bg-gray-50 dark:bg-primary-800 hover:bg-gray-100 hover:dark:bg-primary-700"
/>
