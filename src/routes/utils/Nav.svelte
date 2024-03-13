<script lang="ts">
	import { Label, Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode } from 'svelte-5-ui-lib';
	import GitHub from './GitHub.svelte';
	import XTwitterBrands from './XTwitterBrands.svelte';
	import MediumBrands from './MediumBrands.svelte';

	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	let divClass = 'ml-auto w-full';
	let ulclass = 'dark:lg:bg-transparent lg:space-x-4';
	let navclass = 'w-full divide-gray-200 border-gray-200 bg-gray-50 dark:bg-sky-950 text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';

	$effect(() => {
		navStatus = nav.isOpen;
	});
</script>

<header class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950">
	<Navbar {navclass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2class={divClass}>
		{#snippet brand()}
			<NavBrand siteName="codewithshin.com" spanclass="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500" />
			<div class="ml-auto flex items-center lg:order-1">
				<a
					class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block"
					href="https://medium.com/@shinichiokada"
				>
					<MediumBrands />
				</a>
				<a
					class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block"
					href="https://twitter.com/shinokada"
				>
					<XTwitterBrands size="20"/>
				</a>
				<a
					class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block"
					href="https://github.com/shinokada/"
				>
					<GitHub />
				</a>
				<Darkmode btnclass="inline-block dark:hover:text-white hover:text-gray-900" />
			</div>
		{/snippet}
		<NavUl {ulclass}>
			<NavLi href="/svelte">Svelte</NavLi>
			<NavLi href="/svelte-svg-icon-sets">Icons</NavLi>
			<NavLi href="/terminal-tools">Terminal</NavLi>
			<NavLi href="/python-and-jupyter">Python</NavLi>
			<NavLi href="/homebrew">Homebrew</NavLi>
			<NavLi href="https://blog.codewithshin.com">Blog</NavLi>
		</NavUl>
	</Navbar>
</header>
