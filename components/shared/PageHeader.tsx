import Link from 'next/link'
import { useContext } from 'react'
import { Container } from 'reactstrap'
import MenuContext from '../../pages/store/menu-context'
import Navbar from './Navbar'
import NavigationMobile from './NavigationMobile'
import Classes from './PageHeader.module.scss'

const Header = () => {
  const { toggleMenu, menu } = useContext(MenuContext)

  return (
    <>
      <header className={Classes.header}>
        <Container className='h-100'>
          <div className='d-flex justify-content-between h-100'>
            <div className={Classes.logo}>
              <h1>
                <Link href='/'>لوگو</Link>
              </h1>
            </div>
            <Navbar />
          </div>
        </Container>
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
    </>
  )
}

export default Header
