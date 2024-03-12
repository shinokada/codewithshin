<script lang="ts">
	import Components from '../utils/Components.svelte';

	const list = [
		{
			name: 'Covid 19 Stats',
			description: 'An interactive graph using a dropdown menu for Jupyter Notebook.',
			path: 'https://nbviewer.org/github/shinokada/covid-19-stats/blob/master/latest/Dropdown-interactive.ipynb'
		},
		{
			name: 'Vennfig',
			description: 'A venn diagram package for Python.',
			path: 'https://jovian.ml/shinokada/vennfig'
		},
		{
			name: 'Animated choropleth map',
			description: 'How to create an animated choropleth map with less than 15 lines of code.',
			path: 'https://jovian.ml/shinokada/how-to-create-an-animated-choropleth-map-with-less-than-15-lines-of-code/'
		},
		{
			name: 'A grouped bar chart',
			description: 'How to create a grouped bar chart with Plotly Express in Jupyter Notebook.',
			path: 'https://jovian.ml/shinokada/how-to-create-a-grouped-bar-chart-with-plotly-express-in-python'
		},
		{
			name: 'Dropdown interactive',
			description: 'An interactive dropdown menu for Jupyter Notebook.',
			path: 'https://jovian.ml/shinokada/dropdown-interactive'
		},
		{
			name: 'Statsfig',
			description: 'A Python package for creating statistical figures.',
			path: 'https://pypi.org/project/statsfig/'
		},
		{
			name: 'FastAPI web starter',
			description: 'A Python package for creating statistical figures.',
			path: 'https://pypi.org/project/statsfig/'
		},
		
	];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">Python and Jupyter</h1>
	<h2 class="mx-auto max-w-3xl text-center text-2xl font-normal text-gray-800 dark:text-gray-100">Python & Jupyter projects.</h2>
</div>

<Components componentData={list} />