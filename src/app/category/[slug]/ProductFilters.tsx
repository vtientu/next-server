'use client'

import React, { useState } from 'react'

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void
}

export default function ProductFilters({ onFilterChange }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState('all')

  const handleFilterChange = (newPriceRange: string) => {
    setPriceRange(newPriceRange)
    onFilterChange({ priceRange: newPriceRange })
  }

  return (
    <div className='mb-4'>
      <h3 className='font-semibold mb-2'>Price Range</h3>
      <select value={priceRange} onChange={(e) => handleFilterChange(e.target.value)} className='border p-2 rounded'>
        <option value='all'>All Prices</option>
        <option value='under50'>Under $50</option>
        <option value='50to100'>$50 - $100</option>
        <option value='over100'>Over $100</option>
      </select>
    </div>
  )
}
