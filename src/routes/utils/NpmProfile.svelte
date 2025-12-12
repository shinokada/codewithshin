<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { NpmAuthorDownload } from 'svelte-shields';
	import type { NpmAuthorDownloadPropsType } from 'svelte-shields';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { checkImageLoad, IMAGE_VALIDATION } from '$lib/utils/imageLoader';

	const weekly: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		style: 'for-the-badge'
	};
	const monthly: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		interval: 'dm',
		style: 'for-the-badge'
	};
	const yearly: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		interval: 'dy',
		style: 'for-the-badge'
	};

	let statsLoaded = $state(false);
	let isChecking = $state(true);

	onMount(async () => {
		if (!browser) {
			isChecking = false;
			return;
		}

		// Check if at least one badge loads successfully
		// We only need one to succeed to show the component
		const weeklyUrl = `https://img.shields.io/npm-stat/dw/shinichiokada?style=for-the-badge`;
		const loaded = await checkImageLoad(
			weeklyUrl,
			IMAGE_VALIDATION.BADGE_MIN_WIDTH,
			IMAGE_VALIDATION.BADGE_MIN_HEIGHT
		);

		statsLoaded = loaded;
		isChecking = false;
	});
</script>

<div role="status" aria-live="polite">
	{#if isChecking}
		<!-- Show loading state while checking -->
		<div class="mx-auto my-10 flex max-w-3xl items-center">
			<Card
				class="dark:hover:shadow-lg-light max-w-3xl p-4 hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
			>
				<div class="flex items-center justify-center gap-2 px-4 py-6">
					<p class="text-gray-500 dark:text-gray-400">Loading NPM stats...</p>
				</div>
			</Card>
		</div>
	{:else if statsLoaded}
		<div class="mx-auto my-10 flex max-w-3xl items-center">
			<Card
				class="dark:hover:shadow-lg-light max-w-3xl p-4 hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
			>
				<div class="flex items-center justify-center gap-2 px-4">
					<NpmAuthorDownload {...weekly} />
					<NpmAuthorDownload {...monthly} />
					<NpmAuthorDownload {...yearly} />
				</div>
			</Card>
		</div>
	{:else}
		<!-- All checks failed or services unavailable -->
		<div class="mx-auto my-10 flex max-w-3xl items-center">
			<Card
				class="dark:hover:shadow-lg-light max-w-3xl p-4 hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
			>
				<div class="flex items-center justify-center gap-2 px-4 py-6">
					<p class="text-gray-500 dark:text-gray-400">NPM stats temporarily unavailable</p>
				</div>
			</Card>
		</div>
	{/if}
</div>
