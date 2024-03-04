<script lang="ts">
  import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { List, Li, A, Card, Badge, P } from 'svelte-5-ui-lib';
  import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';
	const iconList = [
		{
			name: 'Svelte SVG Icon Set',
			description: 'Website for Svelte SVG Icon Sets',
			href: 'https://svelte-svg-icons.codewithshin.com/'
		},
		{
			name: 'Flowbite Svelte Icons',
			versions: '3/4/5/Runes',
			description: '510+ SVG icons',
			href: 'https://flowbite-svelte-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Ant Design Icons',
			versions: '3/4/5',
			description: '780+ SVG icons',
			href: 'https://svelte-ant-design-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Awesome Icons',
			versions: '3/4/5/Runes',
			description: '2000+ SVG icons',
			href: 'https://svelte-awesome-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Bootstrap SVG Icons',
			versions: '3/4/5',
			description: '1950+ SVG icons',
			href: 'https://svelte-bootstrap-svg-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Boxicons',
			versions: '3/4/5',
			description: '1500+ SVG icons',
			href: 'https://svelte-boxicons.codewithshin.com/'
		},
		{
			name: 'Svelte Circle Flags',
			versions: '3/4/5',
			description: '380+ SVG Circle Flag icons',
			href: 'https://svelte-circle-flags.codewithshin.com/'
		},
		{
			name: 'Svelte Coreui Icons',
			versions: '3/4/5',
			description: '1500+ SVG icons',
			href: 'https://svelte-coreui-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Cryptocurrency Icons',
			versions: '3/4/5',
			description: '470+ SVG icons',
			href: 'https://svelte-cryptocurrency-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Cssgg Icons',
			versions: '3/4/5',
			description: '700+ SVG icons',
			href: 'https://svelte-cssgg-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Evil Icons',
			versions: '3/4/5',
			description: '70+ SVG icons',
			href: 'https://svelte-evil-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Feathers',
			versions: '3/4/5',
			description: '280+ SVG icons',
			href: 'https://svelte-feathers.codewithshin.com/'
		},
		{
			name: 'Svelte File Icons',
			versions: '3/4/5',
			description: '930+ SVG icons',
			href: 'https://svelte-file-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Flag Icons',
			versions: '3/4/5',
			description: '260+ SVG icons',
			href: 'https://svelte-flag-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Flags',
			versions: '3/4/5',
			description: '250+ SVG icons',
			href: 'https://svelte-flags.codewithshin.com/'
		},
		{
			name: 'Svelte Google Materialdesign Icons',
      versions: '3/4/5',
      description: '2120+ SVG icons',
			href: 'https://svelte-google-materialdesign-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Heros',
			versions: '3/4/5',
			description: '580+ SVG icons',
			href: 'https://svelte-heros.codewithshin.com/'
		},
		{
			name: 'Svelte Heros-v2',
			versions: '3/4/5',
			description: '870+ SVG icons',
			href: 'https://svelte-heros-v2.codewithshin.com/'
		},
		{
			name: 'Svelte Ionicons',
			versions: '3/4/5',
			description: '1330+ SVG icons',
			href: 'https://svelte-ionicons.codewithshin.com/'
		},
		{
			name: 'Svelte Lucide',
			versions: '3/4/5',
			description: '1210+ SVG icons',
			href: 'https://svelte-lucide.codewithshin.com/'
		},
		{
			name: 'Svelte Materialdesign Icons',
			versions: '3/4/5',
			description: '7330+ SVG icons',
			href: 'https://svelte-materialdesign-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Oct',
			versions: '3/4/5',
			description: '270+ SVG icons',
			href: 'https://svelte-oct.codewithshin.com/'
		},
		{
			name: 'Svelte Radix',
			versions: '3/4/5',
			description: '310+ SVG icons',
			href: 'https://svelte-radix.codewithshin.com/'
		},
		{
			name: 'Svelte Remix Icons',
			versions: '3/4/5',
			description: '2270+ SVG icons',
			href: 'https://svelte-remix-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Simples',
			versions: '3/4/5',
			description: '2620+ SVG icons for popular brands',
			href: 'https://svelte-simples.codewithshin.com/'
		},
		{
			name: 'Svelte Supertiny',
			versions: '3/4/5',
			description: '340+ SVG logos for popular brands',
			href: 'https://svelte-supertiny.codewithshin.com/'
		},
		{
			name: 'Svelte Tabler',
			versions: '3/4/5',
			description: '4600+ SVG icons',
			href: 'https://svelte-tabler.codewithshin.com/'
		},
		{
			name: 'Svelte Teenyicons',
			versions: '3/4/5',
			description: '600+ SVG icons',
			href: 'https://svelte-teenyicons.codewithshin.com/'
		},
		{
			name: 'Svelte Twitter Emoji',
			versions: '3/4/5',
			description: '3600+ Twitter emoji SVG color icons',
			href: 'https://svelte-twitter-emoji.codewithshin.com/'
		},
		{
			name: 'Svelte Weather',
			versions: '3/4/5',
			description: '210+ Weather SVG icons',
			href: 'https://svelte-weather.codewithshin.com/'
		}
	];
  let isOpen = $state(false)

</script>

<h2><button class='flex' onclick={()=> isOpen = !isOpen}>
  29 Svelte SVG Icon Set 
  {#if isOpen}
  <AngleUpOutline class='ml-2 mt-1'/>
  {:else}
  <AngleDownOutline class='ml-2 mt-1'/>
  {/if}
</button>
</h2>

{#if isOpen}
<div class="flex flex-wrap gap-4"  transition:slide={{ delay: 250, duration: 800, easing: quintOut, axis: 'y' }}>
	{#each iconList as { name, href, description, versions }}
		<Card {href} class='bg-white dark:bg-slate-800'>
      {#if versions}
      <Badge color="{versions.includes('Runes') ? 'blue' : 'primary'}" divclass="dark:text-white px-2 my-2">For Svelte: {versions}</Badge>
      {/if}
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
      <P>{description}</P>
		</Card>
	{/each}
</div>
{/if}
