'use client'

import { cn } from '@/libs/utils'

type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'destructive' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Badge({ children, size = 'md', variant = 'default', className }: BadgeProps) {
  const base =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors whitespace-nowrap'

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  }

  const variants = {
    default: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
    accent: 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white',
    destructive: 'bg-red-500 text-white dark:bg-red-600 dark:text-white',
    outline:
      'border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 bg-transparent',
  }

  return (
    <span className={cn(base, sizeClasses[size], variants[variant], className)}>{children}</span>
  )
}
