<script lang="ts">
  import { Card } from 'flowbite-svelte';
  // import type { ComponentType } from 'svelte';
  import { NpmVersion, GitHubVersion, PypiVersion, StaticBadge } from 'svelte-shields';
  import type { NpmVersionPropsType, GitHubVersionPropsType, PypiVersionPropsType, StaticBadgePropsType } from 'svelte-shields';

  interface Props {
    name?: string;
    path?: string;
    thumnailSize?: string;
    icon?: string;
    npm_version?: NpmVersionPropsType;
    github_release?: GitHubVersionPropsType;
    pypi_version?: PypiVersionPropsType;
    static_badge?: StaticBadgePropsType;
    headerColor?: string;
    cardHeight?: string;
    description?: string;
  }
  let {
    name = '',
    path = '',
    thumnailSize,
    headerColor = 'bg-gray-50 dark:bg-gray-700',
    cardHeight = 'h-52',
    description = 'Hello, I am description',
    icon = '',
    npm_version,
    github_release,
    pypi_version,
    static_badge,
    ...attributes
  }: Props = $props();
</script>

<Card href={path} padding="none" {...attributes} class="dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900">
  <div class="{headerColor} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700">
    <span class="text-base font-medium text-gray-900 dark:text-white">{name}</span>
    <span class="text-gray-500 dark:text-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </span>
  </div>
  <div class="p-8 {cardHeight}">
    {#if icon}
      <div class="relative h-5/6 dark:hidden {thumnailSize ? thumnailSize : 'w-64'}">
        <span
          style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
        >
          <img alt={name} src="/images/icons/{icon}.png" />
          {description}
        </span>
      </div>
      <div class="relative hidden h-5/6 dark:block {thumnailSize ? thumnailSize : 'w-64'}">
        <span
          style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
        >
          <img alt={name} src="/images/icons/{icon}-dark.png" />
          {description}
        </span>
      </div>
    {:else}
      <div class="grid gap-4">
        {#if npm_version}
          <NpmVersion {...npm_version} />
        {/if}
        {#if github_release}
          <GitHubVersion {...github_release} />
        {/if}
        {#if pypi_version}
          <PypiVersion {...pypi_version} />
        {/if}
        {#if static_badge}
          <StaticBadge {...static_badge} />
        {/if}
        {description}
      </div>
    {/if}
  </div>
</Card>
