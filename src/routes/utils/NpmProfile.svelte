<script lang="ts">
	import { Card } from 'svelte-5-ui-lib';
	import { NpmAuthorDownloads } from 'svelte-shields';
	import type { NpmAuthorDownloadsPropsType } from 'svelte-shields';

	const weekly: NpmAuthorDownloadsPropsType = {
		author: 'shinichiokada',
	
	}
	const monthly: NpmAuthorDownloadsPropsType = {
		author: 'shinichiokada',
		interval: 'dm',
	
	}
	const yearly: NpmAuthorDownloadsPropsType = {
		author: 'shinichiokada',
		interval: 'dy',
		
	}

	const cardHeight = 'h-40';
  const badgeSize = '150'
</script>

<div class="flex items-center max-w-lg mx-auto my-10">
	<Card padding="sm" class="px-4 dark:hover:shadow-lg-light max-w-lg hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900">
		<div class="flex px-4 items-center justify-center gap-2 {cardHeight}">
			
				<NpmAuthorDownloads {...weekly} />
        <NpmAuthorDownloads {...monthly} />
				<NpmAuthorDownloads {...yearly} />
		
		</div>
	</Card>
</div>