export default function Loading() {
  return (
    <div className='container mx-auto p-4 min-h-[50vh]'>
      <div className='animate-pulse'>
        <div className='h-8 bg-gray-200 rounded w-1/4 mb-4'></div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {[...Array(6)].map((_, i) => (
            <div key={i} className='border p-4 rounded-lg space-y-3'>
              <div className='h-4 bg-gray-200 rounded w-3/4'></div>
              <div className='h-4 bg-gray-200 rounded w-full'></div>
              <div className='h-4 bg-gray-200 rounded w-1/4'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
