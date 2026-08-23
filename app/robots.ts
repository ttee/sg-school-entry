import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/learn/', '/curriculum/'],
    },
    sitemap: 'https://sg-school-entry.vercel.app/sitemap.xml',
  }
}
