import type { AppProps } from 'next/app'
import { MenuContextProvider } from './store/menu-context'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/svg.scss'
import '../styles/globals.scss'
import { AuthContextProvider } from './store/auth-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <MenuContextProvider>
        <Component {...pageProps} />
      </MenuContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
