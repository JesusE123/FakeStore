import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import {CartProvider} from 'react-use-cart'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <main className={roboto.className}>
    <Component {...pageProps} />
      </main>
    </CartProvider>
  )
}
