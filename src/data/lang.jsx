import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext({ lang: 'fr', setLang: () => {}, toggle: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('ab-lang')
      if (saved === 'fr' || saved === 'en') return saved
    }
    return 'fr'
  })

  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem('ab-lang', lang)
    if (typeof document !== 'undefined') document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))

  return <LangContext.Provider value={{ lang, setLang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
