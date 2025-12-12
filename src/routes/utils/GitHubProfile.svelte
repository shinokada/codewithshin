<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { checkImageLoad, IMAGE_VALIDATION } from '$lib/utils/imageLoader';

	let statsLoaded = $state(false);
	let streakLoaded = $state(false);
	let trophyLoaded = $state(false);
	let isChecking = $state(true);
	let isDarkMode = $state(false);

	const headerColor = '';
	const cardHeight = 'h-56';

	// URLs for each theme
	const urls = {
		stats: {
			dark: 'https://github-readme-stats-codewithshin.vercel.app/api?username=shinokada&show_icons=true&theme=tokyonight&hide_border=true',
			light:
				'https://github-readme-stats-codewithshin.vercel.app/api?username=shinokada&show_icons=true'
		},
		streak: {
			dark: 'https://github-readme-streak-stats-codewithshin.vercel.app/?user=shinokada&theme=neon-palenight&hide_border=true',
			light:
				'https://github-readme-streak-stats-codewithshin.vercel.app/?user=shinokada&hide_border=true'
		},
		trophy: {
			dark: 'https://github-profile-trophy-codewithshin.vercel.app/?username=shinokada&theme=onedark&no-frame=true&row=1',
			light:
				'https://github-profile-trophy-codewithshin.vercel.app/?username=shinokada&no-frame=true&row=1'
		}
	};

	// Reactive URLs based on theme
	const currentUrls = $derived({
		stats: isDarkMode ? urls.stats.dark : urls.stats.light,
		streak: isDarkMode ? urls.streak.dark : urls.streak.light,
		trophy: isDarkMode ? urls.trophy.dark : urls.trophy.light
	});

	onMount(() => {
		if (!browser) return;
		let cancelled = false;

		// Detect initial theme
		isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

		// Listen for theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleThemeChange = (e: MediaQueryListEvent) => {
			isDarkMode = e.matches;
		};
		mediaQuery.addEventListener('change', handleThemeChange);

		// Check services using the current theme URLs (async, but don't await in onMount)
		const urlsToCheck = isDarkMode
			? [urls.stats.dark, urls.streak.dark, urls.trophy.dark]
			: [urls.stats.light, urls.streak.light, urls.trophy.light];

		Promise.allSettled([
			checkImageLoad(
				urlsToCheck[0],
				IMAGE_VALIDATION.GITHUB_MIN_WIDTH,
				IMAGE_VALIDATION.GITHUB_MIN_HEIGHT
			),
			checkImageLoad(
				urlsToCheck[1],
				IMAGE_VALIDATION.GITHUB_MIN_WIDTH,
				IMAGE_VALIDATION.GITHUB_MIN_HEIGHT
			),
			checkImageLoad(
				urlsToCheck[2],
				IMAGE_VALIDATION.GITHUB_MIN_WIDTH,
				IMAGE_VALIDATION.GITHUB_MIN_HEIGHT
			)
		])
			.then((results) => {
				if (cancelled) return;
				statsLoaded = results[0].status === 'fulfilled' ? results[0].value : false;
				streakLoaded = results[1].status === 'fulfilled' ? results[1].value : false;
				trophyLoaded = results[2].status === 'fulfilled' ? results[2].value : false;
			})
			.finally(() => {
				if (cancelled) return;
				isChecking = false;
			});

		return () => {
			cancelled = true;
			mediaQuery.removeEventListener('change', handleThemeChange);
		};
	});

	// Check if any cards should be shown
	const hasVisibleCards = $derived(statsLoaded || streakLoaded || trophyLoaded);

	function handleImageError(kind: 'stats' | 'streak' | 'trophy') {
		if (kind === 'stats') statsLoaded = false;
		if (kind === 'streak') streakLoaded = false;
		if (kind === 'trophy') trophyLoaded = false;
	}
</script>

{#if isChecking}
	<!-- Loading state with limited live region -->
	<div role="status" aria-live="polite" class="py-8 text-center text-gray-500 dark:text-gray-400">
		<p>Loading GitHub profile...</p>
	</div>
{:else if hasVisibleCards}
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
		{#if statsLoaded}
			<Card
				href="https://github.com/shinokada"
				class="dark:hover:shadow-lg-light max-w-none! shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
			>
				<div
					class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700"
				>
					<span class="text-base font-medium text-gray-900 dark:text-white">GitHub Stats</span>
				</div>
				<div class="flex items-center justify-center {cardHeight}">
					<img
						alt="github stats"
						class="inline"
						src={currentUrls.stats}
						onerror={() => handleImageError('stats')}
					/>
				</div>
			</Card>
		{/if}

		{#if streakLoaded}
			<Card
				href="https://github.com/shinokada"
				class="dark:hover:shadow-lg-light max-w-none! shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
			>
				<div
					class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700"
				>
					<span class="text-base font-medium text-gray-900 dark:text-white"
						>GitHub Contributions</span
					>
				</div>
				<div class="flex items-center justify-center {cardHeight}">
					<img
						alt="streak stats"
						class="inline"
						src={currentUrls.streak}
						onerror={() => handleImageError('streak')}
					/>
				</div>
			</Card>
		{/if}
	</div>

	{#if trophyLoaded}
		<div class="mt-4 grid grid-cols-1">
			<Card
				href="https://github.com/shinokada"
				class="dark:hover:shadow-lg-light max-w-none! shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900"
			>
				<div
					class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700"
				>
					<span class="text-base font-medium text-gray-900 dark:text-white">GitHub trophies</span>
				</div>

				<div class="flex items-center justify-center {cardHeight}">
					<img
						alt="github trophy"
						class="inline"
						src={currentUrls.trophy}
						onerror={() => handleImageError('trophy')}
					/>
				</div>
			</Card>
		</div>
	{/if}
{:else}
	<!-- Fallback message without live region -->
	<div class="py-8 text-center text-gray-500 dark:text-gray-400">
		<p>GitHub profile stats temporarily unavailable</p>
	</div>
{/if}
