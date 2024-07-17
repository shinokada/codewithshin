<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Card, Badge, P } from 'svelte-5-ui-lib';
	import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';

	interface ListItem {
		name: string;
		description: string;
		href: string;
		badge?: string;
		icon?: any;
		badgeColor?: 'gray' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' | 'primary' | 'none';
	}
	type ListType = { [key: string]: ListItem[] };

	interface Props {
		children?: any;
		list?: ListType;
		title?: string;
		class?: string;
		isOpen?: boolean;
		cardClass?: string;
	}

	let { children, title, list, class: className, isOpen = true, cardClass = 'bg-white dark:bg-slate-800', ...attributes }: Props = $props();
	let slideOpen = $state(isOpen);
</script>

<h2>
	<button class="flex" onclick={() => (slideOpen = !slideOpen)}>
		{title}
		{#if slideOpen}
			<AngleUpOutline class="ml-2 mt-2" />
		{:else}
			<AngleDownOutline class="ml-2 mt-2" />
		{/if}
	</button>
</h2>
{#snippet card(item)}
	{#each item as { name, href, description, badge, badgeColor, icon }}
		<Card {href} class={cardClass}>
			{#if badge}
				<Badge color={badgeColor ? badgeColor : 'primary'} class="dark:text-white mb-2">
					{badge}</Badge
				>
			{/if}
			{#if icon}
				{icon}
			{/if}
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
			<P>{description}</P>
		</Card>
	{/each}
{/snippet}

{#if slideOpen}
	<div class={twMerge('flex flex-wrap gap-4', className)} transition:slide={{ delay: 250, duration: 500, easing: quintOut, axis: 'y' }} {...attributes}>
		{#if list}
			{#each Object.keys(list) as key}
				<h3 class="w-full">{key}</h3>
				{@render card(list[key])}
			{/each}
		{:else}
			{@render children()}
		{/if}
	</div>
{/if}
