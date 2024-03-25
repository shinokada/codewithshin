<script lang="ts">
  interface Props{
		title: string;
		ogSubtitle: string;
		description: string;
		keywords?: string;
		ogImageAlt?: string;
		path?: string;
	}
	let { title, ogSubtitle, description, keywords = "Svelte, SvelteKit, Terminal, Bash, Python, Jupyter, TailwindCSS, GitHub", path, ogImageAlt='codewithshin.com open graph image' }: Props = $props();

	let ogImageUrl = `https://open-graph-vercel.vercel.app/api/codewithshin?title=${ogSubtitle}`;
	let openGraphUrl = `https://codewithshin.com${path}`;
</script>
<svelte:head>
	<title>{title}</title>
	<meta name="description" content="{description}" />
	<meta name="keywords" content="{keywords}" />
	<meta name="robots" content="index,follow" />
	<meta name="description" content="{description}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@shinokada" />
	<meta name="twitter:title" content="{title}" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="{ogImageUrl}" />
	<meta name="twitter:image:alt" content="{ogImageAlt}" />
	<meta property="og:url" content="{openGraphUrl}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{title}" />
	<meta property="og:description" content="{description}" />
	<meta property="og:image" content="{ogImageUrl}" />
	<meta property="og:image:alt" content="{ogImageAlt}" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="codewithshin.com" />
</svelte:head>
