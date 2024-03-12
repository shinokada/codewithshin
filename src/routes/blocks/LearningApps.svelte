<script lang="ts">
	import Slider from '../utils/Slider.svelte';
	import type { BadgeColorType } from '../utils/Slider.svelte';
	const apps = [
		{
			name: 'Norske Flashcard',
			description: 'Norsk-Flashcard is for Norwegian learners who want to learn Norwegian vocabulary. There are different levels of flashcards: A1, A2, Verbs, Adjectives, Vocab, and Education.',
			href: 'https://norske-flashcard.codewithshin.com/'
		},
		{
			name: 'Japanese Flashcard',
			description:
				'Nihongo-Flashcard is for Japanese learners who want to learn Japanese vocabulary. There are different levels of flashcards: 1K words, Verbs, Adjectives, Gairaigo, and Onomatopoeia.',
			href: 'https://nihongo-flashcard.codewithshin.com/'
		},
		{
			name: 'Multilanguage Flashcard',
			badge: '27+ Languages',
			description: 'Allowing users to learn and practice vocabulary in their target language. From commonly spoken languages like English, Spanish, and Mandarin to niche languages.',
			href: 'https://multilanguage-flashcard.codewithshin.com/'
		},
		{
			name: 'Flexilexi Dictionary',
			badge: 'English, Norwegian, and Japanese',
			description: 'A flexible dictionary for English, Norwegian, and Japanese.',
			href: 'https://flexilexi-dictionary.codewithshin.com/'
		},
		{
			name: 'Gjett Norsk',
			description: 'Gjett Norsk is for Norwegian learners who want to learn Norwegian vocabulary in a group.',
			href: 'https://gjett-norsk.codewithshin.com/',
			badge: 'Norwegian group learning app',
			badgeColor: 'indigo' as BadgeColorType
		}
	];
	// name: string;
	//   description?: string;
	//   href?: string;
	//   badge?: string;
	//   icon?: any;
	//   badgeColor?
	const cardClass = 'dark:bg-cyan-900 hover:bg-gray-100 hover:dark:bg-cyan-800 max-w-full sm:max-w-[290px] xl:max-w-[400px]';
</script>

<Slider title="Learning Apps" list={apps} {cardClass} class="flex justify-center md:justify-start" />
