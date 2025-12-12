<script lang="ts">
	import ProfileCard from './ProfileCard.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { checkImageLoad, IMAGE_VALIDATION } from '$lib/utils/imageLoader';

	let statsLoaded = $state(false);
	let streakLoaded = $state(false);
	let trophyLoaded = $state(false);
	let isChecking = $state(true);
	let isDarkMode = $state(false);
	let lastValidatedIsDarkMode: boolean | null = null;
	let validationRunId = 0;

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
		lastValidatedIsDarkMode = isDarkMode;

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

	$effect(() => {
		if (!browser || isChecking) return;
		if (lastValidatedIsDarkMode === isDarkMode) return;

		lastValidatedIsDarkMode = isDarkMode;
		const runId = ++validationRunId;
		let cancelled = false;

		// Re-validate when theme changes
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
		]).then((results) => {
			if (cancelled || runId !== validationRunId) return;
			statsLoaded = results[0].status === 'fulfilled' ? results[0].value : false;
			streakLoaded = results[1].status === 'fulfilled' ? results[1].value : false;
			trophyLoaded = results[2].status === 'fulfilled' ? results[2].value : false;
		});

		return () => {
			cancelled = true;
		};
	});
</script>

{#if isChecking}
	<!-- Loading state with limited live region -->
	<div role="status" aria-live="polite" class="py-8 text-center text-gray-500 dark:text-gray-400">
		<p>Loading GitHub profile...</p>
	</div>
{:else if hasVisibleCards}
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
		{#if statsLoaded}
			<ProfileCard
				title="GitHub Stats"
				imageUrl={currentUrls.stats}
				imageAlt="github stats"
				onError={() => handleImageError('stats')}
			/>
		{/if}

		{#if streakLoaded}
			<ProfileCard
				title="GitHub Contributions"
				imageUrl={currentUrls.streak}
				imageAlt="streak stats"
				onError={() => handleImageError('streak')}
			/>
		{/if}
	</div>

	{#if trophyLoaded}
		<div class="mt-4 grid grid-cols-1">
			<ProfileCard
				title="GitHub trophies"
				imageUrl={currentUrls.trophy}
				imageAlt="streak trophy"
				onError={() => handleImageError('trophy')}
			/>
		</div>
	{/if}
{:else}
	<!-- Fallback message without live region -->
	<div class="py-8 text-center text-gray-500 dark:text-gray-400">
		<p>GitHub profile stats temporarily unavailable</p>
	</div>
{/if}
