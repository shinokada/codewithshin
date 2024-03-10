<script lang="ts">
  import {Button} from 'svelte-5-ui-lib';
  import CompoCard from './CompoCard.svelte';
  import Section from './Section.svelte';
  // import {components} from './data-sample'
  interface Props{
    componentData?: any;
    title?: string;
    description?: string;
  }
  let { componentData, title = 'Add your title', description='Add your description' } = $props<Props>();

  const INIT_COUNT = 50;
  let expanded: boolean = $state(false);
</script>

<Section class="flex flex-col gap-8 sm:gap-12 lg:pt-24">
  <div class="flex flex-col items-center gap-4 sm:gap-4">
    <h2 class="tracking-tight font-extrabold text-3xl lg:text-4xl text-gray-900 dark:text-white">{title}</h2>
    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-center">
      {description}
    </p>
  </div>

  <div class="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3">
    {#each componentData.slice(0, INIT_COUNT) as { path, dir, title, thumnailSize } (dir + path)}
      <CompoCard name={title} {thumnailSize} {dir} {path} headerColor="bg-gray-50 dark:bg-red-700"/>
    {/each}
    {#if expanded}
      {#each componentData.slice(INIT_COUNT) as { path, dir, title, thumnailSize  } (dir + path)}
        <CompoCard name={title} {thumnailSize} {dir} {path} />
      {/each}
    {/if}
  </div>
</Section>
