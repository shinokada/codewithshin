<script lang="ts">
  import Components from '../utils/Components.svelte';

  const mainWeb = [
    {
      name: 'Svelte SVG Icon Sets',
      description: 'Home for Svete SVG Icon Sets.',
      path: 'https://svelte-svg-icons.codewithshin.com/',
      static_badge: {
        badgeContent: 'Svelte-Svelte_SVG_Icon_Sets-blue',
        logo: 'svelte'
      }
    }
  ];

  const listRunes = [
    {
      name: 'Flowbite Svelte Icons',
      description: '510+ SVG Flowbite icon components for Svelte 5:Runes.',
      path: 'https://flowbite-svelte-icons.codewithshin.com/',
      npm_version: {
        packageName: 'flowbite-svelte-icons',
        logo: 'svelte',
        color: 'red',
        label: 'Flowbite Svelte Icons'
      }
    },
    {
      name: 'Svelte Awesome Icons',
      description: '2000+ Font Awesome SVG icon components for Svelte 4/5/Runes.',
      path: 'https://svelte-awesome-icons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-awesome-icons',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Awesome Icons'
      }
    },
    {
      name: 'Svelte Heros v2',
      description: '870+ SVG Heros icon components for Svelte 5:Runes.',
      path: 'https://svelte-heros-v2.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-heros-v2',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Heros v2'
      }
    },
    {
      name: 'Svelte Heros',
      description: '460+ SVG Heros icon components for Svelte 5:Runes.',
      path: 'https://svelte-heros.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-heros',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Heros'
      }
    },
    {
      name: 'Svelte Lucide',
      description: '1460+ SVG Lucide icon components for Svelte 5:Runes.',
      path: 'https://svelte-lucide.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-lucide',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Lucide'
      }
    },
    {
      name: 'Svelte Radix',
      description: '310+ Radix icons for Svelte.',
      path: 'https://svelte-radix.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-radix',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Radix'
      }
    },
    {
      name: 'Svelte Ionicons',
      description: '1330+ Ionicicons for Svelte.',
      path: 'https://svelte-ionicons.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-ionicons',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Ionicons'
      }
    },
    {
      name: 'Svelte Bootstrap SVG Icons',
      description: '1950+ Bootstrap SVG icon components for Svelte.',
      path: 'https://svelte-bootstrap-svg-icons.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-bootstrap-svg-icons',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Bootstrap SVG Icons'
      }
    },
    {
      name: 'Svelte Tabler',
      description: '5290+ Tabler icons for Svelte.',
      path: 'https://svelte-tabler.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-tabler',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Tabler'
      }
    },
    {
      name: 'Svelte Flags',
      description: '250+ SVG flag icons for Svelte',
      path: 'https://svelte-flags.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-flags',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Flags'
      }
    },
    {
      name: 'Svelte Flag Icons',
      description: '260+ SVG flag icons for Svelte.',
      path: 'https://svelte-flag-icons.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-flag-icons',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Flag Icons'
      }
    },
    {
      name: 'Svelte Remix',
      description: '2270+ Remixicons for Svelte.',
      path: 'https://svelte-remix.codewithshin.com/guide/svelte-5/getting-started',
      npm_version: {
        packageName: 'svelte-remix',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Remix'
      }
    },
    {
      name: 'Svelte Ant Design Icons',
      description: '780+ Ant Design SVG Icons (v4.2.1) for Svelte.',
      path: 'https://svelte-ant-design-icons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-ant-design-icons',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Ant Design Icons'
      }
    },
    {
      name: 'Svelte Supertiny',
      description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte 4/5/Runes.',
      path: 'https://svelte-supertiny.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-supertiny',
        logo: 'svelte',
        color: 'red',
        label: 'Svelte Supertiny'
      }
    }
  ];

  const list = [
    {
      name: 'Flowbite Svelte Icons',
      description: '510+ SVG Flowbite icon components for Svelte 4/5/Runes.',
      path: 'https://flowbite-svelte-icons.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'flowbite-svelte-icons',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Flowbite Svelte Icons'
      }
    },
    {
      name: 'Svelte Awesome Icons',
      description: '2000+ Font Awesome SVG icon components for Svelte 4/5/Runes.',
      path: 'https://svelte-awesome-icons.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-awesome-icons',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Awesome Icons'
      }
    },
    {
      name: 'Svelte Supertiny',
      description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte 4/5/Runes.',
      path: 'https://svelte-supertiny.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-supertiny',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Supertiny'
      }
    },
    {
      name: 'Svelte Ant Design Icons',
      description: '780+ Ant Design SVG Icons (v4.2.1) for Svelte.',
      path: 'https://svelte-ant-design-icons.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-ant-design-icons',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Ant Design Icons'
      }
    },
    {
      name: 'Svelte Bootstrap SVG Icons',
      description: '1950+ Bootstrap SVG icon components for Svelte.',
      path: 'https://svelte-bootstrap-svg-icons.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-bootstrap-svg-icons',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Bootstrap SVG Icons'
      }
    },
    {
      name: 'Svelte Boxicons',
      description: '1500+ SVG boxicons components for Svelte.',
      path: 'https://svelte-boxicons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-boxicons',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Boxicons'
      }
    },
    {
      name: 'Svelte Circle Flags',
      description: '380+ SVG Circle Flag icons',
      path: 'https://svelte-circle-flags.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-circle-flags',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Circle Flags'
      }
    },
    {
      name: 'Svelte Coreui Icons',
      description: '1500+ beautifully crafted CoreUI Icons for Svelte.',
      path: 'https://svelte-coreui-icons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-coreui-icons',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Coreui Icons'
      }
    },
    {
      name: 'Svelte Cryptocurrency Icons',
      description: '470+ SVG crypto currency icon components for Svelte.',
      path: 'https://svelte-cryptocurrency-icons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-cryptocurrency-icons',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Cryptocurrency Icons'
      }
    },
    {
      name: 'Svelte Cssgg Icons',
      description: '700+ SVG icons from css.gg for Svelte.',
      path: 'https://svelte-cssgg-icons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-cssgg-icons',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Cssgg Icons'
      }
    },
    {
      name: 'Svelte Evil Icons',
      description: '70+ SVG evil-icons components for Svelte.',
      path: 'https://svelte-evil-icons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-evil-icons',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Evil Icons'
      }
    },
    {
      name: 'Svelte Feathers',
      description: '280+ SVG Feather icons for Svelte.',
      path: 'https://svelte-feathers.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-feathers',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Feathers'
      }
    },
    {
      name: 'Svelte File Icons',
      description: '930+ SVG file icons for Svelte.',
      path: 'https://svelte-file-icons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-file-icons',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte File Icons'
      }
    },
    {
      name: 'Svelte Flag Icons',
      description: '260+ SVG flag icons for Svelte.',
      path: 'https://svelte-flag-icons.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-flag-icons',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Flag Icons'
      }
    },
    {
      name: 'Svelte Flags',
      description: '250+ SVG flag icons for Svelte',
      path: 'https://svelte-flags.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-flags',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Flags'
      }
    },
    {
      name: 'Svelte Google Materialdesign Icons',
      description: '2120+ Google Material Design icons for Svelte.',
      path: 'https://svelte-google-materialdesign-icons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-google-materialdesign-icons',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Google Materialdesign Icons'
      }
    },
    {
      name: 'Svelte Heros',
      description: '580+ Tailwind CSS Hero icons for Svelte.',
      path: 'https://svelte-heros.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-heros',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Heros'
      }
    },
    {
      name: 'Svelte Heros v2',
      description: '870+ Tailwind CSS Hero icons v2 for Svelte.',
      path: 'https://svelte-heros-v2.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-heros-v2',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Heros v2'
      }
    },
    {
      name: 'Svelte Ionicons',
      description: '1330+ Ionicicons for Svelte.',
      path: 'https://svelte-ionicons.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-ionicons',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Ionicons'
      }
    },
    {
      name: 'Svelte Lucide',
      description: '1210+ Lucide icons for Svelte.',
      path: 'https://svelte-lucide.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-lucide',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Lucide'
      }
    },
    {
      name: 'Svelte Materialdesign Icons',
      description: '7330+ MaterialDesign icons for Svelte.',
      path: 'https://svelte-materialdesign-icons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-materialdesign-icons',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Materialdesign Icons'
      }
    },
    {
      name: 'Svelte Oct',
      description: '270+ Octicons icons for Svelte.',
      path: 'https://svelte-oct.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-oct',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Oct'
      }
    },
    {
      name: 'Svelte Radix',
      description: '310+ Radix icons for Svelte.',
      path: 'https://svelte-radix.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-radix',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Radix'
      }
    },
    {
      name: 'Svelte Remix',
      description: '2270+ Remixicons for Svelte.',
      path: 'https://svelte-remix.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-remix',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Remix'
      }
    },
    {
      name: 'Svelte Simples',
      description: '2620+ popular brands Simple-icons for Svelte.',
      path: 'https://svelte-simples.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-simples',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Simples'
      }
    },
    {
      name: 'Svelte Tabler',
      description: '4600+ Tabler icons for Svelte.',
      path: 'https://svelte-tabler.codewithshin.com/guide/svelte-4/getting-started',
      npm_version: {
        packageName: 'svelte-tabler',
        tag:"v1-latest",
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Tabler'
      }
    },
    {
      name: 'Svelte Teenyicons',
      description: '600+ Teenyicons for Svelte.',
      path: 'https://svelte-teenyicons.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-teenyicons',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Teenyicons'
      }
    },
    {
      name: 'Svelte Twitter Emoji',
      description: '3600+ Twitter emoji color icons for Svelte.',
      path: 'https://svelte-twitter-emoji.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-twitter-emoji',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Twitter Emoji'
      }
    },
    {
      name: 'Svelte Weather',
      description: '210+ weather-icons for Svelte.',
      path: 'https://svelte-weather.codewithshin.com/',
      npm_version: {
        packageName: 'svelte-weather',
        logo: 'svelte',
        color: 'blue',
        label: 'Svelte Weather'
      }
    }
  ];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
  <h1>29 Svelte SVG Icon Sets</h1>
</div>

<Components componentData={mainWeb} colNum={1} class="mx-auto sm:max-w-96" />

<div class="my-8 flex flex-col items-center gap-4 sm:gap-4">
  <h2>For Svelte 5/Runes projects</h2>
</div>

<Components componentData={listRunes} />

<div class="my-8 flex flex-col items-center gap-4 sm:gap-4">
  <h2>For Svelte 4/5 projects</h2>
</div>

<Components componentData={list} />
