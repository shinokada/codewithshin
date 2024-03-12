<script lang="ts">
	import type { BadgeColorType } from '../utils/Slider.svelte';
	import Components from '../utils/Components.svelte';
	
	const list = [
		{
			name: 'Svelte UIs',
			thumnailSize: '',
			path: '/svelte-uis',
      description: 'Official Flowbite UI components, Admin dashboard, Block components for Svelte.'
		},
		{
			name: 'Svelte SVG Icon Sets',
			thumnailSize: '',
			path: '/svelte-svg-icon-sets',
      description: '29 SVG Icon sets including Flowbite Svelte icons, Heroicons, Font Awesome icons, Bootstrap, and more.'
		},
		{
			name: 'Terminal Tools',
			thumnailSize: '',
			path: '/terminal-tools',
      description: 'Terminal Tools for macOS, and Linux including terminal radio, package manager, text effects, and more.'
		},
		{
			name: 'Svelte libraries',
			thumnailSize: '',
			path: '/svelte-libraries',
      description: 'Svelte libraries for Svelte 4/5/Runes.'
		},
		{
			name: 'Python and Jupyter',
			thumnailSize: '',
			path: '/python-and-jupyter',
      description: 'Starter for FASTAPI, data science with Jupyter.'
		},
    {
			name: 'Blog',
			thumnailSize: '',
			path: 'https://blog.codewithshin.com/',
      description: 'More than 170 programming articles and tutorials.'
		},
	];
</script>

<Components componentData={list} />
