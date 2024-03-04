<script lang="ts">
  import { twMerge } from 'tailwind-merge'
  import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  import { Card, Badge, P } from 'svelte-5-ui-lib';
  function isArrayOfArrays(arr: any[]) {
  // Check if it's an array using Array.isArray()
  if (!Array.isArray(arr)) {
    return false;
  }
  // Check if all elements are arrays themselves
  return arr.every(element => Array.isArray(element));
}
  import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';
  interface Props{
    children?: any;
    list?: ListType[];
    title?: string;
    class?: string;
  }
  type ListType = {
    name: string;
    href?: string;
    description?: string;
    versions?: string;
    icon?: any;
  }

  let { children, title, list, class:className, icon, ...attributes } = $props<Props>()
  let isOpen = $state(false)
</script>


<h2><button class='flex' onclick={()=> isOpen = !isOpen}>
  {title} 
  {#if isOpen}
  <AngleUpOutline class='ml-2 mt-1'/>
  {:else}
  <AngleDownOutline class='ml-2 mt-1'/>
  {/if}
</button>
</h2>
{#snippet card(arr)}
  {#each arr as { name, href, description, versions }}
		<Card {href} class='bg-white dark:bg-slate-800'>
      {#if versions}
      <Badge color="{versions.includes('Runes') ? 'blue' : 'primary'}" divclass="dark:text-white px-2 my-2"> {versions}</Badge>
      {/if}
      {#if icon}
        {icon}
      {/if}
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
      <P>{description}</P>
		</Card>
	{/each}
{/snippet}

{#if isOpen}
<div class="{twMerge('flex flex-wrap gap-4', className)}"  transition:slide={{ delay: 250, duration: 800, easing: quintOut, axis: 'y' }} {...attributes}>
  {#if list}
	  {@render card(list)}
  {:else}
    {@render children()}
  {/if}
</div>
{/if}