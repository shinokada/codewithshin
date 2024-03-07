<script>
	import GitHubProfile from './blocks/GitHubProfile.svelte';
	import LearningApps from './blocks/LearningApps.svelte';
	import SvelteLib from './blocks/SvelteLib.svelte';
	import SvelteIconSet from './blocks/SvelteIconSet.svelte';
	import TerminalTools from './blocks/TerminalTools.svelte';
	import { Card } from 'svelte-5-ui-lib';
</script>

<h1>Welcome to CodewithShin</h1>

<div class="mb-8">
	<SvelteLib />
</div>
<div class="mb-8">
	<SvelteIconSet />
</div>
<div class="mb-8">
	<LearningApps />
</div>
<div class="mb-8">
	<TerminalTools />
</div>
<div class="mb-8">
	<GitHubProfile />
</div>
