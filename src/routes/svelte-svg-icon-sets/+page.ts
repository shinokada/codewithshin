import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title: 'Svelte SVG Icon Sets - codewithshin.com',
    description: '29 Svelte SVG Icon Sets for for Svelte 4/5/Runes projects',
    og: {
      title: 'Svelte SVG Icon Sets - codewithshin.com',
      description: '29 Svelte SVG Icon Sets for Svelte 4/5/Runes projects',
      image: 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20SVG%20Icon%20Sets'
    },
    twitter: {
      title: 'Svelte SVG Icon Sets - codewithshin.com',
      description: '29 Svelte SVG Icon Sets for for Svelte 4/5/Runes projects',
      image: 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20SVG%20Icon%20Sets'
    }
  };
  return { pageMetaTags };
};
