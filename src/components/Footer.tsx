import React from 'react'

export default function Header({label}: Props) {
  return (
    <footer className="footer">
      <span className="footer__item">{label}</span>
    </footer>
  )
}

type Props = {
  label: string
}
