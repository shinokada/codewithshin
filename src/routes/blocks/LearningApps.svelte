<script lang="ts">
  import { List, Li, A, Card } from 'svelte-5-ui-lib';
  const apps = [
    {
      name: 'Norske Flashcard',
      description: 'Norsk-Flashcard is for Norwegian learners who want to learn Norwegian vocabulary. There are different levels of flashcards: A1, A2, Verbs, Adjectives, Vocab, and Education.',
      url: 'https://norske-flashcard.codewithshin.com/'
    },
    {
      name: 'Japanese Flashcard',
      description: 'Nihongo-Flashcard is for Japanese learners who want to learn Japanese vocabulary. There are different levels of flashcards: 1K words, Verbs, Adjectives, Gairaigo, and Onomatopoeia.',
      url: 'https://nihongo-flashcard.codewithshin.com/'
    },
    {
      name: 'Multilanguage Flashcard',
      description: 'Allowing users to learn and practice vocabulary in their target language. From commonly spoken languages like English, Spanish, and Mandarin to niche languages.',
      url: 'https://multilanguage-flashcard.codewithshin.com/'
    },
    {
      name: 'Flexilexi Dictionary',
      description: 'A flexible dictionary for English, Norwegian, and Japanese.',
      url: 'https://flexilexi-dictionary.codewithshin.com/'
    },
    {
      name:'Gjett Norsk',
      description: 'Gjett Norsk is for Norwegian learners who want to learn Norwegian vocabulary in a group.',
      url: 'https://gjett-norsk.codewithshin.com/'
    }
  ]
</script>

<h2>Learning Apps</h2>

<div class='flex gap-4 flex-wrap'>
  {#each apps as {name, description, url}}
  <Card href="{url}">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{description}</p>
  </Card>
{/each}
</div>
