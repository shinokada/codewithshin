<script lang="ts">
  import Components from '../utils/Components.svelte';

  const list = [
    {
      name: 'Flowbite Svelte',
      description: 'An official Flowbite component library for Svelte 4/5/.',
      path: 'https://flowbite-svelte.com/',
      npm_version: {
        packageName: 'flowbite-svelte',
        logo: 'svelte',
        color: 'blue',
        label: 'Flowbite Svelte'
      }
    },
    {
      name: 'Flowbite Svelte Icons',
      description: '540+ SVG Flowbite icons components for Svelte 3/4/5/Runes.',
      path: 'https://flowbite-svelte-icons.codewithshin.com/',
      npm_version: {
        packageName: 'flowbite-svelte-icons',
        logo: 'svelte',
        color: 'blue',
        label: 'Flowbite Svelte Icons'
      }
    },
    {
      name: 'Flowbite Svelte Admin Dashboard',
      description: 'Admin dashboard for Flowbite Svelte.',
      path: 'https://flowbite-svelte.com/admin-dashboard',
      npm_version: {
        packageName: 'flowbite-svelte-admin-dashboard',
        logo: 'svelte',
        color: 'blue',
        label: 'Flowbite Svelte Admin Dashboard'
      }
    },
    {
      name: 'Flowbite Svelte Blocks',
      description: 'Svelte blocks for Flowbite Svelte.',
      path: 'https://flowbite-svelte.com/blocks',
      npm_version: {
        packageName: 'flowbite-svelte-blocks',
        logo: 'svelte',
        color: 'blue',
        label: 'Flowbite Svelte Blocks'
      }
    },
    {
      name: 'Svelte Lib Helpers',
      description: 'Simplify the process of managing exports, documentation, package distribution for Svelte 4/5/Runes.',
      path: 'https://svelte-lib-helpers.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-lib-helpers',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Lib Helpers'
      }
    }
  ];

  const listRunes = [
    {
      name: 'Svelte 5 UI Lib',
      description: 'A UI library crafted for Svelte 5 Runes. Alert, Avatar, Badge, Button, Banner, Card, Checkbox, Dropdown, Input, Progress, Select, Skeleton, Spinner, Table, and more.',
      path: 'https://svelte-5-ui-lib.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-5-ui-lib',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte 5 UI Lib'
      }
    },
    {
      name: 'Runatics',
      description: 'A simple Google analyics component for Svelte Runes project.',
      path: 'https://runatics.codewithshin.com/',
      npm_version: {
        packageName: 'runatics',
        logo: 'svelte',
        color: 'red',
        label: 'Runatics'
      }
    },
    {
      name: 'Runes Meta Tags',
      description: 'Easily configure meta tags including basic SEO information, robots meta tag, Twitter and Open Graph meta tags for Svelte 5 Runes.',
      path: 'https://runes-meta-tags.codewithshin.com/',
      npm_version: {
        packageName: 'runes-meta-tags',
        logo: 'svelte',
        color: 'red',
        label: 'Runes Meta Tags'
      }
    },
    {
      name: 'Svelte Rune Highlight',
      description: 'Syntax highlighting for Svelte 5 Runes using highlight.js.',
      path: 'https://svelte-rune-highlight.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-rune-highlight',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Rune Highlight'
      }
    },
    {
      name: 'Runes Webkit',
      description: 'A collection of ready-to-use components for Svelte 5 Runes. Navbar, Footer, CodeWrapper, DocPage, HighlightCompo, HomeCards, IconPage, OnThisPage, Sidebar, TechInfo, and more.',
      path: 'https://runes-webkit.codewithshin.com/',
      npm_version: {
        packageName: 'runes-webkit',
        logo: 'svelte',
        color: 'red',
        label: 'Runes Webkit'
      }
    },
    {
      name: 'Svelte Next',
      description: 'Bash script to automate updating Svelte versions (specifically targeting next versions) in project directories',
      path: 'https://svelte-next.codewithshin.com/',
      github_release: {
        user: 'shinokada',
        repo: 'svelte-next',
        logo: 'bash',
        color: 'green',
        label: 'Svelte Next'
      }
    },
    {
      name: 'Svelte Lib Helpers',
      description: 'Simplify the process of managing exports, documentation, package distribution for Svelte 4/5/Runes.',
      path: 'https://svelte-lib-helpers.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-lib-helpers',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Lib Helpers'
      }
    },
    {
      name: 'Svelte Shields',
      description: 'Shilds.io badges for Svelte Runes project.',
      path: 'https://svelte-shields.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-shields',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Shields'
      }
    },
    {
      name: 'Svelte Carbonads',
      description: 'A component library that  set up a Carbonads on your SvelteKit project',
      path: 'https://svelte-carbonads.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-carbonads',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Carbonads'
      }
    }
  ];
  const demo = [
    {
      name: 'Dynamic styling',
      description: 'Dynamic styling for Svelte 5/Runes projects',
      path: 'https://stackblitz.com/edit/sveltejs-kit-template-default-psvleh?file=src%2Flib%2Fstyles%2Flight.css'
    },
    {
      name: 'Runes Webkit starter',
      description: 'A starter for Svelte 5/Runes projects using Runes Webkit',
      path: 'https://github.com/shinokada/runes-webkit-starter'
    }
  ];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
  <h1>Svelte Libraries</h1>
  <h2>For Svelte 5/Runes projects</h2>
</div>

<Components componentData={listRunes} />

<div class="my-8 flex flex-col items-center gap-4 sm:gap-4">
  <h2>For Svelte 4/5 projects</h2>
</div>

<Components componentData={list} />

<div class="my-8 flex flex-col items-center gap-4 sm:gap-4">
  <h2>Demo and Starters</h2>
</div>

<Components componentData={demo} />
