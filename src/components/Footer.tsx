import React from 'react'

export default function Header(props) {
  const {label} = props
  return (
    <footer className="footer">
      <span className="footer__item">{label}</span>
    </footer>
  )
}
