<script lang="ts">
	import Components from '../utils/Components.svelte';
	import type { ComponentDataType } from '../utils/types';

	const list: ComponentDataType[] = [
		{
			name: 'Covid 19 Stats',
			description: 'An interactive graph using a dropdown menu for Jupyter Notebook.',
			path: 'https://nbviewer.org/github/shinokada/covid-19-stats/blob/master/latest/Dropdown-interactive.ipynb',
			static_badge: {
				badgeContent: 'Jupyter-Covid_19_Stats-1d75af',
				logo: 'jupyter',
				labelColor: 'ffffff'
			}
		},
		{
			name: 'Vennfig',
			description: 'A venn diagram package for Python.',
			path: 'https://github.com/shinokada/vennfig',
			pypi_version: {
				packageName: 'vennfig',
				style: 'flat',
				label: 'Vennfig',
				logo: 'python',
				labelColor: 'ffffff'
			}
		},
		{
			name: 'Statsfig',
			description: 'A Python package for creating statistical figures.',
			path: 'https://pypi.org/project/statsfig/',
			pypi_version: {
				packageName: 'statsfig',
				style: 'flat',
				label: 'Statsfig',
				logo: 'python',
				labelColor: 'ffffff'
			}
		},
		{
			name: 'FastAPI web starter',
			description: 'A static simple website ready to deploy using FastAPI and Bootstrap 5.',
			path: 'https://github.com/shinokada/fastapi-web-starter',
			static_badge: {
				badgeContent: 'FastAPI-Web_starter-1d75af',
				logo: 'fastapi',
				labelColor: 'ffffff'
			}
		}
	];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1>Python and Jupyter</h1>
	<h2>Python & Jupyter projects.</h2>
</div>

<Components componentData={list} />
