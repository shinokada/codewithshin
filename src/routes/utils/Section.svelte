<script lang="ts">
  interface Props {
    children?: any;
    tinted?: boolean;
    class?: string;
  }
  let { children, tinted, class:classname, ...attributes } = $props<Props>();
  // export let tinted: boolean = false;
</script>

<section class={tinted ? 'bg-gray-50 dark:bg-gray-800' : ''} {...attributes}>
  <div class="mx-auto max-w-8xl px-4 lg:px-20 py-8 {classname ?? ''}">
    {@render children()}
  </div>
</section>
