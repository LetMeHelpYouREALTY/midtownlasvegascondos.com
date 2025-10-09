'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

interface PageFAQProps {
  faqs: FAQ[]
  title?: string
}

export function PageFAQ({ faqs, title = 'Frequently Asked Questions' }: PageFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{title}</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
            >
              <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

