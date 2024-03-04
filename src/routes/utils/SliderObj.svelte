<script lang="ts">
  import { twMerge } from 'tailwind-merge'
  import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  import { Card, Badge, P } from 'svelte-5-ui-lib';
  function isObject(obj: object | null): boolean {
    return typeof obj === 'object' && obj !== null;
  }
  // function isArray<T>(arr: T[]): boolean {
  //   return Array.isArray(arr); // Recommended for arrays
  // }

  import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';
  interface ListItem {
    name: string;
    description: string;
    href: string;
    versions?: string; // Optional property for consistency
  }
  type ListType =
  | ListItem[] // Array format (like `iconList`)
  | { [key: string]: ListItem[] }; // Object format (like `sveltelist`)

  interface Props{
    children?: any;
    list?: ListType;
    title?: string;
    class?: string;
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
    {#each Object.values(list) as objs}  
      {#each objs as obj} 
      {@render card(obj)}
      {/each}
    {/each}
  {:else}
    {@render children()}
  {/if}
</div>
{/if}