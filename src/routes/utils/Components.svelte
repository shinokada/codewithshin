<script lang="ts">
	// import type { ComponentType } from 'svelte';
	import CompoCard from './CompoCard.svelte';
	import { twMerge } from 'tailwind-merge';
	import type { ComponentDataType } from './types';
	// import type { NpmVersionPropsType, GitHubVersionPropsType, PypiVersionPropsType, StaticBadgePropsType } from 'svelte-shields';

	// type ComponentDataType = {
	// 	path: string;
	// 	name: string;
	// 	icon?: string;
	// 	npm_version?: NpmVersionPropsType;
	// 	github_release?: GitHubVersionPropsType;
	// 	pypi_version?: PypiVersionPropsType;
	// 	static_badge?: StaticBadgePropsType;
	// 	thumnailSize?: string;
	// 	description?: string;
	// };

	interface Props {
		componentData?: ComponentDataType[];
		colNum?: number;
		class?: string;
	}
	let {
		componentData = [],
		colNum = 3,
		class: classname,
	}: Props = $props();

	const cols: { [key: number]: string } = {
		1: 'grid-cols-1 gap-4 ',
		2: 'grid-cols-1 gap-4 sm:grid-cols-2 ',
		3: 'grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3'
	}

  let divCls = twMerge('grid', cols[colNum], classname);
</script>

<div class="{divCls}">
	{#each componentData as { path, name, thumnailSize, icon, npm_version, github_release, pypi_version, static_badge, description }}
		<CompoCard {name} {thumnailSize} {path} {icon} {npm_version} {github_release} {pypi_version} {static_badge} {description} headerColor="bg-gray-50 dark:bg-sky-800" />
	{/each}
</div>
