import Link from 'next/link'
import React, { useContext } from 'react'
import { Container } from 'reactstrap'
import AuthContext from '../../store/auth-context'
import MenuContext from '../../store/menu-context'
import Navbar from './Navbar'
import NavigationMobile from './NavigationMobile'
import Classes from './PageHeader.module.scss'

const Header: React.FC<{ hideBg?: boolean }> = ({ hideBg }) => {
  const { toggleMenu, menu } = useContext(MenuContext)
  const { user, userIsLoggedIn } = useContext(AuthContext)

  return (
    <>
      <header className={`${Classes.header} ${hideBg && Classes.no_bg}`}>
        <Container className='h-100'>
          <div className='d-flex justify-content-between h-100'>
            <div className={Classes.logo}>
              <h1>
                <Link href='/'>لوگو</Link>
              </h1>
            </div>
            <Navbar user={user} userIsLoggedIn={userIsLoggedIn} />
          </div>
        </Container>
      </header>
      <header className={`${Classes.header_mobile} ${hideBg && Classes.no_bg}`}>
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
    </>
  )
}

export default Header
