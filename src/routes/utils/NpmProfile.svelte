<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { NpmAuthorDownload } from 'svelte-shields';
	import type { NpmAuthorDownloadPropsType } from 'svelte-shields';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

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

	/**
	 * Check if NPM stats badge actually loads successfully
	 * @param {string} url - The badge URL to check
	 * @returns {Promise<boolean>} - Whether the badge loaded successfully
	 */
	async function checkBadgeLoad(url: string): Promise<boolean> {
		if (!browser) return false;

		return new Promise((resolve) => {
			const img = new Image();
			let timeoutId: ReturnType<typeof setTimeout>;

			img.onload = () => {
				clearTimeout(timeoutId);
				// Check if image has valid dimensions (shields.io badges are typically > 80px wide)
				if (img.naturalWidth > 50 && img.naturalHeight > 10) {
					resolve(true);
				} else {
					resolve(false);
				}
			};
			img.onerror = () => {
				clearTimeout(timeoutId);
				resolve(false);
			};
			// Set a timeout in case the badge takes too long
			timeoutId = setTimeout(() => resolve(false), 5000);
			img.src = url;
		});
	}

	onMount(async () => {
		if (!browser) {
			isChecking = false;
			return;
		}

		// Check if at least one badge loads successfully
		// We only need one to succeed to show the component
		const weeklyUrl = `https://img.shields.io/npm-stat/dw/shinichiokada?style=for-the-badge`;
		const loaded = await checkBadgeLoad(weeklyUrl);

		statsLoaded = loaded;
		isChecking = false;
	});
</script>

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
