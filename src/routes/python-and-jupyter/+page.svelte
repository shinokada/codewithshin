<script lang="ts">
	import Components from '../utils/Components.svelte';
	import MetaTag from '../utils/MetaTag.svelte';

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
	// meta tags
	const meta = {
		title: 'Python and Jupyter - codewithshin.com',
		ogSubtitle: 'Python and Jupyter',
		description: 'Data visualization with Python includes Covid charts, Venn diagrams, animated maps & fastAPI web apps.',
    path: '/python-and-jupyter'
	}
</script>

<MetaTag {...meta} />

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1>Python and Jupyter</h1>
	<h2>Python & Jupyter projects.</h2>
</div>

<Components componentData={list} />