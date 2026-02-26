import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Fingerprint,
  Layers,
  Wallet,
  Zap,
  ShieldCheck,
  Rocket,
  ArrowRight,
  X,
  Users
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState("discover");

  const sections = [
    {
      id: "discover",
      title: t("about.discover.title", { defaultValue: "Discover" }),
      subtitle: t("about.discover.subtitle", { defaultValue: "Il cuore dell'esplorazione meritocratica." }),
      items: [
        { 
          id: "d1", icon: Fingerprint, 
          badge: t("about.discover.items.per_te.badge", { defaultValue: "AI Insight" }), 
          title: t("about.discover.items.per_te.title", { defaultValue: "Per Te" }), 
          desc: t("about.discover.items.per_te.desc", { defaultValue: "Il tuo specchio cognitivo. Ricevi opportunità e persone che espandono i tuoi confini, non solo i tuoi like." }), 
          extended: { 
            overview: t("about.discover.items.per_te.extended.overview", { defaultValue: "Dimentica i feed addomesticati. Il nostro algoritmo cerca la tua prossima sfida intellettuale basandosi sul tuo reale potenziale." }), 
            points: t("about.discover.items.per_te.extended.points", { returnObjects: true, defaultValue: ["Nessuna Filter Bubble", "Trasparenza algoritmica totale", "Connessioni basate sul valore reale"] }) 
          } 
        },
        { 
          id: "d2", icon: Layers, 
          badge: t("about.discover.items.media.badge", { defaultValue: "Knowledge" }), 
          title: t("about.discover.items.media.title", { defaultValue: "Media" }), 
          desc: t("about.discover.items.media.desc", { defaultValue: "L'archivio dell'eccellenza. Contenuti ad alto valore cognitivo, dai post ai documenti, verificati da Guardian AI." }), 
          extended: { 
            overview: t("about.discover.items.media.extended.overview", { defaultValue: "Ogni risorsa è analizzata per garantirne l'integrità e l'utilità nel tuo percorso di crescita continua." }), 
            points: t("about.discover.items.media.extended.points", { returnObjects: true, defaultValue: ["Zero Rumore", "Fonti verificate", "Learning Path integrati"] }) 
          } 
        },
        { 
          id: "d3", icon: Users, 
          badge: t("about.discover.items.eventi.badge", { defaultValue: "Live Action" }), 
          title: t("about.discover.items.eventi.title", { defaultValue: "Eventi & Live" }), 
          desc: t("about.discover.items.eventi.desc", { defaultValue: "Connessioni ad alta frequenza. Partecipa a esperienze live dove la teoria diventa pratica e incontra i mentor." }), 
          extended: { 
            overview: t("about.discover.items.eventi.extended.overview", { defaultValue: "Partecipa a talk, sfide e mini-forum. Ogni evento è un'occasione di networking verificata dall'AI." }), 
            points: t("about.discover.items.eventi.extended.points", { returnObjects: true, defaultValue: ["Networking mirato", "Accesso prioritario", "Validazione partecipazione"] }) 
          } 
        },
        { 
          id: "d4", icon: Rocket, 
          badge: t("about.discover.items.progetti.badge", { defaultValue: "Match AI" }), 
          title: t("about.discover.items.progetti.title", { defaultValue: "Progetti & Collaborazioni" }), 
          desc: t("about.discover.items.progetti.desc", { defaultValue: "Fabbrica di Futuro. Trova il partner ideale per scalare progetti che lasciano il segno." }), 
          extended: { 
            overview: t("about.discover.items.progetti.extended.overview", { defaultValue: "Match AI analizza le tue skill e ti connette con i partner ideali per costruire team ad alto impatto." }), 
            points: t("about.discover.items.progetti.extended.points", { returnObjects: true, defaultValue: ["Suggerimenti compatibilità", "Gestione team fluida", "Certificazione contributi"] }) 
          } 
        },
        { 
          id: "d5", icon: Wallet, 
          badge: t("about.discover.items.marketplace.badge", { defaultValue: "Economy" }), 
          title: t("about.discover.items.marketplace.title", { defaultValue: "Marketplace" }), 
          desc: t("about.discover.items.marketplace.desc", { defaultValue: "L'economia del merito. Scambia competenze e risorse nel primo mercato regolato dal valore reale." }), 
          extended: { 
            overview: t("about.discover.items.marketplace.extended.overview", { defaultValue: "Trasforma il tuo talento in Seeds. Un mercato etico dove la qualità e l'impatto battono il prezzo." }), 
            points: t("about.discover.items.marketplace.extended.points", { returnObjects: true, defaultValue: ["Payout istantanei in Seeds", "Partner etici certificati", "Servizi ad alto impatto"] }) 
          } 
        },
      ]
    },
    {
      id: "desk",
      title: t("about.desk.title", { defaultValue: "Desk" }),
      subtitle: t("about.desk.subtitle", { defaultValue: "Il tuo centro di comando meritocratico." }),
      items: [
        { 
          id: "impact", icon: Zap, 
          badge: t("about.desk.items.impact.badge", { defaultValue: "Live Metrics" }),
          title: t("about.desk.items.impact.title", { defaultValue: "Impact Index" }), 
          desc: t("about.desk.items.impact.desc", { defaultValue: "Non sei un numero di follower. Sei il risultato tangibile dell'impatto che generi." }),
          extended: { 
            overview: t("about.desk.items.impact.extended.overview", { defaultValue: "L'Impact Index misura la qualità e la costanza del tuo contributo reale nell'ecosistema." }), 
            points: t("about.desk.items.impact.extended.points", { returnObjects: true, defaultValue: ["Aggiornamento real-time", "Validazione etica AI", "Visibilità premium"] }) 
          }
        },
        { 
          id: "wallet", icon: Wallet, 
          badge: t("about.desk.items.wallet.badge", { defaultValue: "Verified" }),
          title: t("about.desk.items.wallet.title", { defaultValue: "Wallet Seeds" }), 
          desc: t("about.desk.items.wallet.desc", { defaultValue: "La moneta che premia chi crea. Gestisci i tuoi guadagni derivanti dalla tua reale contribuzione." }),
          extended: { 
            overview: t("about.desk.items.wallet.extended.overview", { defaultValue: "I Seeds sono l'unità di valore di UPLY, premiando l'azione e la conoscenza prodotta." }), 
            points: t("about.desk.items.wallet.extended.points", { returnObjects: true, defaultValue: ["Gestione sicura 2FA", "Conversione trasparente", "Storico immutabile"] }) 
          }
        },
      ]
    },
    {
      id: "ecosistema",
      title: t("about.eco.title", { defaultValue: "Ecosistema" }),
      subtitle: t("about.eco.subtitle", { defaultValue: "Fiducia invisibile, sicurezza totale." }),
      items: [
        { 
          id: "guardian", icon: ShieldCheck, 
          badge: t("about.eco.items.guardian.badge", { defaultValue: "Guardian AI" }),
          title: t("about.eco.items.guardian.title", { defaultValue: "Etica & Sicurezza" }), 
          desc: t("about.eco.items.guardian.desc", { defaultValue: "Il layer invisibile che protegge la tua identità e garantisce la meritocrazia del sistema." }),
          extended: { 
            overview: t("about.eco.items.guardian.extended.overview", { defaultValue: "Guardian AI monitora ogni interazione per prevenire manipolazioni e garantire equità assoluta." }), 
            points: t("about.eco.items.guardian.extended.points", { returnObjects: true, defaultValue: ["Protezione dati militare", "Audit anti-bias", "Privacy by design"] }) 
          }
        },
        { 
          id: "mentor", icon: Rocket, 
          badge: t("about.eco.items.mentor.badge", { defaultValue: "Co-Pilot" }),
          title: t("about.eco.items.mentor.title", { defaultValue: "Mentor AI" }), 
          desc: t("about.eco.items.mentor.desc", { defaultValue: "La tua guida verso l'evoluzione cognitiva. Suggerimenti mirati per accelerare la tua crescita." }),
          extended: { 
            overview: t("about.eco.items.mentor.extended.overview", { defaultValue: "Il Mentor AI analizza le tue potenzialità e ti propone la risorsa perfetta nel momento esatto del bisogno." }), 
            points: t("about.eco.items.mentor.extended.points", { returnObjects: true, defaultValue: ["Learning path adattivi", "Feedback post-progetto", "Analisi della crescita"] }) 
          }
        },
      ]
    }
  ];

  const currentSection = sections.find(s => s.id === activeTab);

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-transparent transition-colors duration-700">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-gray-900 via-[#0092A0] to-[#00D5E9] dark:from-white dark:via-[#00D5E9] dark:to-[#00B8C9] text-transparent bg-clip-text mb-6">
          {t("about.title", { defaultValue: "Oltre la visibilità. Il tuo valore, finalmente misurabile." })}
        </h2>
        <p className="text-gray-600 dark:text-[#A0B3C6] text-lg max-w-3xl mx-auto font-medium">
          {currentSection?.subtitle}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        
        {/* ===================== TAB BUTTONS CORRETTI ===================== */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {sections.map((s) => {
            const isActive = activeTab === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`relative isolate px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300 overflow-hidden
                  ${isActive 
                    ? "text-white shadow-md shadow-[#00B8C9]/20" 
                    : "text-gray-600 dark:text-[#A0B3C6] hover:text-[#0092A0] dark:hover:text-[#00D5E9] bg-gray-100/50 dark:bg-white/5"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="tabActiveIndicator"
                    className="absolute inset-0 bg-[#0092A0] dark:bg-[#00B8C9] rounded-full z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{s.title}</span>
              </button>
            );
          })}
        </div>

        {/* CONTENITORE CARD */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="flex flex-wrap justify-center gap-6 w-full text-left transition-all duration-300"
            >
              {currentSection?.items.map((item: any) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelected(item)}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333333%-16px)] flex flex-col min-h-[350px] group relative p-6 lg:p-8 rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121A2F]/60 backdrop-blur-xl cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <span className="absolute top-6 right-6 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0092A0] dark:text-[#00B8C9] bg-[#00B8C9]/10 rounded-full border border-[#00B8C9]/20">
                    {item.badge}
                  </span>

                  <div className="p-3 w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl mb-5 group-hover:bg-[#00B8C9] group-hover:text-white transition-colors duration-500 flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#00B8C9] transition-colors">{item.title}</h3>
                  
                  <p className="text-gray-500 dark:text-[#A0B3C6] leading-relaxed mb-4 grow text-sm lg:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-auto flex items-center text-sm font-bold text-[#0092A0] dark:text-[#00D5E9] opacity-0 group-hover:opacity-100 transition-opacity">
                    {t("about.explore", { defaultValue: "Esplora i dettagli" })} <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modale Dettagli */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/80 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white dark:bg-[#0B0F19] border border-gray-200 dark:border-white/10 p-10 rounded-[40px] max-w-2xl w-full relative shadow-2xl"
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
            >
              <button onClick={() => setSelected(null)} className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[#00B8C9]/10 rounded-2xl text-[#00B8C9]"><selected.icon className="w-10 h-10" /></div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white">{selected.title}</h4>
                  <p className="text-[#0092A0] font-semibold">{selected.badge}</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-[#A0B3C6] leading-relaxed mb-8">{selected.extended.overview}</p>

              <div className="space-y-4 bg-gray-50 dark:bg-white/5 p-6 rounded-3xl border border-gray-100 dark:border-white/5">
                <h5 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 uppercase text-xs tracking-widest">
                  <Zap className="w-4 h-4 text-[#00B8C9]" /> {t("about.popup.key_points", { defaultValue: "Pilastri del Merito" })}
                </h5>
                {(Array.isArray(selected.extended.points) ? selected.extended.points : []).map((pt: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600 dark:text-[#E8F1F5] text-sm md:text-base">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B8C9]" />
                    {pt}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}