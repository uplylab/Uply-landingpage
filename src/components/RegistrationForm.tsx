import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function RegistrationForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // Il tuo URL ufficiale di Google Apps Script
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxmVYH92Dvsz1DBRA9QC2d5i2LUireNQzzH5WldGjJw6lp-3rkZzteCkqlPo5WCAyMA_w/exec";

      // Usiamo mode: 'no-cors' per evitare che il browser blocchi la chiamata verso Google
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ email: email }),
      });

      // Dato che usiamo 'no-cors', assumiamo il successo se non ci sono errori di rete
      setStatus("success");
      setEmail("");
      
      // Torna allo stato normale dopo 5 secondi
      setTimeout(() => setStatus("idle"), 5000);
      
    } catch (error) {
      console.error("Errore durante l'invio alla waitlist:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mt-8">
      <div className="relative flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("beta.email_placeholder", { defaultValue: "Inserisci la tua migliore email" })}
          disabled={status === "loading" || status === "success"}
          required
          className="w-full px-6 py-4 rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-[#121A2F]/80 backdrop-blur-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#00B8C9] shadow-lg disabled:opacity-60 transition-all"
        />
      </div>
      
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className={`px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap
          ${status === "success" 
            ? "bg-green-500 text-white" 
            : status === "error"
            ? "bg-red-500 text-white"
            : "bg-[#0092A0] hover:bg-[#00B8C9] dark:bg-[#00B8C9] dark:hover:bg-[#00D5E9] text-white shadow-xl hover:shadow-[#00B8C9]/20 disabled:opacity-70 disabled:cursor-not-allowed"
          }
        `}
      >
        {status === "idle" && <>{t("beta.submit", { defaultValue: "Avvisami al lancio" })} <ArrowRight className="w-5 h-5" /></>}
        {status === "loading" && <><Loader2 className="w-5 h-5 animate-spin" /> Registrazione...</>}
        {status === "success" && <><CheckCircle className="w-5 h-5" /> Aggiunto!</>}
        {status === "error" && <><AlertCircle className="w-5 h-5" /> Errore</>}
      </button>
    </form>
  );
}