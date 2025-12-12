<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { checkImageLoad, IMAGE_VALIDATION } from '$lib/utils/imageLoader';

	let statsLoaded = $state(false);
	let streakLoaded = $state(false);
	let trophyLoaded = $state(false);
	let isChecking = $state(true);

	const headerColor = '';
	const cardHeight = 'h-56';

	onMount(async () => {
		if (!browser) return;

		try {
			// Check each service with themed URLs to match actual rendering
			// Using Promise.allSettled to handle partial failures gracefully
			const results = await Promise.allSettled([
				checkImageLoad(
					'https://github-readme-stats-codewithshin.vercel.app/api?username=shinokada&show_icons=true&theme=tokyonight&hide_border=true',
					IMAGE_VALIDATION.GITHUB_MIN_WIDTH,
					IMAGE_VALIDATION.GITHUB_MIN_HEIGHT
				),
				checkImageLoad(
					'https://github-readme-streak-stats-codewithshin.vercel.app/?user=shinokada&theme=neon-palenight&hide_border=true',
					IMAGE_VALIDATION.GITHUB_MIN_WIDTH,
					IMAGE_VALIDATION.GITHUB_MIN_HEIGHT
				),
				checkImageLoad(
					'https://github-profile-trophy-codewithshin.vercel.app/?username=shinokada&theme=onedark&no-frame=true&row=1',
					IMAGE_VALIDATION.GITHUB_MIN_WIDTH,
					IMAGE_VALIDATION.GITHUB_MIN_HEIGHT
				)
			]);

			statsLoaded = results[0].status === 'fulfilled' ? results[0].value : false;
			streakLoaded = results[1].status === 'fulfilled' ? results[1].value : false;
			trophyLoaded = results[2].status === 'fulfilled' ? results[2].value : false;
		} finally {
			// Always set isChecking to false, even if checks fail
			isChecking = false;
		}
	});

	// Check if any cards should be shown
	const hasVisibleCards = $derived(statsLoaded || streakLoaded || trophyLoaded);
</script>

<div role="status" aria-live="polite">
	{#if isChecking}
		<!-- Show loading state while checking -->
		<div class="py-8 text-center text-gray-500 dark:text-gray-400">
			<p>Loading GitHub profile...</p>
		</div>
	{:else if hasVisibleCards}
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
			{#if statsLoaded}
				<Card
					href="https://github.com/shinokada"
					class="dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
				>
					<div
						class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700"
					>
						<span class="text-base font-medium text-gray-900 dark:text-white">GitHub Stats</span>
					</div>
					<div class="flex items-center justify-center {cardHeight}">
						<div class="flex items-center justify-center gap-8 dark:block">
							<img
								alt="github stats"
								class="inline"
								src="https://github-readme-stats-codewithshin.vercel.app/api?username=shinokada&show_icons=true&theme=tokyonight&hide_border=true"
								onerror={(e) => {
									(e.currentTarget as HTMLImageElement).style.display = 'none';
								}}
							/>
						</div>
						<div class="flex items-center justify-center gap-8 dark:hidden">
							<img
								alt="github stats"
								class="inline"
								src="https://github-readme-stats-codewithshin.vercel.app/api?username=shinokada&show_icons=true"
								onerror={(e) => {
									(e.currentTarget as HTMLImageElement).style.display = 'none';
								}}
							/>
						</div>
					</div>
				</Card>
			{/if}

			{#if streakLoaded}
				<Card
					href="https://github.com/shinokada"
					class="dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
				>
					<div
						class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700"
					>
						<span class="text-base font-medium text-gray-900 dark:text-white"
							>GitHub Contributions</span
						>
					</div>
					<div class="flex items-center justify-center {cardHeight}">
						<div class="flex items-center justify-center gap-8 dark:block">
							<img
								alt="streak stats"
								class="inline"
								src="https://github-readme-streak-stats-codewithshin.vercel.app/?user=shinokada&theme=neon-palenight&hide_border=true"
								onerror={(e) => {
									(e.currentTarget as HTMLImageElement).style.display = 'none';
								}}
							/>
						</div>
						<div class="flex items-center justify-center gap-8 dark:hidden">
							<img
								alt="streak stats"
								class="inline"
								src="https://github-readme-streak-stats-codewithshin.vercel.app/?user=shinokada&hide_border=true"
								onerror={(e) => {
									(e.currentTarget as HTMLImageElement).style.display = 'none';
								}}
							/>
						</div>
					</div>
				</Card>
			{/if}
		</div>

		{#if trophyLoaded}
			<div class="mt-4 grid grid-cols-1">
				<Card
					href="https://github.com/shinokada"
					class="dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
				>
					<div
						class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700"
					>
						<span class="text-base font-medium text-gray-900 dark:text-white">GitHub trophies</span>
					</div>

					<div class="flex items-center justify-center {cardHeight}">
						<div class="flex items-center justify-center dark:block">
							<img
								alt="github trophy"
								class="inline"
								src="https://github-profile-trophy-codewithshin.vercel.app/?username=shinokada&theme=onedark&no-frame=true&row=1"
								onerror={(e) => {
									(e.currentTarget as HTMLImageElement).style.display = 'none';
								}}
							/>
						</div>
						<div class="flex items-center justify-center dark:hidden">
							<img
								alt="github trophy"
								class="inline"
								src="https://github-profile-trophy-codewithshin.vercel.app/?username=shinokada&no-frame=true&row=1"
								onerror={(e) => {
									(e.currentTarget as HTMLImageElement).style.display = 'none';
								}}
							/>
						</div>
					</div>
				</Card>
			</div>
		{/if}
	{:else}
		<!-- All checks failed or services unavailable -->
		<div class="py-8 text-center text-gray-500 dark:text-gray-400">
			<p>GitHub profile stats temporarily unavailable</p>
		</div>
	{/if}
</div>
