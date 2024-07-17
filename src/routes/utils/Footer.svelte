<script>
	import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
</script>

<Footer class="max-w-7xl mx-auto bg-white shadow-none dark:bg-sky-950" footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="/" name="codewithshin.com" spanClass='text-primary-900 dark:text-primary-500' />
		<FooterUl
      class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLi href="/svelte">Svelte</FooterLi>
      <FooterLi href="/svelte-svg-icon-sets">Icons</FooterLi>
			<FooterLi href="/terminal-tools">Terminal</FooterLi>
			<FooterLi href="/python-and-jupyter">Python</FooterLi>
			<FooterLi href="/homebrew">Homebrew</FooterLi>
			<FooterLi href="/web-apps">Web apps</FooterLi>
			<FooterLi href="https://blog.codewithshin.com/">Blog</FooterLi>
    </FooterUl>
	</div>
</Footer>
