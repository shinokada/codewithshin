<script lang="ts">
	// import type { ComponentType } from 'svelte';
	import CompoCard from './CompoCard.svelte';
	import { twMerge } from 'tailwind-merge';

	type ComponentDataType = {
		path: string;
		name: string;
		icon?: string;
		thumnailSize?: string;
		description?: string;
	};

	interface Props {
		componentData?: ComponentDataType[];
		colNum?: number;
		class?: string;
	}
	let {
		componentData = [],
		colNum = 3,
		class: classname,
	} = $props<Props>();

	const cols: { [key: number]: string } = {
		1: 'grid-cols-1 gap-4 ',
		2: 'grid-cols-1 gap-4 sm:grid-cols-2 ',
		3: 'grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3'
	}

  let divCls = twMerge('grid', cols[colNum], classname);
</script>

<div class="{divCls}">
	{#each componentData as { path, name, thumnailSize, icon, description }}
		<CompoCard {name} {thumnailSize} {path} {icon} {description} headerColor="bg-gray-50 dark:bg-sky-800" />
	{/each}
</div>
