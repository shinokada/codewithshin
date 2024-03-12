<script>
	import { Medium, Twitter, Git, Vim, Css3, Html5, Javascript, Svelte, Python, Bash, Visualstudiocode, Nodejs, Github, Ubuntu } from 'svelte-supertiny';
	const size = '40';
</script>

<div class="max-w-8xl mx-auto px-4 py-0 lg:px-20">
	<div class="flex flex-col gap-20">
		<div class="flex items-center gap-8">
			<div class="flex flex-col justify-start gap-10">
				<div class="flex flex-col gap-4 text-left align-text-top lg:gap-6">
					<h1 class="max-w-2xl text-4xl font-extrabold leading-none text-gray-900 dark:text-white lg:text-5xl mt-2">
						<span class="block1 xl:inline">Welcome to</span>
						<span class="block1 text-primary-700 dark:text-primary-700 xl:inline">Codewithshin</span>
						<span class="block1 xl:inline">where you can find a lot of coding goodies</span>
					</h1>
					<p class="text-2xl leading-normal text-gray-500 dark:text-gray-400 lg:text-3xl">
						Hi, I'm Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.
					</p>
					<div class="mt-4 justify-center sm:flex sm:justify-start md:mt-5">
						<div class="relative w-full gap-1 text-xl eading-normal text-gray-500 dark:text-gray-400 lg:text-2xl">
							Please explore my projects and share your thoughts.
							<div class="mt-4 flex w-full flex-wrap gap-1">
								<Svelte {size} />
								<Bash {size} />
								<Javascript {size} />
								<Nodejs {size} />
								<Git {size} />
								<Github {size} />
								<Ubuntu {size} />
								<Css3 {size} />
								<Html5 {size} />
								<Python {size} />
								<Visualstudiocode {size} />
								<Vim {size} />
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