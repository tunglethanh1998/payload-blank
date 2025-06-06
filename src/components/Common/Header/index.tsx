'use client'
import React from 'react'

type HeaderProps = {
  title: string
}

export const Header = (props: HeaderProps) => {
  const { title } = props

  return (
    <header className="list-header">
      <div className="list-header__content">
        <div className="list-header__title-and-actions">
          <h1 className="list-header__title">{title}</h1>
        </div>
        <div className="list-header__actions" />
      </div>
    </header>
  )
}
