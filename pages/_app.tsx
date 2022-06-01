import type { AppProps } from 'next/app'
import { MenuContextProvider } from './store/menu-context'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/svg.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />
    </MenuContextProvider>
  )
}

export default MyApp
