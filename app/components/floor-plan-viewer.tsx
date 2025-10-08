'use client'

import { useState } from 'react'
import Image from 'next/image'

interface FloorPlan {
  id: string
  name: string
  bedrooms: string
  bathrooms: string
  sqft: string
  price: string
  imagePath: string
  pdfPath: string
}

interface FloorPlanViewerProps {
  plans: FloorPlan[]
}

export function FloorPlanViewer({ plans }: FloorPlanViewerProps) {
  const [selectedPlan, setSelectedPlan] = useState(0)

  const plan = plans[selectedPlan]

  return (
    <div className="space-y-8">
      {/* Plan Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {plans.map((p, index) => (
          <button
            key={p.id}
            onClick={() => setSelectedPlan(index)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedPlan === index
                ? 'border-slate-900 bg-slate-50'
                : 'border-slate-200 hover:border-slate-400'
            }`}
          >
            <div className="font-bold text-slate-900">{p.name}</div>
            <div className="text-sm text-slate-600 mt-1">
              {p.bedrooms} • {p.bathrooms}
            </div>
            <div className="text-sm text-slate-600">{p.sqft} sqft</div>
            <div className="text-sm font-semibold text-slate-900 mt-2">
              {p.price}
            </div>
          </button>
        ))}
      </div>

      {/* Floor Plan Display */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {plan.name}
          </h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-600">Bedrooms</span>
              <span className="font-semibold text-slate-900">{plan.bedrooms}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-600">Bathrooms</span>
              <span className="font-semibold text-slate-900">{plan.bathrooms}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-600">Square Feet</span>
              <span className="font-semibold text-slate-900">{plan.sqft}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 pb-2">
              <span className="text-slate-600">Starting Price</span>
              <span className="font-semibold text-slate-900">{plan.price}</span>
            </div>
          </div>
          <a
            href={plan.pdfPath}
            download
            className="inline-block w-full px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors text-center"
          >
            Download Floor Plan PDF
          </a>
        </div>

        <div className="relative aspect-square bg-slate-200 rounded-lg overflow-hidden">
          {plan.imagePath ? (
            <Image
              src={plan.imagePath}
              alt={`${plan.name} floor plan`}
              fill
              className="object-contain p-4"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              Floor Plan Image
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

