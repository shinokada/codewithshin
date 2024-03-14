<script lang="ts">
	import Components from '../utils/Components.svelte';

	const list = [
		{
			name: 'Norske Flashcard',
			description: 'Improve your Norwegian vocabulary with interactive flashcards. Ideal for learners of all levels.',
			path: 'https://norske-flashcard.codewithshin.com/'
		},
		{
			name: 'Multilanguage Flashcard',
			description: 'Learn basic phrases in 27 languages with Emoji flashcards.',
			path: 'https://multilanguage-flashcard.codewithshin.com/'
		},
		{
			name: 'Nihongo Flashcard',
			description: 'Learn Japanese vocabulary with interactive flashcards.',
			path: 'https://nihongo-flashcard.codewithshin.com/'
		},
		{
			name: 'FlexiLexi Dictionary',
			description: 'A flexible dictionary for English, Norwegian, and Japanese.',
			path: 'https://flexilexi-dictionary.codewithshin.com/'
		}
	];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">Web apps</h1>
	<h2 class="mx-auto max-w-3xl text-center text-2xl font-normal text-gray-800 dark:text-gray-100">Learning apps</h2>
</div>

<Components componentData={list} />