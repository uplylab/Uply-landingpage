import { useState, useEffect } from "react";
import i18n, { LANGUAGES } from "../i18n";

export function useLanguage() {
  const [language, setLanguageState] = useState(i18n.language || "it");

  const setLanguage = (lng: string) => {
    if (!LANGUAGES.includes(lng)) return;
    i18n.changeLanguage(lng);
    localStorage.setItem("uply_lang", lng);
    setLanguageState(lng);
  };

  useEffect(() => {
    const saved = localStorage.getItem("uply_lang");
    if (saved && LANGUAGES.includes(saved)) {
      i18n.changeLanguage(saved);
      setLanguageState(saved);
    }
  }, []);

  return { language, setLanguage };
}
