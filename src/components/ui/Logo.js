import React from 'react'

export default function Logo({ className, fill }) {
  return (
    <svg
      className={className}
      width="328"
      height="372"
      viewBox="0 0 328 372"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id="logo-circle"
        cx="214"
        cy="240"
        r="37"
        fill={fill ? fill : '#231F20'}
      />
      <circle cx="209.5" cy="234.5" r="9.5" fill="white" />
      <circle
        id="logo-circle"
        cx="115"
        cy="240"
        r="37"
        fill={fill ? fill : '#231F20'}
      />
      <circle cx="119.5" cy="234.5" r="9.5" fill="white" />
      <path
        id="logo-path"
        d="M164 212L0 0L5 51L42 101V372H72V142L164 260L256 141V372H285V102L323 51L328 0L164 212Z"
        fill={fill ? fill : '#00264F'}
      />
    </svg>
  )
}
