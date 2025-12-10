export default function sitemap() {
  return [
    {
      url: 'https://www.brindavangardens.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.brindavangardens.com/about-brindavan-garden-mysore',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: 'https://www.brindavangardens.com/destinations',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
    url: 'https://www.brindavangardens.com/getting-there',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
   
    {
       url: 'https://www.brindavangardens.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
]
}

