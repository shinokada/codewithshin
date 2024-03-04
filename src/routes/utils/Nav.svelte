<script lang="ts">
  import { Label, Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode } from 'svelte-5-ui-lib';
  import GitHub from './GitHub.svelte';
  // let nav = uiHelpers();

  // let navStatus = $state(false);
  // let toggleNav = nav.toggle;
  // let closeNav = nav.close;
  // let divClass = 'ml-auto max-w-4xl';
  // let ulclass = 'flex flex-col py-3 lg:flex-row lg:my-0 order-1 font-medium dark:lg:bg-transparent lg:bg-gray-100 lg:border-0 lg:space-x-4';
  let navclass = 'max-w-7xl mx-auto divide-gray-200 border-gray-200 bg-white text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';

  // $effect(() => {
  //   navStatus = nav.isOpen;
  // });
</script>

<header class="z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-slate-900">
  <Navbar {navclass} openMainMenu={false} breakPoint="lg" >
    {#snippet brand()}
      <NavBrand siteName="CodewithShin" spanclass="sm:text-2xl"/>
      <div class="ml-auto flex items-center lg:order-1">
        <a class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block" href="https://github.com/shinokada/">
          <GitHub />
        </a>
        <Darkmode btnclass="inline-block dark:hover:text-white hover:text-gray-900" />
      </div>
    {/snippet}
   
  </Navbar>
</header>