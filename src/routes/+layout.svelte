<script lang="ts">
  import '../app.pcss';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  // import type { MetaProps } from 'runes-meta-tags';
  import { page } from '$app/stores';
  import { Runatics } from 'runatics';
  // import Analytics from './utils/Analytics.svelte';
  let { children, data } = $props();
  import Nav from './utils/Nav.svelte';
  import Footer from './utils/Footer.svelte';

  let metaTags = $state($page.data.pageMetaTags ? $page.data.pageMetaTags : data.layoutMetaTags);
  $effect(() => {
    metaTags = $page.data.pageMetaTags ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags) : data.layoutMetaTags;
  });
  const analyticsId = data.ANALYTICS_ID;
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<Nav />

<section class="border-b border-gray-200 pb-16 dark:border-gray-600">
  <div class="mx-auto max-w-7xl px-4 pt-8">
    {@render children()}
  </div>
</section>

<Footer />
