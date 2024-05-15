<script lang="ts">
	import { Card } from 'svelte-5-ui-lib';
	import { NpmAuthorDownloads } from 'svelte-shields';
	import type { NpmAuthorDownloadsPropsType } from 'svelte-shields';

	const weekly: NpmAuthorDownloadsPropsType = {
		author: 'shinichiokada',
		label: 'shinichiokada',
	}
	const monthly: NpmAuthorDownloadsPropsType = {
		author: 'shinichiokada',
		interval: 'dm',
		label: 'shinichiokada',
	}
	const yearly: NpmAuthorDownloadsPropsType = {
		author: 'shinichiokada',
		interval: 'dy',
		label: 'shinichiokada',
	}

	const cardHeight = 'h-40';
  const badgeSize = '150'
</script>

<div class="flex items-center gap-4 max-w-lg mx-auto my-10">
	<Card href="https://www.npmjs.com/~shinichiokada" padding="none" class="dark:hover:shadow-lg-light max-w-lg hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900">
		<div class="flex items-center justify-center {cardHeight}">
			<div class="flex items-center justify-center gap-4">
				<NpmAuthorDownloads {...weekly} />
        <NpmAuthorDownloads {...monthly} />
				<NpmAuthorDownloads {...yearly} />
			</div>
		</div>
	</Card>
</div>