import type {
	NpmVersionPropsType,
	GitHubVersionPropsType,
	PypiVersionPropsType,
	StaticBadgePropsType
} from 'svelte-shields';
export type ComponentDataType = {
	path: string;
	name: string;
	icon?: string;
	npm_version?: NpmVersionPropsType;
	github_release?: GitHubVersionPropsType;
	pypi_version?: PypiVersionPropsType;
	static_badge?: StaticBadgePropsType;
	thumnailSize?: string;
	description?: string;
};
