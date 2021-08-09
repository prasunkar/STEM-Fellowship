import React from 'react'
import { KeyTextField } from '@prismicio/types'
import { GatsbyImage } from 'gatsby-plugin-image'

const Quote = ({ slice }) => (
  <section>
    <div>
      <GatsbyImage
        image={slice.primary.author_headshot.gatsbyImageData}
        alt={slice.primary.quote_author}
      />
    </div>
    <div>
      <KeyTextField render={slice.primary.quote_content} />
      <p>{slice.primary.quote_author}</p>
    </div>
  </section>
)
