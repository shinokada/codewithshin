import { ANALYTICS_ID } from '$env/static/private';

export const load = ({ url }) => {
  const layoutMetaTags = {
    title: 'codewithshin.com',
    description: 'Hi, I\'m Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.',
    keywords: 'svelte, runes, js, ts, tailwind, bash, python',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title: 'codewithshin.com',
      description: 'Hi, I\'m Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.',
      image: 'https://open-graph-vercel.vercel.app/api/codewithshin',
      imageAlt: 'codewithshin.com'
    },
    og: {
      type: 'website',
      title: 'codewithshin.com',
      description: 'Hi, I\'m Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.',
      url: url.href,
      image: 'https://open-graph-vercel.vercel.app/api/codewithshin',
      imageAlt: 'codewithshin.com',
      siteName: 'codewithshin.com',
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
