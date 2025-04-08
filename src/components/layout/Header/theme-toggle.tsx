'use client'

import { useTheme } from 'next-themes'
import { memo } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Button variant='ghost' size='icon' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Sun className='h-5 w-5 dark:hidden' />
      <Moon className='hidden h-5 w-5 dark:block' />
    </Button>
  )
}

export default memo(ThemeToggle)
