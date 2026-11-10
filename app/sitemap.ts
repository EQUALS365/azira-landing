import type { MetadataRoute } from "next"
import { headers } from "next/headers"

import type { ConcernPage } from "@/content/schema"
import { indexedPagesForHost, pageOrigin, pageUrl } from "@/lib/seo"

/**
 * The live address lists its pages (every page on SITE_URL, or a treatment
 * subdomain's one page), each with its photo and film
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = indexedPagesForHost((await headers()).get("host"))
  return pages.flatMap(entry)
}

function entry(page: ConcernPage): MetadataRoute.Sitemap {
  const url = pageUrl(page)
  if (!url) return []
  const origin = pageOrigin(page)
  const absolute = (path: string) => new URL(path, origin).toString()
  const film = page.treatments.film

  return [
    {
      url,
      changeFrequency: "monthly",
      priority: 1,
      images: page.hero.image.src ? [absolute(page.hero.image.src)] : undefined,
      videos:
        film?.src && film.poster.src
          ? [
              {
                title: film.title,
                description: film.description,
                thumbnail_loc: absolute(film.poster.src),
                content_loc: absolute(film.src),
                duration: film.durationSeconds,
                publication_date: film.uploadDate,
              },
            ]
          : undefined,
    },
  ]
}
