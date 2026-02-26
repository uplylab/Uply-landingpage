import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function PricingSection() {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("pricing.plans.1.name", { defaultValue: "Free — Per iniziare" }),
      price: t("pricing.plans.1.price", { defaultValue: "Gratis" }),
      features: [
        t("pricing.plans.1.features.1", {
          defaultValue: "Profilo personale e aziendale gratuito",
        }),
        t("pricing.plans.1.features.2", {
          defaultValue: "Accesso completo a Discover e Marketplace",
        }),
        t("pricing.plans.1.features.3", {
          defaultValue: "Chat, collaborazioni e Seeds base (fino a 50/mese)",
        }),
        t("pricing.plans.1.features.4", {
          defaultValue: "Analisi AI limitate",
        }),
        t("pricing.plans.1.features.5", {
          defaultValue: "Eventi e sfide community",
        }),
      ],
    },
    {
      name: t("pricing.plans.2.name", {
        defaultValue: "Business — Per crescere e monetizzare",
      }),
      price: t("pricing.plans.2.price", { defaultValue: "€19,90/mese" }),
      features: [
        t("pricing.plans.2.features.1", { defaultValue: "Tutto del piano Free" }),
        t("pricing.plans.2.features.2", { defaultValue: "+20 Seeds mensili gratuiti" }),
        t("pricing.plans.2.features.3", { defaultValue: "Commissioni ridotte al 5%" }),
        t("pricing.plans.2.features.4", { defaultValue: "Crediti AI illimitati" }),
        t("pricing.plans.2.features.5", {
          defaultValue: "Report avanzati su impatto e reputazione",
        }),
        t("pricing.plans.2.features.6", {
          defaultValue: "Zero fee su eventi a pagamento",
        }),
        t("pricing.plans.2.features.7", {
          defaultValue: "Supporto prioritario e badge Business Verified",
        }),
      ],
      highlight: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-transparent text-uply-text-primaryDark dark:text-white transition-colors duration-700"
    >
      {/* Titolo + Sottotitolo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2
          className="text-3xl md:text-4xl font-extrabold 
          bg-gradient-to-r from-[#00B8C9] to-[#00D5E9] text-transparent bg-clip-text"
        >
          {t("pricing.title", { defaultValue: "Abbonamenti UPLY" })}
        </h2>

        <p className="mt-4 text-uply-text-secondaryDark dark:text-[#E8F1F5] text-lg max-w-2xl mx-auto">
          {t("pricing.subtitle", {
            defaultValue:
              "Scegli il piano più adatto al tuo percorso e accedi a tutti gli strumenti per crescere nel network meritocratico di UPLY.",
          })}
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
              transition: { duration: 0.25 },
            }}
            className={`relative glass p-10 rounded-3xl border border-uply-border-dark shadow-uply
              overflow-hidden transition-all duration-500 flex flex-col justify-between cursor-pointer
              ${
                plan.highlight
                  ? "ring-2 ring-uply-accent/50 shadow-[0_0_25px_rgba(0,184,201,0.25)]"
                  : ""
              }
            `}
          >
            {/* Glow premium */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00B8C9]/12 to-transparent opacity-0 hover:opacity-100 transition duration-500" />

            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>

              <p
                className="text-3xl font-extrabold mb-6"
                style={{ color: "#00B8C9" }}
              >
                {plan.price}
              </p>

              <ul className="text-sm text-uply-text-secondaryDark dark:text-[#E8F1F5] space-y-2">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-uply-accent dark:text-white mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}