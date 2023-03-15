import '../styles/globals.css'
import "../styles/login.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"
import "font-awesome/css/font-awesome.min.css"

import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
