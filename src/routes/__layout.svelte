<script>
	import '../app.css';
	import { SidebarItem, DarkMode } from 'flowbite-svelte';
	import { ChartPieSolid, ShoppingBagSolid, TableSolid, KeySolid } from 'svelte-heros';

	import { Side, Nav, Responsive } from 'svelte-sidebar-menu';

	import { quartInOut } from 'svelte/easing';

	// Darkmode component
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed right-2 top-24 z-50';

	// Side component
	let siteName = 'CodeWithShin';

	let siteClass = 'w-1/4 h-12 text-lg pt-3 pl-12';

	let headerClass =
		'bg-white px-10 items-center text-gray-600 border-b-2 p-4 dark:bg-gray-900 dark:text-white';

	let hamburgerClass =
		'hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2 lg:hidden';

	let topDiv = 'w-full md:block md:w-auto absolute top-16 md:top-1 px-8';

	let topMenuDiv = 'container flex flex-wrap justify-end mx-auto pt-0 md:pt-2';

	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-white dark:bg-gray-900 dark:text-white';

	let childLi =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-lg dark:text-white';

	let asideClass =
		'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll dark:bg-gray-900 dark:text-white w-80';

	let spanClass =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white';

	// Nav component
	let navClass = 'py-8 px-4 text-lg';

	let navDivClass = 'pb-8';

	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};

	const topMenuList = [
		{ href: 'https://github.com/shinokada', name: 'GitHub' },
		{ href: 'https://blog.codewithshin.com/', name: 'Blog' },
		{ href: '/about', name: 'About' }
	];

	let uid = 1;
	let sidebarItem = [
		{
			id: uid++,
			name: 'Blog',
			icon: ShoppingBagSolid,
			iconSize: 16,
			iconClass: 'text-blue-500 mr-2 dark:text-yellow-300',
			href: 'https://blog.codewithshin.com/'
		},
		{
			id: uid++,
			name: 'Svelte Icon Sets',
			icon: ShoppingBagSolid,
			iconSize: 16,
			iconClass: 'text-blue-500 mr-2 dark:text-yellow-300',
			children: [
				{
					id: uid++,
					name: 'Svelte-SVG-Icons',
					href: 'https://svelte-svg-icons.vercel.app/'
				},
				{
					id: uid++,
					name: 'Font Awesome',
					href: 'https://www.npmjs.com/package/svelte-awesome-icons'
				},
				{
					id: uid++,
					name: 'Heroicons',
					href: 'https://www.npmjs.com/package/svelte-heros'
				},
				{
					id: uid++,
					name: 'Ionicons',
					href: 'https://www.npmjs.com/package/svelte-awesome-icons'
				},
				{
					id: uid++,
					name: 'Flags',
					href: 'https://www.npmjs.com/package/svelte-flags'
				},
				{
					id: uid++,
					name: 'Lucide',
					href: 'https://www.npmjs.com/package/svelte-lucide'
				},
				{
					id: uid++,
					name: 'Feather icons',
					href: 'https://www.npmjs.com/package/svelte-feathers'
				},
				{
					id: uid++,
					name: 'Simple-icons',
					href: 'https://www.npmjs.com/package/svelte-simples'
				}
			]
		},
		{
			id: uid++,
			name: 'Svelte Projects',
			icon: KeySolid,
			iconSize: 16,
			iconClass: 'text-green-500 mr-2',
			children: [
				{
					id: uid++,
					name: 'Flowbite-Svelte',
					href: 'https://flowbite-svelte.com/'
				},
				{
					id: uid++,
					name: 'Svelte-Sidebar-Menu',
					href: 'https://flowbite-svelte-starter.vercel.app/'
				},
				{
					id: uid++,
					name: 'Flowbite-Svelte-Starter',
					href: 'https://flowbite-svelte-starter.vercel.app/'
				},
				{
					id: uid++,
					name: 'Svelte-Auth',
					href: 'https://github.com/shinokada/svelte-auth'
				},
				{
					id: uid++,
					name: 'Svelte-Utterances',
					href: 'https://github.com/shinokada/svelte-utterances'
				},
				{
					id: uid++,
					name: 'Cocktail',
					href: 'https://clevenger-cocktail.vercel.app/'
				}
			]
		},
		{
			id: uid++,
			name: 'Shell/Bash',
			icon: KeySolid,
			iconSize: 16,
			iconClass: 'text-green-500 mr-2',
			children: [
				{
					id: uid++,
					name: 'Terminal Radio',
					href: '/test2/'
				},
				{
					id: uid++,
					name: 'SSIC',
					href: '/test2/test-2'
				},
				{
					id: uid++,
					name: 'Cleanit',
					href: '/test2/test-3'
				},
				{
					id: uid++,
					name: 'Awesome Package Manager',
					href: '/test2/'
				},
				{
					id: uid++,
					name: 'SSIC',
					href: '/test2/test-2'
				},
				{
					id: uid++,
					name: 'Consize',
					href: '/test2/test-3'
				},
				{
					id: uid++,
					name: '',
					href: '/test2/test-2'
				},
				{
					id: uid++,
					name: '',
					href: '/test2/test-3'
				}
			]
		},
		{
			id: uid++,
			name: 'Python',
			icon: TableSolid,
			iconSize: 16,
			iconClass: 'text-purple-500 mr-2',
			children: [
				{
					id: uid++,
					name: 'FastAPI web starter',
					href: 'https://github.com/shinokada/fastapi-web-starter'
				},
				{
					id: uid++,
					name: 'SSIC',
					href: '/test2/test-2'
				}
			]
		},
		{
			id: uid++,
			name: 'JavaScript',
			icon: TableSolid,
			iconSize: 16,
			iconClass: 'text-purple-500 mr-2',
			children: [
				{
					id: uid++,
					name: 'Createprops',
					href: '/test2/'
				},
				{
					id: uid++,
					name: 'SSIC',
					href: '/test2/test-2'
				}
			]
		}
	];
</script>

<DarkMode {btnClass} />
<Responsive />
<Side
	{siteName}
	{siteClass}
	{headerClass}
	{hamburgerClass}
	{topDiv}
	{topMenuDiv}
	{topul}
	{childLi}
	{asideClass}
	{spanClass}
	{transitionParams}
	topMenus={topMenuList}
>
	<Nav {navClass} {navDivClass}>
		<SidebarItem links={sidebarItem} />
	</Nav>
</Side>
<main class="container mx-auto py-32 px-8 lg:pl-96 dark:text-white ">
	<slot />
</main>

<svelte:head>
	<title>Flowbite-Svelte-Starter</title>
	<meta
		name="description"
		content="Flowbite-Svelte-Starter is a quick way to start Svelte and Flowbite/Tailwind CSS. It comes with SvelteKit, Tailwind CSS, Flowbite,
		Flowbite-Svelte, ESlint, Typescript, Playwright, Prettier, Svelte-heros (Heroicons), Dark mode activated."
	/>
</svelte:head>
