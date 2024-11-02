<script lang="ts">
  import Components from '../utils/Components.svelte';
  const list = [
    {
      name: 'Etsy Profit Calculator',
      description: 'Calculate Etsy shop profits easily. Track sales, shipping, discounts, fees, and costs. Get detailed breakdowns to boost your business profits.',
      path: 'https://etsy-profit-calculator.vercel.app/',
      static_badge: {
        badgeContent: 'Etsy-Profit_Calculator-yellow',
        logo: 'etsy'
      }
    },
    {
      name: 'Read HTML Download PDF',
      description: 'Preview and download PDFs: React, Vue, Svelte, Nuxt, Tauri, Typescript, Nestjs, Vite, Expressjs, Vitest, Slidev, pnpm, Shellspec, Zod, and more.',
      path: 'https://read-doc-download-pdf.codewithshin.com/',
      static_badge: {
        badgeContent: 'Read HTML Download PDF-yellow',
        logo: ''
      }
    },
    {
      name: 'Norske Flashcard',
      description: 'Improve your Norwegian vocabulary with interactive flashcards. Ideal for learners of all levels.',
      path: 'https://norske-flashcard.codewithshin.com/',
      static_badge: {
        badgeContent: 'Svelte:_Runes-Norske_Flashcard-yellow',
        logo: 'svelte'
      }
    },
    {
      name: 'Multilanguage Flashcard',
      description: 'Learn basic phrases in 27 languages with Emoji flashcards.',
      path: 'https://multilanguage-flashcard.codewithshin.com/',
      static_badge: {
        badgeContent: 'Svelte:_Runes-Multilanguage_Flashcard-yellow',
        logo: 'svelte'
      }
    },
    {
      name: 'Nihongo Flashcard',
      description: 'Learn Japanese vocabulary with interactive flashcards.',
      path: 'https://nihongo-flashcard.codewithshin.com/',
      static_badge: {
        badgeContent: 'Svelte:_Runes-Nihongo_Flashcard-yellow',
        logo: 'svelte'
      }
    },
    {
      name: 'FlexiLexi Dictionary',
      description: 'A flexible dictionary for English, Norwegian, and Japanese.',
      path: 'https://flexilexi-dictionary.codewithshin.com/',
      static_badge: {
        badgeContent: 'Svelte:_Runes-FlexiLexi_Dictionary-yellow',
        logo: 'svelte'
      }
    },
    {
      name: 'Gjett Norsk',
      description: 'Learn Norwegian together with friends and make learning enjoyable and collaborative.',
      path: 'https://gjett-norsk.codewithshin.com/',
      static_badge: {
        badgeContent: 'Svelte:_Runes-Gjett_Norsk-yellow',
        logo: 'svelte'
      }
    }
  ];
</script>

<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4">
  <h1>Web apps</h1>
</div>

<Components componentData={list} />
