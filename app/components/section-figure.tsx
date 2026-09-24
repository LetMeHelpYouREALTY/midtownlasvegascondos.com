import Image from 'next/image'
import { SECTION_IMAGES, type SectionImageKey } from '@/lib/section-images'

type SectionFigureProps = {
  image: SectionImageKey
  priority?: boolean
  className?: string
}

/** Captioned 16:9 section image. Use priority only for the first image on a page. */
export function SectionFigure({ image, priority = false, className = '' }: SectionFigureProps) {
  const { src, alt, caption } = SECTION_IMAGES[image]

  return (
    <figure className={`my-10 ${className}`}>
      <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-200 shadow-md">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 960px"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm text-slate-500">{caption}</figcaption>
    </figure>
  )
}
