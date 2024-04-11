<script lang="ts">
	import '../app.pcss';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import type { MetaProps } from 'runes-meta-tags';
  import { page } from '$app/stores';
  import { Runatics } from 'runatics';
	let { children, data } = $props();
	import Nav from './utils/Nav.svelte';
	import Footer from './utils/Footer.svelte';
	const analyticsId = data.ANALYTICS_ID
  let metaTags: MetaProps = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );
  $effect(() => {
    metaTags = $page.data.pageMetaTags ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags ) : data.layoutMetaTags
  });
</script>

<RunesMetaTags {...metaTags}/>
<Runatics {analyticsId} />
<Nav />

<section class="border-b border-gray-200 pb-16 dark:border-gray-600">
	<div class="mx-auto max-w-7xl px-4 pt-8">
		{@render children()}
	</div>
</section>

<Footer />
