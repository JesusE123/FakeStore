import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { CartProvider } from "react-use-cart";
import { useState, useContext, useEffect } from "react";
import { Roboto } from "@next/font/google";
import Router from "next/router";
import Loading from "@/components/Loading";
import { CategoryProvider } from "@/context/categoryContext";
import { SearchProvider } from "@/context/searchContext";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    Router.events.on("routeChangeStart", (url) => {
      setLoading(true);
    });
  
    Router.events.on("routeChangeComplete", (url) => {
      setLoading(false);
    });
  },[Router])
  return (
    <>
      <SearchProvider>
        <CategoryProvider>
          <CartProvider>
            {loading && <Loading />}
            <main className={roboto.className}>
              <Component {...pageProps} />
            </main>
          </CartProvider>
        </CategoryProvider>
      </SearchProvider>
    </>
  );
}
