<script>
	import '../app.pcss';
	let { children, data } = $props();
	import Nav from './utils/Nav.svelte';
	import Footer from './utils/Footer.svelte';
	const analytics = data.ANALYTICS_ID
	
  $effect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${analytics}');
      `;
      document.head.appendChild(script);
    })
</script>

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id={analytics}"></script>
</svelte:head>

<Nav />

<section class="border-b border-gray-200 pb-16 dark:border-gray-600">
	<div class="mx-auto max-w-7xl px-4 pt-8">
		{@render children()}
	</div>
</section>

<Footer />
