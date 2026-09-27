import type { AmenityCategoryConfig, AmenityCategoryId } from './types'

/** Condo / high-rise corridor — lead with dining, attractions, parking (per site spec). */
export const AMENITY_CATEGORY_ORDER: AmenityCategoryId[] = [
  'restaurants',
  'attractions',
  'parking',
  'grocery',
  'fitness',
  'cafes',
  'shopping',
  'parks',
  'healthcare',
  'pharmacies',
  'golf',
  'schools',
]

export const AMENITY_CATEGORIES: AmenityCategoryConfig[] = [
  {
    id: 'restaurants',
    label: 'Restaurants',
    ariaLabel: 'Show restaurants near Midtown Las Vegas',
    primaryTypes: ['restaurant'],
  },
  {
    id: 'attractions',
    label: 'Attractions',
    ariaLabel: 'Show attractions and entertainment near Midtown Las Vegas',
    primaryTypes: ['tourist_attraction', 'performing_arts_theater', 'museum', 'art_gallery'],
  },
  {
    id: 'parking',
    label: 'Parking',
    ariaLabel: 'Show parking near Midtown Las Vegas',
    primaryTypes: ['parking', 'parking_garage'],
  },
  {
    id: 'grocery',
    label: 'Grocery',
    ariaLabel: 'Show grocery stores near Midtown Las Vegas',
    primaryTypes: ['grocery_store', 'supermarket'],
  },
  {
    id: 'fitness',
    label: 'Fitness',
    ariaLabel: 'Show gyms and fitness near Midtown Las Vegas',
    primaryTypes: ['gym', 'fitness_center'],
  },
  {
    id: 'cafes',
    label: 'Cafes',
    ariaLabel: 'Show cafes near Midtown Las Vegas',
    primaryTypes: ['cafe', 'coffee_shop'],
  },
  {
    id: 'shopping',
    label: 'Shopping',
    ariaLabel: 'Show shopping near Midtown Las Vegas',
    primaryTypes: ['shopping_mall', 'department_store', 'clothing_store'],
  },
  {
    id: 'parks',
    label: 'Parks',
    ariaLabel: 'Show parks near Midtown Las Vegas',
    primaryTypes: ['park', 'playground'],
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    ariaLabel: 'Show hospitals and doctors near Midtown Las Vegas',
    primaryTypes: ['hospital', 'doctor', 'medical_clinic'],
  },
  {
    id: 'pharmacies',
    label: 'Pharmacies',
    ariaLabel: 'Show pharmacies near Midtown Las Vegas',
    primaryTypes: ['pharmacy', 'drugstore'],
  },
  {
    id: 'golf',
    label: 'Golf',
    ariaLabel: 'Show golf courses near Midtown Las Vegas',
    primaryTypes: ['golf_course'],
  },
  {
    id: 'schools',
    label: 'Schools',
    ariaLabel: 'Show schools near Midtown Las Vegas',
    primaryTypes: ['school', 'primary_school', 'secondary_school'],
  },
]

export function getCategoryById(id: AmenityCategoryId): AmenityCategoryConfig {
  const found = AMENITY_CATEGORIES.find((c) => c.id === id)
  if (!found) {
    throw new Error(`Unknown amenity category: ${id}`)
  }
  return found
}
