import type { MetadataRoute } from 'next'
import { servicios, productos } from '../lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  // Configura aquí tu dominio real o usa la variable de entorno de Vercel
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ascmet.pe'

  const serviciosUrls = servicios.map((servicio) => ({
    url: `${baseUrl}/servicios/${servicio.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const productosUrls = productos.map((producto) => ({
    url: `${baseUrl}/productos/${producto.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviciosUrls,
    ...productosUrls,
  ]
}
