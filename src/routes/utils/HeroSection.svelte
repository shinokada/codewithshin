<script>
  import { Git, Vim, Css3, Html5, Javascript, Svelte, Python, Bash, Visualstudiocode, Nodejs, Github, Typescript } from 'svelte-supertiny';
  // import { setContext } from 'svelte';
  import Tailwindcss from './Tailwindcss.svelte';
  // const iconCtx = {
  //   fill: '#082f49',
  // };
  // setContext('iconCtx', iconCtx);
  const svgclass = 'text-white dark:text-sky-950';
  const size = '40';
</script>

<div class="max-w-8xl mx-auto px-4 py-0 lg:px-20">
  <div class="flex flex-col gap-20">
    <div class="flex items-center gap-8">
      <div class="flex flex-col justify-start gap-10">
        <div class="flex flex-col gap-2 text-left align-text-top xl:gap-6">
          <h1 class="mt-2 max-w-2xl text-4xl font-extrabold leading-none text-gray-900 dark:text-white lg:text-5xl">
            <span class="block1 xl:inline">Welcome to</span>
            <span class="block1 text-primary-700 dark:text-primary-700 xl:inline">codewithshin</span>
            <span class="block1 xl:inline">where you can find a lot of coding goodies</span>
          </h1>
          <p class="text-2xl leading-normal text-gray-500 dark:text-gray-400 xl:text-3xl">
            Hi, I'm Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.
          </p>
          <div class="mt-4 justify-center sm:flex sm:justify-start md:mt-2">
            <div class="eading-normal relative w-full gap-1 text-xl text-gray-500 dark:text-gray-400 xl:text-2xl">
              Please explore my projects and share your thoughts.
              <div class="mt-4 flex w-full flex-wrap gap-1">
                <Svelte {size} class={svgclass} fill="currentColor" />
                <Javascript {size} class={svgclass} />
                <Tailwindcss {size} color="#39BDF8" />
                <Typescript {size} class={svgclass} />
                <Nodejs {size} class={svgclass} fill="currentColor" />
                <Git {size} class={svgclass} fill="currentColor" />
                <Github {size} class={svgclass} />
                <Bash {size} class={svgclass} />
                <Css3 {size} class={svgclass} />
                <Html5 {size} class={svgclass} />
                <Python {size} class={svgclass} fill="currentColor" />
                <Visualstudiocode {size} class={svgclass} fill="currentColor" />
                <Vim {size} class={svgclass} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden p-0 lg:block">
        <div class="relative dark:hidden">
          <img class="-me-7 max-w-[460px]" src="/images/codewithshin.png" alt="Header" />
        </div>
        <div class="relative hidden dark:block">
          <img class="-me-7 max-w-[460px]" src="/images/codewithshin-dark.png" alt="Header" />
        </div>
      </div>
    </div>
  </div>
</div>
