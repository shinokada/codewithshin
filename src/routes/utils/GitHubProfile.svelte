<script>
	import { Card } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let statsLoaded = $state(false);
	let streakLoaded = $state(false);
	let trophyLoaded = $state(false);
	let isChecking = $state(true);

	const headerColor = '';
	const cardHeight = 'h-56';

	/**
	 * Check if image actually loaded successfully
	 * @param {string} url - The image URL to check
	 * @returns {Promise<boolean>} - Whether the image loaded successfully
	 */
	async function checkImageLoad(url) {
		if (!browser) return false;

		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => {
				// Check if image has valid dimensions (not an error image)
				if (img.naturalWidth > 100 && img.naturalHeight > 50) {
					resolve(true);
				} else {
					resolve(false);
				}
			};
			img.onerror = () => resolve(false);
			// Set a timeout in case the image takes too long
			setTimeout(() => resolve(false), 5000);
			img.src = url;
		});
	}

	onMount(async () => {
		if (!browser) {
			isChecking = false;
			return;
		}

		// Check each service
		const [stats, streak, trophy] = await Promise.all([
			checkImageLoad(
				'https://github-readme-stats-codewithshin.vercel.app/api?username=shinokada&show_icons=true'
			),
			checkImageLoad('https://github-readme-streak-stats-codewithshin.vercel.app/?user=shinokada'),
			checkImageLoad(
				'https://github-profile-trophy-codewithshin.vercel.app/?username=shinokada&no-frame=true&row=1'
			)
		]);

		statsLoaded = stats;
		streakLoaded = streak;
		trophyLoaded = trophy;
		isChecking = false;
	});

	// Check if any cards should be shown
	const hasVisibleCards = $derived(statsLoaded || streakLoaded || trophyLoaded);
</script>

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
						/>
					</div>
					<div class="flex items-center justify-center gap-8 dark:hidden">
						<img
							alt="github stats"
							class="inline"
							src="https://github-readme-stats-codewithshin.vercel.app/api?username=shinokada&show_icons=true"
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
						/>
					</div>
					<div class="flex items-center justify-center gap-8 dark:hidden">
						<img
							alt="streak stats"
							class="inline"
							src="https://github-readme-streak-stats-codewithshin.vercel.app/?user=shinokada&hide_border=true"
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
						/>
					</div>
					<div class="flex items-center justify-center dark:hidden">
						<img
							alt="github trophy"
							class="inline"
							src="https://github-profile-trophy-codewithshin.vercel.app/?username=shinokada&no-frame=true&row=1"
						/>
					</div>
				</div>
			</Card>
		</div>
	{/if}
{/if}
