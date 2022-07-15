import Link from 'next/link'
import { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import MenuContext from '../../store/menu-context'
import useViewport from '../../utils/hooks/useViewport'
import Navbar from '../shared/Navbar'
import NavigationMobile from '../shared/NavigationMobile'
import Exchange from './Exchange'
import ExchangeMobile from './ExchangeMobile'
import Classes from './ShowCase.module.scss'

function ShowCase() {
  const { toggleMenu, menu } = useContext(MenuContext)
  const { user, userIsLoggedIn } = useContext(AuthContext)
  const { width } = useViewport()

  return (
    <section className={Classes.section}>
      <header className={Classes.header}>
        <div className={Classes.logo}>
          <h1>
            <Link href='/'>لوگو</Link>
          </h1>
        </div>
        <Navbar user={user} userIsLoggedIn={userIsLoggedIn} />
      </header>
      <header className={Classes.header_mobile}>
        <div
          className={`${Classes.menu_btn} ${menu && Classes.active}`}
          onClick={() => toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <NavigationMobile active={(menu && 'active') || ''} />
        <div className={Classes.logo_mobile}>
          <h1>
            <Link href='/'>
              <a>لوگو</a>
            </Link>
          </h1>
        </div>
      </header>

      <div className={Classes.exchange_wrap}>
        <h2>صرافی ارز دیجیتال لایتنینگ</h2>
        {width < 992 ? <ExchangeMobile /> : <Exchange />}
      </div>
    </section>
  )
}

export default ShowCase
