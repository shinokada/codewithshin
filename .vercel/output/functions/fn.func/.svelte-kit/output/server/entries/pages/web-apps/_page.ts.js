const load = () => {
  const pageMetaTags = {
    title: "Web apps - codewithshin.com",
    description: "Web apps for learning and other purposes",
    og: {
      title: "Web apps - codewithshin.com",
      description: "Web apps for learning and other purposes",
      image: "https://open-graph-vercel.vercel.app/api/codewithshin?title=Web%20apps"
    },
    twitter: {
      title: "Web apps - codewithshin.com",
      description: "Web apps for learning and other purposes",
      image: "https://open-graph-vercel.vercel.app/api/codewithshin?title=Web%20apps"
    }
  };
  return { pageMetaTags };
};
export {
  load
};
