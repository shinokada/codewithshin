<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    children?: Snippet;
    tinted?: boolean;
    class?: string;
  }
  let { children, tinted, class: classname, ...attributes }: Props = $props();
  // export let tinted: boolean = false;
</script>

<section class={tinted ? 'bg-gray-50 dark:bg-gray-800' : ''} {...attributes}>
  <div class="max-w-8xl mx-auto px-4 py-8 lg:px-20 {classname ?? ''}">
    {#if children}
      {@render children()}
    {/if}
  </div>
</section>
