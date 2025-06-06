'use client'
import { type StepNavItem, useStepNav } from '@payloadcms/ui'
import { useEffect } from 'react'

type StepNavProps = {
  nav: StepNavItem[]
}

export const StepNav = ({ nav }: StepNavProps) => {
  const { setStepNav } = useStepNav()

  useEffect(() => {
    setStepNav(nav)
  }, [setStepNav, nav])

  return null
}
