<script>
	import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
</script>

<Footer footerclass="max-w-7xl mx-auto bg-white shadow-none dark:bg-sky-950" footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="/" name="codewithshin.com" spanclass='text-primary-900 dark:text-primary-500' />
		<FooterUl
      ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLi href="/svelte-uis">UIs</FooterLi>
      <FooterLi href="/svelte-svg-icon-sets">Icons</FooterLi>
			<FooterLi href="/terminal-tools">Terminal</FooterLi>
			<FooterLi href="/svelte-libraries">Libraries</FooterLi>
			<FooterLi href="/python-and-jupyter">Python</FooterLi>
			<FooterLi href="https://blog.codewithshin.com/">Blog</FooterLi>
    </FooterUl>
	</div>
</Footer>
