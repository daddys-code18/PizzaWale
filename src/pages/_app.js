import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
