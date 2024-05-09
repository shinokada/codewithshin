<script>
	import { Card } from 'svelte-5-ui-lib';
	const headerColor = '';
	const cardHeight = 'h-56';
	const thumnailSize = '';
	const name = 'GitHub Profile';
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">
	<Card href="https://github.com/shinokada" padding="none" class="dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900">
		<div class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700">
			<span class="text-base font-medium text-gray-900 dark:text-white">GitHub Stats</span>
		</div>
		<div class="flex items-center justify-center {cardHeight}">
			<div class="flex hidden items-center justify-center gap-8 dark:block">
				<img alt="github stats" class="inline" src="https://github-readme-stats.vercel.app/api?username=shinokada&show_icons=true&theme=tokyonight&hide_border=true" />
			</div>
			<div class="flex items-center justify-center gap-8 dark:hidden">
				<img alt="github stats" class="inline" src="https://github-readme-stats.vercel.app/api?username=shinokada&show_icons=true" />
			</div>
		</div>
	</Card>

	<Card href="https://github.com/shinokada" padding="none" class="dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900">
		<div class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700">
			<span class="text-base font-medium text-gray-900 dark:text-white">GitHub Contributions</span>
		</div>
		<div class="flex items-center justify-center {cardHeight}">
			<div class="flex hidden items-center justify-center gap-8 dark:block">
				<img alt="streak stats" class="inline" src="https://github-readme-streak-stats.herokuapp.com?user=shinokada&theme=neon-palenight&hide_border=true" />
			</div>
			<div class="flex items-center justify-center gap-8 dark:hidden">
				<img alt="streak stats" class="inline" src="https://github-readme-streak-stats.herokuapp.com?user=shinokada&hide_border=true" />
			</div>
		</div>
	</Card>
</div>
<div class="mt-4 grid grid-cols-1">
	<Card href="https://github.com/shinokada" padding="none" class="dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900">
		<div class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700">
			<span class="text-base font-medium text-gray-900 dark:text-white">GitHub trophies</span>
		</div>

		<div class="flex items-center justify-center {cardHeight}">
			<div class="flex hidden items-center justify-center dark:block">
				<img alt="github trophy" class="inline" src="https://github-profile-trophy.vercel.app/?username=shinokada&theme=onedark&no-frame=true&row=1" />
			</div>
			<div class="flex items-center justify-center dark:hidden">
				<img alt="github trophy" class="inline" src="https://github-profile-trophy.vercel.app/?username=shinokada&no-frame=true&row=1" />
			</div>
		</div>
	</Card>
</div>
