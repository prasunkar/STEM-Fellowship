import React from 'react'
import Navigation from '../components/ui/Navigation'

export default function Layout({ children }) {
  return (
    <div>
      <Navigation overlay={false} />
      <div id="body">{children}</div>
    </div>
  )
}
