"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
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
          
         
         

          {/* Bottoni Legali - Protetti dal ricaricamento della pagina */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal('privacy');
              }}
              className="text-gray-500 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal('cookie');
              }}
              className="text-gray-500 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal('termini');
              }}
              className="text-gray-500 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] transition-colors cursor-pointer"
            >
              Termini e Condizioni
            </button>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-[#A0B3C6] text-center md:text-right">
            © {currentYear} Uply. Tutti i diritti riservati.
          </div>
        </div>
      </footer>

      {/* ===================== MODALE POPUP (Z-INDEX 9999) ===================== */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-gray-900/80 backdrop-blur-md"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={closeModal} // Chiude cliccando fuori
          >
            <motion.div 
              className="bg-white dark:bg-[#121A2F] border border-gray-200 dark:border-white/10 p-6 md:p-10 rounded-[32px] max-w-3xl w-full relative shadow-2xl flex flex-col max-h-[85vh] text-left"
              initial={{ scale: 0.95, y: 20 }} 
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Evita la chiusura cliccando dentro il modale
            >
              {/* Pulsante di chiusura X */}
              <button 
                type="button"
                onClick={closeModal} 
                className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-white/5 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Contenitore testuale scrollabile */}
              <div className="overflow-y-auto pr-4 custom-scrollbar">
                
                {/* --- CONTENUTO PRIVACY POLICY --- */}
                {activeModal === 'privacy' && (
                  <div className="space-y-6 text-gray-700 dark:text-[#A0B3C6]">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h2>
                    <p className="text-xs font-bold text-[#00B8C9] uppercase tracking-wider mb-6">Ultimo aggiornamento: Febbraio 2026</p>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">1. Titolare del Trattamento</h3>
                      <p className="text-sm mt-1">Il Titolare del trattamento è Uply. Puoi contattarci in qualsiasi momento per domande sulla privacy.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">2. Dati Raccolti</h3>
                      <p className="text-sm mt-1">Essendo in fase di Beta Waitlist, raccogliamo esclusivamente il tuo indirizzo email. Non raccogliamo dati sensibili o numeri di telefono.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">3. Finalità</h3>
                      <p className="text-sm mt-1">L'indirizzo email viene utilizzato al solo scopo di inserirti nella lista d'attesa e notificarti l'apertura ufficiale della piattaforma. I tuoi dati non saranno venduti a terzi e non riceverai spam non richiesto.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">4. Conservazione e Diritti</h3>
                      <p className="text-sm mt-1">In base al GDPR, hai il diritto di richiedere l'accesso, la modifica o la cancellazione dei tuoi dati (Diritto all'oblio) in qualsiasi momento, contattandoci direttamente.</p>
                    </div>
                  </div>
                )}

                {/* --- CONTENUTO COOKIE POLICY --- */}
                {activeModal === 'cookie' && (
                  <div className="space-y-6 text-gray-700 dark:text-[#A0B3C6]">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Cookie Policy</h2>
                    <p className="text-xs font-bold text-[#00B8C9] uppercase tracking-wider mb-6">Ultimo aggiornamento: Febbraio 2026</p>
                    
                    <p className="text-sm leading-relaxed">
                      La presente Cookie Policy spiega come Uply utilizza i cookie sul proprio sito web. 
                      Attualmente, la nostra landing page utilizza <strong>esclusivamente cookie tecnici e strettamente necessari</strong> al fine di garantire il corretto funzionamento del sito e delle animazioni.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Non utilizziamo cookie di profilazione per tracciare il tuo comportamento a scopo pubblicitario e non vendiamo dati di navigazione a terze parti.
                    </p>
                  </div>
                )}

                {/* --- CONTENUTO TERMINI E CONDIZIONI --- */}
                {activeModal === 'termini' && (
                  <div className="space-y-6 text-gray-700 dark:text-[#A0B3C6]">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Termini e Condizioni</h2>
                    <p className="text-xs font-bold text-[#00B8C9] uppercase tracking-wider mb-6">Ultimo aggiornamento: Febbraio 2026</p>
                    
                    <p className="text-sm leading-relaxed">
                      Iscrivendoti alla lista d'attesa (Waitlist) di Uply, accetti di ricevere comunicazioni via email relative allo sviluppo, al lancio e alle novità della piattaforma.
                    </p>
                    <p className="text-sm leading-relaxed">
                      L'iscrizione alla lista d'attesa non garantisce l'accesso immediato alla piattaforma. L'accesso alla fase Beta verrà erogato a scaglioni a esclusiva discrezione del team di Uply per garantire la stabilità dei server e un'esperienza ottimale.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Uply si riserva il diritto di rimuovere dalla Waitlist gli indirizzi email invalidi, temporanei o sospettati di attività bot.
                    </p>
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