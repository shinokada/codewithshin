import type { MetaProps } from 'runes-meta-tags'

export const load = () => {
  const pageMetaTags: MetaProps = {
    title: 'Homebrew Taps - codewithshin.com',
    description: 'Homebrew taps for Mac and Lynux.',
    og: {
      title: 'Homebrew Taps - codewithshin.com',
      description: 'Homebrew taps for Mac and Lynux.',
      image: 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Homebrew%20Taps',
    },
    twitter: {
      title: 'Homebrew Taps - codewithshin.com',
      description: 'Homebrew taps for Mac and Lynux.',
      image: 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Homebrew%20Taps',
    },
  };
  return { pageMetaTags };
}