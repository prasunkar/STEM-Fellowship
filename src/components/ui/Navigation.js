import React from 'react'
import { Link } from 'gatsby'

import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'
import Logo from './Logo'
import HamburgerMenu from './HamburgerMenu'

export default function Navigation({ overlay, children }) {
  return (
    <nav className={overlay ? 'navigation overlay' : 'navigation'}>
      <div>
        <Logo className="logo" />
        <div className="links">
          <Link className="home" activeClassName="active" to="/">
            Home
          </Link>

          <Link className="our-team" activeClassName="active" to="/ourteam">
            Our Team
          </Link>

          <Link className="events" activeClassName="active" to="/events">
            Events
          </Link>

          <Link
            className="newsletters"
            activeClassName="active"
            to="/newsletters"
          >
            Newsletters
          </Link>

          <Link className="contact-us" activeClassName="active" to="/contactus">
            Contact Us
          </Link>
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
    </nav>
  )
}
