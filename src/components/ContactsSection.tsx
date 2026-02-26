import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactsSection() {
  const { t } = useTranslation();

  return (
    <section id="contacts" className="py-24 px-6 relative overflow-hidden bg-transparent transition-colors duration-700">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-r from-gray-900 via-[#0092A0] to-[#00D5E9] dark:from-white dark:via-[#00D5E9] dark:to-[#00B8C9] text-transparent bg-clip-text mb-6">
          {t("contacts.title", { defaultValue: "Contattaci" })}
        </h2>
        <p className="text-gray-600 dark:text-[#A0B3C6] text-lg max-w-2xl mx-auto font-medium">
          {t("contacts.subtitle", { defaultValue: "Hai domande, idee o vuoi collaborare con UPLY? Il nostro team risponde sempre." })}
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-[32px] border border-gray-200 dark:border-white/10 bg-white dark:bg-[#121A2F]/60 backdrop-blur-xl shadow-xl"
        >
          {/* LA MAGIA È QUI: Usiamo action e method nativi */}
          <form 
            action="https://formsubmit.co/uply.lab@gmail.com" 
            method="POST" 
            className="flex flex-col gap-6"
          >
            {/* Disattiviamo il Captcha fastidioso */}
            <input type="hidden" name="_captcha" value="false" />
            
            {/* Oggetto personalizzato della mail che riceverai */}
            <input type="hidden" name="_subject" value="Nuovo messaggio da UPLY Landing Page!" />

            <div className="grid md:grid-cols-2 gap-6">
              {/* Campo NOME */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-900 dark:text-white">
                  {t("contacts.fields.name.label", { defaultValue: "Nome" })}
                </label>
                <input
                  type="text"
                  id="name"
                  name="Nome"
                  required
                  placeholder={t("contacts.fields.name.placeholder", { defaultValue: "Il tuo nome" })}
                  className="px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00B8C9]/50 transition-all"
                />
              </div>

              {/* Campo EMAIL */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-900 dark:text-white">
                  {t("contacts.fields.email.label", { defaultValue: "Email" })}
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  required
                  placeholder={t("contacts.fields.email.placeholder", { defaultValue: "La tua email" })}
                  className="px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00B8C9]/50 transition-all"
                />
              </div>
            </div>

            {/* Campo MESSAGGIO */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-gray-900 dark:text-white">
                {t("contacts.fields.message.label", { defaultValue: "Messaggio" })}
              </label>
              <textarea
                id="message"
                name="Messaggio"
                required
                rows={5}
                placeholder={t("contacts.fields.message.placeholder", { defaultValue: "Scrivi qui il tuo messaggio..." })}
                className="px-5 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00B8C9]/50 transition-all resize-none"
              ></textarea>
            </div>

            {/* Bottone Submit */}
            <button
              type="submit"
              className="mt-4 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 bg-[#0092A0] hover:bg-[#00B8C9] dark:bg-[#00B8C9] dark:hover:bg-[#00D5E9] text-white shadow-lg"
            >
              <Send className="w-5 h-5" /> {t("contacts.send", { defaultValue: "Invia Messaggio" })}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}