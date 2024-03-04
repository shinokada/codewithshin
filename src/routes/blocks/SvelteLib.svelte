<script lang="ts">
  import { List, Li, A } from 'svelte-5-ui-lib';
  import Slider from '../utils/Slider.svelte';
  const sveltelist = {
    "svelte-library":[
    {
      name: 'Svelte 5 UI Lib',
      description: 'A collection of Svelte 5 UI components',
      href: 'https://svelte-5-ui-lib.codewithshin.com/'
    },
    {
      name: 'Svelte Rune Highlight',
      description: 'A collection of Svelte 5 UI components',
      href: 'https://svelte-rune-highlight.codewithshin.com/'
    }
  ],
  "flowbite": [
    {
      name: 'Flowbite Svelte',
      description: 'A collection of Flowbite UI components',
      href: 'https://flowbite-svelte.com/'
    },
    {
      name: 'Flowbite Svelte Blocks',
      description: 'A collection of Flowbite blocks for Svelte',
      href: 'https://flowbite-svelte-blocks.codewithshin.com/'
    },
    {
      name: 'Flowbite Svelte Icons',
      description: 'A collection of Flowbite icons for Svelte',
      href: 'https://flowbite-svelte-icons.codewithshin.com/'
    },
    {
      name: 'Flowbite Svelte Admin Dashboard',
      description: 'Admin Dashboard for Flowbite Svelte',
      href: 'https://flowbite-svelte-admin-dashboard.vercel.app/'
    }
  ],
  "libraries" : [
    {
      name: 'Svelte Lib Helpers: 4/5/Runes',
      description: 'A collection of helpers for Svelte 4/5/Runes libraries',
      href: 'https://svelte-lib-helpers.codewithshin.com/'
    }
  ]
  }
  

</script>



<Slider title='Svelte Libraries'>
  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li><A href='https://svelte-5-ui-lib.codewithshin.com/'>Svelte 5 UI Lib</A></Li>
    <Li><A href='https://svelte-rune-highlight.codewithshin.com/'>Svelte Rune Highlight</A></Li>
  </List>

  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li><A href='https://flowbite-svelte.com/'>Flowbite Svelte</A></Li>
    <Li><A href='https://flowbite-svelte-blocks.codewithshin.com/'>Flowbite Svelte Blocks</A></Li>
    <Li><A href='https://flowbite-svelte-icons.codewithshin.com/'>Flowbite Svelte Icons</A></Li>
    <Li><A href='https://flowbite-svelte-admin-dashboard.vercel.app/'>Flowbite Svelte Admin Dashboard</A></Li>
  </List>

  <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
    <Li><A href='https://flowbite-svelte.com/'>Svelte Lib Helpers: 4/5/Runes</A></Li>
  </List>
</Slider>
