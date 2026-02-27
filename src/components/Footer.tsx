"use client";

import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Stato per gestire quale modale è aperto
  const [activeModal, setActiveModal] = useState(null);

  // Blocca lo scroll della pagina in background quando si apre il modale
  const openModal = (type) => {
    setActiveModal(type);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  // Riattiva lo scroll quando si chiude
  const closeModal = () => {
    setActiveModal(null);
    if (typeof window !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <footer className="w-full border-t border-gray-200 dark:border-white/10 py-12 px-6 bg-[#F8FAFC] dark:bg-[#0B0F19] transition-colors duration-700 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo o Nome Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-extrabold tracking-tighter text-gray-900 dark:text-white">
              UPLY
            </span>
            <p className="text-sm text-gray-500 dark:text-[#A0B3C6] mt-2">
              {t("footer.slogan", { defaultValue: "Il social network meritocratico." })}
            </p>
          </div>

          {/* Bottoni Legali */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal('privacy');
              }}
              className="text-gray-500 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] transition-colors cursor-pointer"
            >
              {t("footer.links.privacy")}
            </button>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal('cookie');
              }}
              className="text-gray-500 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] transition-colors cursor-pointer"
            >
              {t("footer.links.cookie")}
            </button>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal('termini');
              }}
              className="text-gray-500 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] transition-colors cursor-pointer"
            >
              {t("footer.links.terms")}
            </button>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-[#A0B3C6] text-center md:text-right">
            {t("footer.copyright", { year: currentYear })}
          </div>
        </div>
      </footer>

      {/* ===================== MODALE POPUP ===================== */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-gray-900/80 backdrop-blur-md"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-white dark:bg-[#121A2F] border border-gray-200 dark:border-white/10 p-6 md:p-10 rounded-[32px] max-w-3xl w-full relative shadow-2xl flex flex-col max-h-[85vh] text-left"
              initial={{ scale: 0.95, y: 20 }} 
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button"
                onClick={closeModal} 
                className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-white/5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="overflow-y-auto pr-4 custom-scrollbar">
                
                {/* --- PRIVACY POLICY --- */}
                {activeModal === 'privacy' && (
                  <div className="space-y-6 text-gray-700 dark:text-[#A0B3C6]">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t("footer.privacy.title")}</h2>
                    <p className="text-xs font-bold text-[#00B8C9] uppercase tracking-wider mb-6">{t("footer.last_updated")}</p>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t("footer.privacy.sec1_title")}</h3>
                      <p className="text-sm mt-1">{t("footer.privacy.sec1_desc")}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t("footer.privacy.sec2_title")}</h3>
                      <p className="text-sm mt-1">{t("footer.privacy.sec2_desc")}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t("footer.privacy.sec3_title")}</h3>
                      <p className="text-sm mt-1">{t("footer.privacy.sec3_desc")}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t("footer.privacy.sec4_title")}</h3>
                      <p className="text-sm mt-1">{t("footer.privacy.sec4_desc")}</p>
                    </div>
                  </div>
                )}

                {/* --- COOKIE POLICY --- */}
                {activeModal === 'cookie' && (
                  <div className="space-y-6 text-gray-700 dark:text-[#A0B3C6]">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t("footer.cookie.title")}</h2>
                    <p className="text-xs font-bold text-[#00B8C9] uppercase tracking-wider mb-6">{t("footer.last_updated")}</p>
                    
                    <p className="text-sm leading-relaxed">
                      <Trans i18nKey="footer.cookie.p1">
                        Questo sito utilizza <1>solo cookie tecnici strettamente necessari</1> al suo funzionamento.
                      </Trans>
                    </p>
                    <p className="text-sm leading-relaxed">
                      {t("footer.cookie.p2")}
                    </p>
                  </div>
                )}

                {/* --- TERMINI E CONDIZIONI --- */}
                {activeModal === 'termini' && (
                  <div className="space-y-6 text-gray-700 dark:text-[#A0B3C6]">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t("footer.terms.title")}</h2>
                    <p className="text-xs font-bold text-[#00B8C9] uppercase tracking-wider mb-6">{t("footer.last_updated")}</p>
                    
                    <p className="text-sm leading-relaxed">{t("footer.terms.p1")}</p>
                    <p className="text-sm leading-relaxed">{t("footer.terms.p2")}</p>
                    <p className="text-sm leading-relaxed">{t("footer.terms.p3")}</p>
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}