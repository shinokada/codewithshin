<script lang="ts">
	import {
		Navbar,
		NavLi,
		NavBrand,
		NavUl,
		DarkMode,
		NavHamburger,
		Dropdown,
		DropdownItem
	} from 'flowbite-svelte';

	import { Bluesky, DotsHorizontalOutline, GithubSolid, XSolid } from 'runes-webkit';
	import { page } from '$app/state';

	const githubUrl = `https://github.com/shinokada/codewithshin`;
	const twitterUrl = 'https://twitter.com/shinokada';
	const blueskyUrl = 'https://bsky.app/profile/codewithshin.com';
	let activeUrl = $state(page.url.pathname);
	$effect(() => {
		activeUrl = page.url.pathname;
	});

	let activeClass = 'p-2 text-base hover:text-gray-600';
	let nonActiveClass = 'p-2 text-base hover:text-gray-600';
</script>

<Navbar
	breakpoint="lg"
	fluid
	class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950"
	navContainerClass="lg:justify-between"
>
	<NavBrand href="/">
		<span class="self-center font-semibold whitespace-nowrap text-2xl  text-primary-900 dark:text-primary-500"
			>codewithshin.com</span
		>
	</NavBrand>
	<div class="flex justify-end lg:order-2">
		<NavHamburger class="order-3" />
		<DotsHorizontalOutline class="mt-1.5 mr-4 ml-6 dark:text-white" size="lg" />
		<Dropdown simple class="p-1">
			{#if blueskyUrl}
				<DropdownItem href={blueskyUrl} target="_blank" class="m-0 p-0.5">
					<Bluesky size="30" />
				</DropdownItem>
			{/if}
			{#if twitterUrl}
				<DropdownItem href={twitterUrl} target="_blank" class="m-0 p-2"><XSolid /></DropdownItem>
			{/if}
			{#if githubUrl}
				<DropdownItem href={githubUrl} target="_blank" class="m-0 p-2">
					<GithubSolid />
				</DropdownItem>
			{/if}
		</Dropdown>
		<DarkMode class="m-0 p-2" />
	</div>
	<NavUl
		breakpoint="lg"
		{activeUrl}
		class="order-2 lg:order-1"
		classes={{ active: activeClass, nonActive: nonActiveClass, ul: 'p-0' }}
	>
		<NavLi href="/svelte">Svelte</NavLi>
		<NavLi href="/svelte-svg-icon-sets">Icons</NavLi>
		<NavLi href="/terminal-tools">Terminal</NavLi>
		<NavLi href="/python-and-jupyter">Python</NavLi>
		<NavLi href="/homebrew">Homebrew</NavLi>
		<NavLi href="/web-apps">Web apps</NavLi>
		<NavLi href="https://blog.codewithshin.com">Blog</NavLi>
	</NavUl>
</Navbar>
