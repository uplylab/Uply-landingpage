import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Stato per gestire quale modale è aperto ('privacy', 'cookie', 'termini' o null)
  const [activeModal, setActiveModal] = useState(null);

  // Funzione per non far scrollare la pagina dietro quando il modale è aperto
  const openModal = (type) => {
    setActiveModal(type);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "auto";
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
              Il social network meritocratico.
            </p>
          </div>

          {/* Link Legali (Ora sono bottoni che aprono il modale) */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              onClick={() => openModal('privacy')}
              className="text-gray-500 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] transition-colors"
            >
              {t("footer.privacy", { defaultValue: "Privacy Policy" })}
            </button>
            <button 
              onClick={() => openModal('cookie')}
              className="text-gray-500 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] transition-colors"
            >
              {t("footer.cookie", { defaultValue: "Cookie Policy" })}
            </button>
            <button 
              onClick={() => openModal('termini')}
              className="text-gray-500 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] transition-colors"
            >
              {t("footer.terms", { defaultValue: "Termini e Condizioni" })}
            </button>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-[#A0B3C6]">
            © {currentYear} Uply. Tutti i diritti riservati.
          </div>
        </div>
      </footer>

      {/* ===================== MODALE LEGALE ===================== */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/80 backdrop-blur-md"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={closeModal} // Chiude se clicchi fuori
          >
            <motion.div 
              className="bg-white dark:bg-[#121A2F] border border-gray-200 dark:border-white/10 p-6 md:p-10 rounded-[32px] max-w-3xl w-full relative shadow-2xl flex flex-col max-h-[85vh]"
              initial={{ scale: 0.95, y: 20 }} 
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Evita che il clic dentro la card la chiuda
            >
              {/* Pulsante di chiusura */}
              <button 
                onClick={closeModal} 
                className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-white/5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Contenuto dinamico in base a cosa hai cliccato */}
              <div className="overflow-y-auto pr-2 custom-scrollbar">
                
                {/* --- PRIVACY POLICY --- */}
                {activeModal === 'privacy' && (
                  <div className="space-y-6 text-gray-700 dark:text-[#A0B3C6]">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h2>
                    <p className="text-xs font-bold text-[#00B8C9] uppercase tracking-wider mb-6">Ultimo aggiornamento: Febbraio 2026</p>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">1. Titolare del Trattamento</h3>
                      <p className="text-sm mt-1">Il Titolare del trattamento è Uply. Puoi contattarci a uply.lab@gmail.com</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">2. Dati Raccolti</h3>
                      <p className="text-sm mt-1">Per la fase di Beta, raccogliamo solo il tuo indirizzo email per iscriverti alla lista d'attesa.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">3. Finalità</h3>
                      <p className="text-sm mt-1">Usiamo la tua email solo per comunicarti l'apertura della Beta di Uply. Non faremo spam né venderemo i tuoi dati.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">4. I tuoi diritti</h3>
                      <p className="text-sm mt-1">Puoi chiederci in qualsiasi momento di cancellare la tua email dal nostro database scrivendoci o usando il link "Unsubscribe" nelle nostre email.</p>
                    </div>
                  </div>
                )}

                {/* --- COOKIE POLICY --- */}
                {activeModal === 'cookie' && (
                  <div className="space-y-6 text-gray-700 dark:text-[#A0B3C6]">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Cookie Policy</h2>
                    <p className="text-sm mt-4">Questo sito utilizza solo cookie tecnici strettamente necessari al suo funzionamento. Non utilizziamo cookie di profilazione per tracciarti a scopi pubblicitari.</p>
                  </div>
                )}

                {/* --- TERMINI E CONDIZIONI --- */}
                {activeModal === 'termini' && (
                  <div className="space-y-6 text-gray-700 dark:text-[#A0B3C6]">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Termini e Condizioni</h2>
                    <p className="text-sm mt-4">Iscrivendoti alla Waitlist di Uply accetti di ricevere comunicazioni relative al lancio della piattaforma. L'accesso alla Beta sarà limitato e a discrezione del team di Uply.</p>
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