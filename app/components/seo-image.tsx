import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SEOImageProps {
  src: string
  alt: string
  aspectRatio?: '4:3' | '16:9' | '1:1' | 'auto'
  className?: string
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
}

const aspectRatioClasses = {
  '4:3': 'aspect-[4/3]',
  '16:9': 'aspect-video',
  '1:1': 'aspect-square',
  auto: '',
}

export default function SEOImage({
  src,
  alt,
  aspectRatio = '4:3',
  className,
  priority = false,
  fill,
  width,
  height,
}: SEOImageProps) {
  const containerClass = cn(
    'relative overflow-hidden rounded-lg bg-slate-200',
    aspectRatio !== 'auto' && aspectRatioClasses[aspectRatio],
    className,
  )

  if (fill) {
    return (
      <div className={containerClass}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          aria-label={alt}
        />
      </div>
    )
  }

  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn('rounded-lg', className)}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        aria-label={alt}
      />
    )
  }

  // Fallback: use aspect ratio container
  return (
    <div className={containerClass}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        aria-label={alt}
      />
    </div>
  )
}

