<script lang="ts">
	import { Card } from 'svelte-5-ui-lib';
	import { NpmAuthorDownload } from 'svelte-shields';
	import type { NpmAuthorDownloadPropsType } from 'svelte-shields';

	const weekly: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		style: 'for-the-badge'
	}
	const monthly: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		interval: 'dm',
		style: 'for-the-badge'
	}
	const yearly: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		interval: 'dy',
		style: 'for-the-badge'
	}

	const cardHeight = 'h-40';
  const badgeSize = '150'
</script>

<div class="flex items-center max-w-lg mx-auto my-10">
	<Card padding="sm" class="px-4 dark:hover:shadow-lg-light max-w-lg hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900">
		<div class="flex px-4 items-center justify-center gap-2 {cardHeight}">
			
				<NpmAuthorDownload {...weekly} />
        <NpmAuthorDownload {...monthly} />
				<NpmAuthorDownload {...yearly} />
		
		</div>
	</Card>
</div>