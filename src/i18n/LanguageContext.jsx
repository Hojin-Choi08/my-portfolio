import { createContext, useContext, useEffect, useState } from 'react';
import { content, defaultLanguage } from '../data/content.js';

const STORAGE_KEY = 'lang';
const LanguageContext = createContext(null);

// Saved choice first, then the browser's preferred languages, then the default.
function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && content[saved]) return saved;
  } catch {
    // storage blocked (private mode, disabled cookies) — fall through
  }
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of preferred) {
    const code = tag?.slice(0, 2).toLowerCase();
    if (content[code]) return code;
  }
  return defaultLanguage;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (code) => {
    setLangState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // not persisted — still switches for this visit
    }
  };

  return <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>{children}</LanguageContext.Provider>;
}

// Returns { lang, setLang, t } where `t` is content[lang] from content.js.
export function useLanguage() {
  return useContext(LanguageContext);
}
