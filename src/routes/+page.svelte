<script>
	import HeroSection from './utils/HeroSection.svelte';
	import Section from './utils/Section.svelte';
  import GitHubProfile from './utils/GitHubProfile.svelte';
	import Components from './utils/Components.svelte';
	
	const list = [
		{
			name: 'Svelte Libraries',
			thumnailSize: '',
			path: '/svelte',
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
			name: 'Python and Jupyter',
			thumnailSize: '',
			path: '/python-and-jupyter',
      description: 'Starter for FASTAPI, data science with Jupyter.'
		},
		{
			name: 'Homebrew',
			thumnailSize: '',
			path: '/homebrew',
      description: 'Homebrew taps for MacOS and Linux.'
		},
		{
			name: 'Web Apps',
			thumnailSize: '',
			path: '/web-apps',
      description: 'Web apps for learning and more.'
		},
    {
			name: 'Blog',
			thumnailSize: '',
			path: 'https://blog.codewithshin.com/',
      description: 'More than 170 programming articles and tutorials.'
		},
	];
</script>

<HeroSection />

<Section class="flex flex-col gap-8 sm:gap-12 lg:pt-24">
	<div class="flex flex-col items-center gap-4 sm:gap-4">
		<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">My Projects</h2>
		<p class="mx-auto max-w-3xl text-center text-xl font-normal text-gray-500 dark:text-gray-400">Please explore my projects and share your thoughts.</p>
	</div>
	<Components componentData={list} />
</Section>

<h2>Github Profile</h2>
<GitHubProfile />
