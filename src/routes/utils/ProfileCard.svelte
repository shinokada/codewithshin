<script lang="ts">
	import { Card } from 'flowbite-svelte';

	interface Props {
		title: string;
		imageUrl: string;
		imageAlt: string;
		onError: () => void;
		headerColor?: string;
		cardHeight?: string;
		href?: string;
	}

	let {
		title,
		imageUrl,
		imageAlt,
		onError,
		headerColor = '',
		cardHeight = 'h-56',
		href = 'https://github.com/shinokada'
	}: Props = $props();
</script>

<Card
	{href}
	class="dark:hover:shadow-lg-light max-w-none! shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
>
	<div
		class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700"
	>
		<span class="text-base font-medium text-gray-900 dark:text-white">{title}</span>
	</div>
	<div class="flex items-center justify-center {cardHeight}">
		<img alt={imageAlt} class="inline" src={imageUrl} onerror={onError} />
	</div>
</Card>
