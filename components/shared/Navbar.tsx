import { useState } from 'react'
import Link from 'next/link'
import { Modal } from 'reactstrap'
import styles from './Navbar.module.scss'
import AuthModal from './AuthModal'

function Navbar() {
  const [modalIsOpen, setModalIspOpen] = useState(false)
  const [typeAuth, setTypeAuth] = useState('')

  const toggleModal = () => setModalIspOpen((prev) => !prev)

  const loginHandler = () => {
    setModalIspOpen(true)
    setTypeAuth('login')
  }

  const signUpHandler = () => {
    setModalIspOpen(true)
    setTypeAuth('signup')
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/about'>درباره ما</Link>
        </li>
        <li>
          <Link href='/blog'>وبلاگ</Link>
        </li>
        <li>
          <Link href='/faq'>سوالات متداول</Link>
        </li>
        <li>
          <Link href=''>API</Link>
        </li>
        <li>
          <Link href=''>پشتیبانی</Link>
        </li>
      </ul>
      <div className={styles.separate}></div>
      <div>
        <button type='button' className={styles.button} onClick={loginHandler}>
          ورود
        </button>
        <button type='button' className={styles.button} onClick={signUpHandler}>
          ثبت نام
        </button>
      </div>

      <AuthModal open={modalIsOpen} type={typeAuth} toggle={toggleModal} />
    </nav>
  )
}

export default Navbar
