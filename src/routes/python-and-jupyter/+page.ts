import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title: 'Python and Jupyter - codewithshin.com',
    description: 'Python & Jupyter projects',
    og: {
      title: 'Python and Jupyter - codewithshin.com',
      description: 'Python & Jupyter projects',
      image: 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Python%20&%20Jupyter'
    },
    twitter: {
      title: 'Python and Jupyter - codewithshin.com',
      description: 'Python & Jupyter projects',
      image: 'https://open-graph-vercel.vercel.app/api/codewithshin?title=Python%20&%20Jupyter'
    }
  };
  return { pageMetaTags };
};
