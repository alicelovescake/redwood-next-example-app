import type { AppProps } from 'next/app'
import { NominationsProvider } from '../context/NominationsContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NominationsProvider>
      <Component {...pageProps} />
    </NominationsProvider>
  )
}

export default MyApp
