import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export default function HamburgerMenu({ white }) {
  useEffect(() => {
    const svgTL = gsap.timeline({ paused: true }),
      duration = 1

    svgTL
      .to(
        '#menu-top',
        {
          duration: duration,
          y: 6,
          ease: 'power4.inOut',
          transformOrigin: '50% 50%',
          stroke: 'rgb(239, 68, 68)',
          height: '.2rem',
          rotation: 45,
        },
        0
      )
      .reverse()
    svgTL
      .to(
        '#menu-bottom',
        {
          duration: duration,
          y: -6,
          ease: 'power4.inOut',
          transformOrigin: '50% 50%',
          stroke: 'rgb(239, 68, 68)',
          height: '.2rem',
          rotation: -45,
        },
        0
      )
      .reverse()

    document.getElementById('divmenu').onclick = () => {
      svgTL.reversed(!svgTL.reversed())
    }
  }, [])

  return (
    <div className="menu" id="divmenu">
      <svg viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="menu-top" d="M1 1H33" strokeLinecap="round" />
        <path id="menu-bottom" d="M1 13H33" strokeLinecap="round" />
      </svg>
    </div>
  )
}
