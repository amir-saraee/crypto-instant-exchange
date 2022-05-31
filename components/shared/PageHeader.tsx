import Link from 'next/link'
import { Container } from 'reactstrap'
import Navbar from './Navbar'
import Styles from './PageHeader.module.scss'

const Header = () => {
  return (
    <>
      <header className={Styles.header}>
        <Container className='h-100'>
          <div className='d-flex justify-content-between h-100'>
            <div className={Styles.logo}>
              <h1>
                <Link href='/'>لوگو</Link>
              </h1>
            </div>
            <Navbar />
          </div>
        </Container>
      </header>
      <header className={Styles.header_mobile}>
        <div className={Styles.menu_btn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  )
}

export default Header
