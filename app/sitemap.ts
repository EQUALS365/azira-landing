import type { MetadataRoute } from "next"
import { headers } from "next/headers"

import { pageForHost, pageOrigin, pageUrl, shouldIndex } from "@/lib/seo"

/** Each treatment subdomain lists its one page, with its photo and film */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const page = pageForHost((await headers()).get("host"))
  const url = page && pageUrl(page)
  if (!page || !url || !shouldIndex(page)) return []

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
