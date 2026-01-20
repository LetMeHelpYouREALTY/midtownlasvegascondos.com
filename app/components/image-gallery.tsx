'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-video bg-slate-200 rounded-lg overflow-hidden">
        {images[selectedImage] ? (
          <Image
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            Main Image
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-video bg-slate-200 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? 'border-slate-900'
                : 'border-transparent hover:border-slate-400'
            }`}
          >
            {image.src ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">
                {index + 1}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Caption */}
      {images[selectedImage]?.caption && (
        <p className="text-center text-slate-600 text-sm">
          {images[selectedImage].caption}
        </p>
      )}
    </div>
  )
}

