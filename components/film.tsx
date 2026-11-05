"use client"

import { PlayIcon } from "lucide-react"
import { useState } from "react"

import { Plate } from "@/components/plate"
import type { VideoAsset } from "@/content/schema"
import { cn } from "@/lib/utils"

type FilmProps = {
  video: VideoAsset
  /** next/image sizes hint for the poster */
  sizes: string
  /** Aspect ratio and sizing classes */
  className?: string
  /** Placeholder ground for the poster */
  tone?: "dark" | "light"
}

/** 67 → "1:07" */
export function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`
}

/**
 * The clinic's own film. Shows the poster with a play button; the video only
 * loads when the visitor taps, so it never costs the first load. Captions are
 * burned into the clinic's footage.
 */
export function Film({ video, sizes, className, tone = "dark" }: FilmProps) {
  const [playing, setPlaying] = useState(false)
  const duration = formatDuration(video.durationSeconds)

  if (!video.src) {
    return (
      <Plate
        image={video.poster}
        sizes={sizes}
        className={className}
        tone={tone}
      />
    )
  }

  return (
    <div className={cn("relative overflow-hidden bg-room", className)}>
      {playing ? (
        <video
          src={video.src}
          poster={video.poster.src}
          controls
          autoPlay
          playsInline
          preload="metadata"
          aria-label={video.title}
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${video.title} (${duration})`}
          className="group absolute inset-0 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-room-foreground"
        >
          <Plate
            image={video.poster}
            sizes={sizes}
            tone={tone}
            className="absolute inset-0"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-room/80 via-room/15 to-transparent transition-opacity duration-300 group-hover:opacity-80"
          />
          <span
            aria-hidden
            className="absolute inset-x-4 bottom-4 flex items-center gap-4 text-left text-room-foreground sm:inset-x-6 sm:bottom-6"
          >
            <span className="flex size-14 shrink-0 items-center justify-center bg-room-foreground text-room transition-transform duration-300 group-hover:scale-105 sm:size-16">
              <PlayIcon className="size-5 translate-x-px fill-current stroke-0" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="caption text-room-muted">
                Watch · {duration}
              </span>
              <span className="font-heading text-lg leading-snug sm:text-xl">
                {video.title}
              </span>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
