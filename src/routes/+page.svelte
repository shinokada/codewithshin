<script>
	import HeroSection from './utils/HeroSection.svelte';
	import Categories from './blocks/Categories.svelte';
	import Section from './utils/Section.svelte';
  import GitHubProfile from './blocks/GitHubProfile.svelte';
	// const size = '40';
</script>

<HeroSection />

<Section class="flex flex-col gap-8 sm:gap-12 lg:pt-24">
	<div class="flex flex-col items-center gap-4 sm:gap-4">
		<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">My Projects</h2>
		<p class="mx-auto max-w-3xl text-center text-xl font-normal text-gray-500 dark:text-gray-400">Please explore my projects and share your thoughts.</p>
	</div>
	<Categories />
</Section>

<h2>Github Profile</h2>
<GitHubProfile />
