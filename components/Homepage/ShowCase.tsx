import Link from 'next/link'
import { useContext } from 'react'
import MenuContext from '../../pages/store/menu-context'
import Navbar from '../shared/Navbar'
import NavigationMobile from '../shared/NavigationMobile'
import Classes from './ShowCase.module.scss'

function ShowCase() {
  const { toggleMenu, menu } = useContext(MenuContext)

  return (
    <section className={Classes.section}>
      <header className={Classes.header}>
        <div className={Classes.logo}>
          <h1>
            <Link href='/'>لوگو</Link>
          </h1>
        </div>
        <Navbar />
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
    </section>
  )
}

export default ShowCase
