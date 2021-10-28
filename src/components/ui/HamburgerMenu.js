import React, { useEffect } from 'react'
import { gsap } from 'gsap'

// TODO: Find a way to control the hamburger menu from outside this component
//       so it can be controlled universally.
export default function HamburgerMenu() {
  useEffect(() => {
    const tl = gsap.timeline({ paused: true }),
      duration = 1,
      linksStart = 0.56,
      menuEase = 'back.inOut'

    tl.to('#logo-path', { duration: duration, fill: '#00264F' }, 0)
      .to('#logo-circle', { duration: duration, fill: '#231F20' }, 0)
      .to(
        '#menu-top',
        {
          duration: duration,
          y: 6,
          ease: menuEase,
          transformOrigin: '50% 50%',
          stroke: 'rgb(239, 68, 68)',
          strokeWidth: 3,
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
          ease: menuEase,
          transformOrigin: '50% 50%',
          stroke: 'rgb(239, 68, 68)',
          strokeWidth: 3,
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
      <svg viewBox="0 0 34 14" xmlns="http://www.w3.org/2000/svg">
        <path
          id="menu-top"
          d="M1 1H33"
          strokeLinecap="round"
          // stroke={fill ? fill : 'black'}
        />
        <path
          id="menu-bottom"
          d="M1 13H33"
          strokeLinecap="round"
          // stroke={fill ? fill : 'black'}
        />
      </svg>
    </div>
  )
}
