import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// LINGUE CHE SUPPORTI
export const LANGUAGES = ["it", "en", "fr", "de", "pt", "ar", "zh", "ja", "ru","es"];

// RTL
export const RTL_LANGS = ["ar"];

// CARICAMENTO STATICO DELLE TRADUZIONI
async function loadLocale(lang: string) {
  try {
    const data = await import(`./locales/${lang}/translation.json`);
    return data.default;
  } catch (e) {
    console.error(`Errore caricando locale ${lang}:`, e);
    return {};
  }
}

const resources: any = {};

async function loadAll() {
  for (const lang of LANGUAGES) {
    resources[lang] = {
      translation: await loadLocale(lang)
    };
  }

  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: localStorage.getItem("uply_lang") || "it",
      fallbackLng: "it",
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"]
      }
    });

  // RTL/LTR
  i18n.on("languageChanged", lng => {
    const dir = RTL_LANGS.includes(lng) ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
  });
}

loadAll();

export default i18n;
