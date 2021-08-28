import React from 'react'
import Navigation from '../components/ui/Navigation'

export default function Layout({ children, overlay /* page */ }) {
  return (
    <main /* className={page} */>
      <Navigation overlay={overlay} />
      <div id="body">{children}</div>
    </main>
  )
}
