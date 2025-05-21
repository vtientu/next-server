'use client'

import React from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className='min-h-[50vh] flex flex-col items-center justify-center p-4'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-red-600 mb-4'>Something went wrong!</h2>
        <p className='text-gray-600 mb-4'>{error.message}</p>
        <button
          onClick={() => reset()}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
        >
          Try again
        </button>
      </div>
    </div>
  )
}
