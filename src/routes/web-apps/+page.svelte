<script lang="ts">
	import Components from '../utils/Components.svelte';
	import MetaTag from '../utils/MetaTag.svelte';
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
		},
		{
			name: 'Gjett Norsk',
			description: 'Learn Norwegian together with friends and make learning enjoyable and collaborative.',
			path: 'https://gjett-norsk.codewithshin.com/'
		}
	];
	// meta tags
	const meta = {
		title: 'Web Apps - codewithshin.com',
		ogSubtitle: 'Web Apps',
		description: 'Learn Languages! FunFlashcards, Games & Dictionaries for Norwegian, Japanese & More.',
    path: '/web-app'
	}
</script>

<MetaTag {...meta} />

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
	<h1>Web apps</h1>
	<h2>Learning apps</h2>
</div>

<Components componentData={list} />