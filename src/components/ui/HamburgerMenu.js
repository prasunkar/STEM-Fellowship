import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export default function HamburgerMenu({ white }) {
  useEffect(() => {
    const tl = gsap.timeline({ paused: true }),
      duration = 1,
      linksStart = 0.56

    tl.to(
      '#menu-top',
      {
        duration: duration,
        y: 6,
        ease: 'back.inOut',
        transformOrigin: '50% 50%',
        stroke: 'rgb(239, 68, 68)',
        height: '.2rem',
        rotation: 45,
      },
      0
    )
      .to(
        '#menu-bottom',
        {
          duration: duration,
          y: -6,
          ease: 'back.inOut',
          transformOrigin: '50% 50%',
          stroke: 'rgb(239, 68, 68)',
          height: '.2rem',
          rotation: -45,
        },
        0
      )
      .to(
        '#overlay',
        {
          duration: 0.64,
          display: 'flex',
          height: '100vh',
          ease: 'power3.inOut',
        },
        0
      )
      .from(
        '.link',
        { opacity: 0, y: '1em', stagger: 0.048, ease: 'circ.out' },
        linksStart
      )
      .to('#body', { display: 'none' }, linksStart)
      .reverse()

    document.getElementById('navmenu').onclick = () => {
      tl.reversed(!tl.reversed())
    }
  }, [])

  return (
    <div className="menu" id="navmenu">
      <svg viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="menu-top" d="M1 1H33" strokeLinecap="round" />
        <path id="menu-bottom" d="M1 13H33" strokeLinecap="round" />
      </svg>
    </div>
  )
}
