import { useEffect } from "react";
import i18n from "../i18n";

export function useMissingKeyLogger() {
  useEffect(() => {
    const handler = (lng: string, ns: string, key: string) => {
      console.warn(
        `%c[MISSING TRANSLATION]`,
        "color: red; font-weight: bold",
        `lang="${lng}" key="${key}"`
      );
    };

    i18n.on("missingKey", handler);
    return () => i18n.off("missingKey", handler);
  }, []);
}
