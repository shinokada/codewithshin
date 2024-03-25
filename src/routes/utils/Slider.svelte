<script lang="ts" context="module">
	export type BadgeColorType = 'gray' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' | 'primary' | 'none';
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { Card, Badge, P } from 'svelte-5-ui-lib';
	import { AngleDownOutline, AngleUpOutline } from 'flowbite-svelte-icons';
	interface Props {
		children?: any;
		list?: ListItem[];
		title?: string;
		class?: string;
		isOpen?: boolean;
		cardClass?: string;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		customSize?: string;
	}
	interface ListItem {
		name: string;
		description?: string;
		href?: string;
		badge?: string;
		icon?: any;
		badgeColor?: BadgeColorType;
	}

	let { children, title, list, isOpen = true, class: className, cardClass = 'bg-white dark:bg-slate-800', size, customSize, ...attributes }: Props = $props();
	// let isOpen = $state(true)
</script>

<h2>
	<button class="flex" onclick={() => (isOpen = !isOpen)}>
		{title}
		{#if isOpen}
			<AngleUpOutline class="ml-2 mt-2" />
		{:else}
			<AngleDownOutline class="ml-2 mt-2" />
		{/if}
	</button>
</h2>
{#snippet card(arr)}
	{#each arr as { name, href, description, badge, badgeColor = 'blue', icon }}
		<Card {size} {href} class={cardClass}>
			{#if badge}
				<Badge color={badgeColor} divclass="dark:text-white mb-2">{badge}</Badge>
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
	<div class={twMerge('flex flex-wrap gap-4', className)} transition:slide={{ delay: 250, duration: 500, easing: quintOut, axis: 'y' }} {...attributes}>
		{#if list}
			{@render card(list)}
		{:else}
			{@render children()}
		{/if}
	</div>
{/if}
