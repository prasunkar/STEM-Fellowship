import React from 'react'
import Navigation from '../components/ui/Navigation'

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
