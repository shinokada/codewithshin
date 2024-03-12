<script lang="ts">
	// import type { ComponentType } from 'svelte';
	import CompoCard from './CompoCard.svelte';

	type ComponentDataType = {
		path: string;
		name: string;
		icon?: string;
		thumnailSize?: string;
		description?: string;
	};

	interface Props {
		componentData?: ComponentDataType[];
		// title?: string;
		// description?: string;
	}
	let {
		componentData = []
		// title = 'Add your title',
		// description = 'Add your description'
	} = $props<Props>();

	// function toCamelCase(str: string) {
	// 	return str.replace(/\b\w/g, (match) => match.toUpperCase()).replace(/\s/g, '');
	// }
	// const INIT_COUNT = 50;
	// let expanded: boolean = $state(false);
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
	{#each componentData as { path, name, thumnailSize, icon, description }}
		<CompoCard {name} {thumnailSize} {path} {icon} {description} headerColor="bg-gray-50 dark:bg-sky-800" />
	{/each}
</div>
