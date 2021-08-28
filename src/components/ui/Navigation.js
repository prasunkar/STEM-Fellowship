import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import { gsap } from 'gsap'

import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'
import Logo from './Logo'
import HamburgerMenu from './HamburgerMenu'

export default function Navigation({ overlay, children }) {
  const {
    site: {
      siteMetadata: { navUrls },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          navUrls {
            class
            name
            partiallyActive
            to
          }
        }
      }
    }
  `)

  return (
    <nav className={overlay ? 'navigation overlay' : 'navigation'}>
      <div>
        <Logo className="logo" />
        <div className="links">
          {navUrls.map((link, index) => (
            <TransitionLink
              key={index}
              className={link.class}
              activeClassName="active"
              partiallyActive={navUrls.partiallyActive}
              fade
              to={link.to}
            >
              {link.name}
            </TransitionLink>
          ))}
        </div>
        <div className="socials">
          <a
            href="https://www.instagram.com/stemfellowbloor/"
            target="_blank"
            rel="noreferrer nooppener"
          >
            <AiOutlineInstagram />
          </a>
        </div>
        <HamburgerMenu />
      </div>
      <div className="overlay" id="overlay">
        {navUrls.map((link, index) => (
          <TransitionLink
            key={index}
            className={`link ${link.class}`}
            activeClassName="active"
            partiallyActive={navUrls.partiallyActive}
            fade
            to={link.to}
          >
            {link.name}
          </TransitionLink>
        ))}
      </div>
    </nav>
  )
}
