import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

// Import obbligatorio PRIMA del render
import i18n, { RTL_LANGS } from "./i18n";
import { I18nextProvider } from "react-i18next";

// Gestione RTL/LTR quando cambia lingua
i18n.on("languageChanged", (lng) => {
  const html = document.documentElement;

  if (RTL_LANGS.includes(lng)) {
    html.setAttribute("dir", "rtl");
    html.classList.add("rtl");
  } else {
    html.setAttribute("dir", "ltr");
    html.classList.remove("rtl");
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
