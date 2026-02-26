import { useState, useEffect } from "react";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@hooks/useTheme";
import { useLanguage } from "@hooks/useLanguage";
import { LANGUAGES } from "../i18n";
import logoDark from "@assets/logo-dark.svg";
import logoLight from "@assets/logo-light.svg";
import { useTranslation } from "react-i18next";

// Etichette delle lingue in forma nativa
const LANGUAGE_LABELS: Record<string, string> = {
  it: "Italiano",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  ar: "العربية",
  zh: "中文",
  ja: "日本語",
  ru: "Русский",
  es: "Español"
};

export default function Navbar() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effetto scroll migliorato
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        backdrop-blur-xl shadow-lg border-b border-white/5 dark:border-white/5
        ${isScrolled
          ? "py-2 bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(20,24,35,0.25)]"
          : "py-4 bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(20,24,35,0.12)]"}
      `}
    >
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00B8C9]/40 to-transparent opacity-70" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 items-center">

          {/* ================= LOGO ================= */}
          <motion.div
            className="flex items-center justify-start"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={theme === "dark" ? logoLight : logoDark}
              alt="UPLY logo"
              className={`transition-all duration-700 scale-x-[1.45]
                ${isScrolled ? "w-10 md:w-12" : "w-14 md:w-16"}
              `}
              style={{ transformOrigin: "left center" }}
            />
          </motion.div>

          {/* ================= LINK CENTRALI ================= */}
          <div className="hidden md:flex justify-center gap-8 font-medium">
            {[
              { href: "#home", key: "home" },
              { href: "#about", key: "about" },
              { href: "#pricing", key: "pricing" },
              { href: "#contacts", key: "contacts" }
            ].map(({ href, key }) => (
              <motion.a
                key={key}
                href={href}
                className="relative group transition-colors text-sm"
                whileHover={{ y: -2 }}
              >
                {t(`navbar.links.${key}`)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00B8C9] rounded-full transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* ================= THEME + LANG ================= */}
          <div className="flex items-center justify-end gap-4">

            {/* THEME TOGGLE */}
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.12 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-md
                hover:bg-[#00B8C9]/15 transition"
            >
              {theme === "dark"
                ? <Sun className="w-5 h-5 text-[#00B8C9]" />
                : <Moon className="w-5 h-5 text-[#00B8C9]" />}
            </motion.button>

            {/* LANGUAGE SELECTOR */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setMenuOpen(o => !o)}
                className="flex items-center gap-2 font-semibold underline underline-offset-4 hover:text-[#00B8C9] transition"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
              >
                {language.toUpperCase()}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${menuOpen ? "rotate-180" : ""}`}
                />
              </motion.button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-2 glass rounded-xl p-2 z-50 min-w-[150px] shadow-2xl border border-white/10"
                  >
                    {LANGUAGES.map(lng => (
                      <motion.button
                        key={lng}
                        whileHover={{ x: 6 }}
                        whileTap={{ scale: 0.97 }}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors
                          ${
                            language === lng
                              ? "font-bold text-[#00B8C9] underline underline-offset-4"
                              : "hover:text-[#00B8C9]"
                          }
                        `}
                        onClick={() => {
                          setLanguage(lng);
                          setMenuOpen(false);
                        }}
                      >
                        {LANGUAGE_LABELS[lng]}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </motion.nav>
  );
}
