import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("uplyCookiesAccepted");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    setVisible(false);
    localStorage.setItem("uplyCookiesAccepted", "true");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: -4 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 
                     w-[90%] md:w-[600px] z-50"
        >
          {/* Glow premium dietro il banner */}
          <div className="absolute inset-0 bg-[#00B8C9]/25 blur-3xl rounded-3xl opacity-40 pointer-events-none"></div>

          {/* Banner vero e proprio */}
          <div
            className="relative glass border border-uply-border-dark shadow-uply
                       px-6 py-5 rounded-2xl flex flex-col md:flex-row 
                       items-center justify-between gap-4
                       text-uply-text-primaryDark dark:text-uply-text-primaryLight
                       backdrop-blur-xl transition-all duration-500"
          >
            {/* TESTO MULTILINGUA */}
            <p className="text-sm text-center md:text-left leading-relaxed">
              {t("cookies.message", {
                defaultValue:
                  "Utilizziamo i cookie per migliorare la tua esperienza su UPLY. Puoi accettarli o modificare le preferenze in qualsiasi momento.",
              })}
            </p>

            {/* BOTTONE ACCETTA */}
            <motion.button
              whileHover={{ scale: 1.06, x: 2 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleAccept}
              className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold
                         text-white bg-uply-accent hover:bg-uply-accent-hover rounded-full shadow-glow
                         transition-all duration-300"
            >
              {t("cookies.accept", { defaultValue: "Accetta" })}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
