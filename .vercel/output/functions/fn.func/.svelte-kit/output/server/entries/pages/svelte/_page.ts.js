const load = () => {
  const pageMetaTags = {
    title: "Svelte libraries | codewithshin.com",
    description: "Svelte 4, 5, and Runes libraries",
    og: {
      title: "Svelte libraries | codewithshin.com",
      description: "Svelte 4, 5, and Runes libraries",
      image: "https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20libraries"
    },
    twitter: {
      title: "Svelte libraries | codewithshin.com",
      description: "Svelte 4, 5, and Runes libraries",
      image: "https://open-graph-vercel.vercel.app/api/codewithshin?title=Svelte%20libraries"
    }
  };
  return { pageMetaTags };
};
export {
  load
};
