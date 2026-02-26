import LandingPage from "./pages/LandingPage";
import { useMissingKeyLogger } from "@hooks/useMissingKeyLogger";

export default function App() {
  useMissingKeyLogger(); // attiva la console per chiavi mancanti
  return <LandingPage />;
}
