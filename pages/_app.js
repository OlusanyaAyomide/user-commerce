import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AllContextProvider } from "@/store/Allcontext";

export default function App({ Component, pageProps }) {
  return (
    <AllContextProvider>
      <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </AllContextProvider>

  );
}
