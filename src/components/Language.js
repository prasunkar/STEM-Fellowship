import React from 'react'
import { navigate } from 'gatsby'
import linkResolver from '../utils/linkResolver'
import { languages } from 'language-tags'

const languageSwitcher = ({ activeDocMeta }) => {
  const currentLang = activeDocMeta.lang
  const CurrentLangOption = (
    <option value={currentLang}>{currentLang.slice(0, 2).toUpperCase()}</option>
  )

  const altLangOptions = activeDocMeta.alternateLanguages.map(
    (altLang, index) => (
      <option value={linkResolver(altLang)} key={`alt-lang-${index}`}>
        {altLang.lang.slice(0, 2).toUpperCase()}
      </option>
    )
  )

  const handleLangChange = (event) => {
    navigate(event.target.value)
  }

  return (
    <select value={currentLang} onChange={handleLangChange}>
      {CurrentLangOption}
      {altLangOptions}
    </select>
  )
}

export default languageSwitcher
