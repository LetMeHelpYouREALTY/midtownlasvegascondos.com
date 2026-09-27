'use client'

import { AMENITY_CATEGORIES, AMENITY_CATEGORY_ORDER } from '@/lib/amenities/categories'
import type { AmenityCategoryId } from '@/lib/amenities/types'
import { cn } from '@/lib/utils'

type AmenityCategoryFiltersProps = {
  activeCategory: AmenityCategoryId
  onCategoryChange: (id: AmenityCategoryId) => void
}

export function AmenityCategoryFilters({
  activeCategory,
  onCategoryChange,
}: AmenityCategoryFiltersProps) {
  const ordered = AMENITY_CATEGORY_ORDER.map(
    (id) => AMENITY_CATEGORIES.find((c) => c.id === id)!,
  )

  return (
    <div
      role="tablist"
      aria-label="Filter nearby amenities by category"
      className="flex flex-wrap gap-2"
    >
      {ordered.map((category) => {
        const selected = category.id === activeCategory
        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-label={category.ariaLabel}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900',
              selected
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-800 hover:bg-slate-200',
            )}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
