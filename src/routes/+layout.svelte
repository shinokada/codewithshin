<script lang="ts">
	import '../app.css';
	import { MetaTags, type MetaProps, deepMerge } from 'runes-meta-tags';
	import { page } from '$app/state';
	import { Runatics } from 'runatics';
	let { children, data } = $props();
	import Nav from './utils/Nav.svelte';
	import Footer from './utils/Footer.svelte';

	let metaTags = $derived<MetaProps>(
		page.data.pageMetaTags
			? deepMerge<MetaProps>(data.layoutMetaTags, page.data.pageMetaTags)
			: data.layoutMetaTags
	);

	const analyticsId = $derived(data.ANALYTICS_ID);
</script>

<Runatics {analyticsId} />
<MetaTags {...metaTags} />

<Nav />

<section class="border-b border-gray-200 pb-16 dark:border-gray-600">
	<div class="mx-auto max-w-7xl px-4 pt-4">
		{@render children()}
	</div>
</section>

<Footer />
