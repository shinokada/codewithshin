import type { MetaProps } from 'runes-meta-tags'

export const load = () => {
  const pageMetaTags: MetaProps = Object.freeze({
    title: 'Terminal tools | codewithshin.com',
    description: 'Bash and Node.js tools for your terminal. | codewithshin.com.',
    og: {
      title: 'Terminal tools | codewithshin.com',
      description: 'Bash and Node.js tools for your terminal. | codewithshin.com.',
    },
    twitter: {
      title: 'Terminal tools | codewithshin.com',
      description: 'Bash and Node.js tools for your terminal. | codewithshin.com.',
    },
  }) satisfies MetaProps;
  return { pageMetaTags };
}