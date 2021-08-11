import React from 'react'
import Navigation from '../components/ui/Navigation'

export default function Layout({ children, overlay }) {
  return (
    <div>
      <Navigation overlay={overlay} />
      <div id="body">{children}</div>
    </div>
  )
}
