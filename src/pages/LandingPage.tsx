import Navbar from "@components/Navbar";
import RegistrationForm from "@components/RegistrationForm";
import StatsSection from "@components/StatsSection";
import AboutSection from "@components/AboutSection";
import PricingSection from "@components/PricingSection";
import ContactsSection from "@components/ContactsSection";
import CookieBanner from "@components/CookieBanner";
import Footer from "@components/Footer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import miaImmagine from './dashboard-mockup.jpg';

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <main
      id="home"
      className="relative min-h-screen flex flex-col items-center text-center px-6 bg-[#F8FAFC] dark:bg-[#0B0F19] text-gray-900 dark:text-white overflow-hidden transition-colors duration-700"
    >
      {/* ===================== BACKGROUND ANIMATO VIVO ===================== */}
      <div className="absolute top-0 left-0 w-full h-[120vh] overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#00B8C9] rounded-full blur-[100px] opacity-40 dark:opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -80, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#00D5E9] rounded-full blur-[90px] opacity-30 dark:opacity-20"
        />
      </div>

      <Navbar />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full max-w-6xl mx-auto flex flex-col justify-center items-center pt-32 pb-10 z-10">
        
        {/* Badge 'Beta in arrivo' */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 px-5 py-1.5 rounded-full border border-[#00B8C9]/20 dark:border-[#00B8C9]/30 bg-[#00B8C9]/5 dark:bg-[#00B8C9]/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,184,201,0.1)] dark:shadow-[0_0_15px_rgba(0,184,201,0.2)]"
        >
          <span className="text-xs md:text-sm font-bold text-[#0092A0] dark:text-[#00D5E9] tracking-wider uppercase">
            🚀 Accesso Beta in arrivo
          </span>
        </motion.div>

        {/* Titolo Principale */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight 
          bg-gradient-to-br from-gray-900 via-gray-700 to-[#0092A0] dark:from-white dark:via-[#E2F8FF] dark:to-[#00B8C9] text-transparent bg-clip-text mb-6 max-w-4xl"
        >
          {t("hero.title", {
            defaultValue: "Il mondo guarda chi appare. UPLY premia chi realizza."
          })}
        </motion.h1>

        {/* Sottotitolo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 dark:text-[#A0B3C6] max-w-2xl mb-16 font-medium"
        >
          {t("hero.subtitle", {
            defaultValue: "Unisciti alla prima piattaforma meritocratica che trasforma risultati reali in opportunità."
          })}
        </motion.p>

        {/* ===================== NUOVA SEZIONE: ECOSISTEMA UPLY (CARDS) ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mb-24 px-4">
          
          {/* Card 1: Meritocrazia */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-lg text-left transition-all shadow-sm hover:shadow-xl hover:border-[#00B8C9]/30"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#00B8C9]/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#00B8C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Meritocrazia Reale</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Basta contenuti vuoti. Su Uply la <strong>competenza è l’unica valuta</strong>. Un ecosistema dove ogni interazione premia il valore reale che porti nella community.
            </p>
          </motion.div>

          {/* Card 2: Knowledge */}
          {/* Card 2: Knowledge (TESTO AGGIORNATO) */}
  <motion.div
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-lg transition-all shadow-sm hover:shadow-xl hover:border-[#00B8C9]/30"
  >
    <div className="w-12 h-12 rounded-2xl bg-[#00B8C9]/10 flex items-center justify-center mb-6">
      <svg className="w-6 h-6 text-[#00B8C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    </div>
    <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Hub della Conoscenza</h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
      Dalle dispense universitarie alle videolezioni e podcast di alta qualità. Uno spazio dove l'informazione <strong>non è intrattenimento passeggero</strong>, ma un pilastro fondamentale per la tua crescita professionale.
    </p>
  </motion.div>

          {/* Card 3: Business */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-lg text-left transition-all shadow-sm hover:shadow-xl hover:border-[#00B8C9]/30"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#00B8C9]/10 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#00B8C9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Startup & Career</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Connettiti con <strong>investitori e aziende</strong>. Su Uply non mostri come passi il tempo: mostri quanto vali per sbloccare la tua prossima opportunità.
            </p>
          </motion.div>

        </div>

        {/* ================= WAITLIST FORM & TESTO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl relative z-30 mb-20"
        >
          <div className="mb-6 bg-white/50 dark:bg-[#121A2F]/50 p-6 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-sm">
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Pronto a mostrare il tuo valore?
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-[#A0B3C6] mb-8">
              Unisciti alla lista d'attesa per ricevere l'accesso esclusivo alla Beta appena sarà pronta.
            </p>
            <RegistrationForm />
          </div>
        </motion.div>

        {/* ===================== IL "MOCKUP" DEL PRODOTTO ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 150, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          style={{ perspective: "2000px" }}
          className="w-full max-w-5xl relative z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/60 dark:from-[#0B0F19] dark:via-[#0B0F19]/60 to-transparent z-20 pointer-events-none h-full w-full bottom-0"></div>
          
          <div className="w-full h-[350px] md:h-[600px] rounded-t-3xl border border-gray-200 dark:border-[#00B8C9]/30 bg-white/70 dark:bg-[#121A2F]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col relative">
            <div className="h-12 border-b border-gray-200 dark:border-[#00B8C9]/10 flex items-center px-6 gap-2 bg-gray-50/60 dark:bg-[#0B0F19]/60 z-30 relative">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 px-3 py-1 rounded-md bg-gray-200/50 dark:bg-white/5 text-[10px] text-gray-500 dark:text-white/40 font-mono">
                uply.com/discover
              </div>
            </div>

            <div className="flex-1 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0B0F19]">
              <img 
                src={miaImmagine}
                alt="UPLY Discover Dashboard UI" 
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F8FAFC] dark:from-[#121A2F]/80 to-transparent pointer-events-none z-20"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===================== ALTRE SEZIONI ===================== */}
      <div className="w-full space-y-20 pb-20">
        <StatsSection />
        <AboutSection />
        <PricingSection />
        <ContactsSection />
      </div>

      <CookieBanner />
      <Footer />
    </main>
  );
}