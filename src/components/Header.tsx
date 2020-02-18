import React from 'react'

export default function Header({title}: Props) {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  )
}

type Props = {
  title: string
}
