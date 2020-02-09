import React from 'react'

export default function Header(props) {
  const {title} = props
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  )
}
