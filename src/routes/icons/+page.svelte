<script lang="ts">
	import type { BadgeColorType } from '../utils/Slider.svelte';
	import Components from '../utils/Components.svelte';
	import FlowbiteSvelteIcons from './components/FlowbiteSvelteIcons.svelte';
	import SvelteAntDesignIcons from './components/SvelteAntDesignIcons.svelte';
	import SvelteAwesomeIcons from './components/SvelteAwesomeIcons.svelte';
	import SvelteBootstrapSvgIcons from './components/SvelteBootstrapSvgIcons.svelte';
	import SvelteBoxicons from './components/SvelteBoxicons.svelte';
	import SvelteCircleFlags from './components/SvelteCircleFlags.svelte';
	import SvelteSupertiny from './components/SvelteSupertiny.svelte';

	const list = [
		{
			name: 'Flowbite Svelte Icons',
			dir: 'icons',
			icon: FlowbiteSvelteIcons,
			thumnailSize: '',
			path: 'https://flowbite-svelte-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Ant Design Icons',
			dir: 'icons',
			icon: SvelteAntDesignIcons,
			thumnailSize: '',
			path: 'https://svelte-ant-design-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Awesome Icons',
			dir: 'icons',
			icon: SvelteAwesomeIcons,
			thumnailSize: '',
			path: 'https://svelte-awesome-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Bootstrap SVG Icons',
			dir: 'icons',
			icon: SvelteBootstrapSvgIcons,
			thumnailSize: '',
			path: 'https://svelte-bootstrap-svg-icons.codewithshin.com/'
		},
		{
			name: 'Svelte Boxicons',
			dir: 'icons',
			icon: SvelteBoxicons,
			thumnailSize: '',
			path: 'https://svelte-boxicons.codewithshin.com/'
		},
		{
			name: 'Svelte Circle Flags',
			dir: 'icons',
			icon: SvelteCircleFlags,
			thumnailSize: '',
			path: 'https://svelte-circle-flags.codewithshin.com/'
		},
		{
			name: 'Svelte Supertiny',
			dir: 'icons',
			icon: SvelteSupertiny,
			thumnailSize: '',
			path: 'https://svelte-supertiny.codewithshin.com/'
		}
	];

</script>

<Components componentData={list}  />
