<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import { NpmAuthorDownload } from 'svelte-shields';
  import type { NpmAuthorDownloadPropsType } from 'svelte-shields';

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

</script>

<div class="mx-auto my-10 flex max-w-3xl items-center">
  <Card padding="sm" class="dark:hover:shadow-lg-light max-w-3xl px-4 hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900">
    <div class="flex items-center justify-center gap-2 px-4">
      <NpmAuthorDownload {...weekly} />
      <NpmAuthorDownload {...monthly} />
      <NpmAuthorDownload {...yearly} />
    </div>
  </Card>
</div>
