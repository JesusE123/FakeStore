import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import {CartProvider} from 'react-use-cart'
import { useState } from 'react'
import { Roboto } from '@next/font/google'
import Router from 'next/router'
import Loading from '@/components/Loading'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
const [loading, setLoading] = useState(false)
Router.events.on("routeChangeStart", (url) => {
  setLoading(true)
})

Router.events.on("routeChangeComplete" , (url) => {
  setLoading(false)
})
  return (
    
    <>
    {!loading ? (
    <CartProvider>
      <main className={roboto.className}>
    <Component {...pageProps} />
      </main>
    </CartProvider>
    ) : (<Loading />)
}
    </>
  )
}
