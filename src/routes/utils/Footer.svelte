<script>
  import { Footer, FooterBrand, FooterLink, FooterLinkGroup } from 'flowbite-svelte';
</script>

<Footer class="mx-auto max-w-7xl bg-white shadow-none dark:bg-sky-950" footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="/" name="codewithshin.com" spanClass="text-primary-900 dark:text-primary-500" />
    <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
      <FooterLink href="/svelte">Svelte</FooterLink>
      <FooterLink href="/svelte-svg-icon-sets">Icons</FooterLink>
      <FooterLink href="/terminal-tools">Terminal</FooterLink>
      <FooterLink href="/python-and-jupyter">Python</FooterLink>
      <FooterLink href="/homebrew">Homebrew</FooterLink>
      <FooterLink href="/web-apps">Web apps</FooterLink>
      <FooterLink href="https://blog.codewithshin.com/">Blog</FooterLink>
    </FooterLinkGroup>
  </div>
</Footer>
