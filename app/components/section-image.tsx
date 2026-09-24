import Image from 'next/image'
import { SECTION_IMAGES, type SectionImageKey } from '@/lib/section-images'

type SectionImageProps = {
  image: SectionImageKey
  className?: string
  sizes?: string
}

/** Uncaptioned image that fills its container. The caller sets size and aspect ratio. */
export function SectionImage({
  image,
  className = 'aspect-[4/3] rounded-lg',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: SectionImageProps) {
  const { src, alt } = SECTION_IMAGES[image]

  return (
    <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  )
}
