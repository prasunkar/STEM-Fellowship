import React from 'react'
import { Link } from 'gatsby'

export default function InternalLink({ data }) {
  const document = data.prismicNewsletter.data

  return <Link to={document.navigation_link.url}>InternalLink</Link>
}
