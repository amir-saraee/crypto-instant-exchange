import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Classes from './Navbar.module.scss'
import AuthModal from './AuthModal'
import useOnClickOutside from '../../utils/hooks/useOutsideAlerter'

const Navbar: React.FC<{ user: {}; userIsLoggedIn: boolean }> = ({
  user,
  userIsLoggedIn
}) => {
  const [modalIsOpen, setModalIspOpen] = useState(false)
  const [typeAuth, setTypeAuth] = useState('')
  const [showUserAccount, setShowUserAccount] = useState(false)
  const ref = useRef(null)

  const toggleModal = () => setModalIspOpen((prev) => !prev)

  const loginHandler = () => {
    setModalIspOpen(true)
    setTypeAuth('login')
  }

  const signUpHandler = () => {
    setModalIspOpen(true)
    setTypeAuth('signup')
  }

  useOnClickOutside(ref, () => {
    setShowUserAccount(false)
  })

  return (
    <nav className={Classes.nav}>
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
          <Link href='/terms'>شرایط استفاده از خدمات </Link>
        </li>
        <li>
          <Link href=''>پشتیبانی</Link>
        </li>
      </ul>
      <div className={Classes.separate}></div>
      {userIsLoggedIn ? (
        <div className={Classes.account}>
          <button
            type='button'
            onClick={() => setShowUserAccount((prevState) => !prevState)}
          >
            پروفایل
          </button>
          {showUserAccount && (
            <div ref={ref}>
              <ul>
                <li>
                  <Link href='/user/orders'>
                    <a>تاریخچه سفارشات</a>
                  </Link>
                </li>
                <li>
                  <Link href='/user/profile'>
                    <a>تنظیمات</a>
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <a>خروج</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button
            type='button'
            className={Classes.button}
            onClick={loginHandler}
          >
            ورود
          </button>
          <button
            type='button'
            className={Classes.button}
            onClick={signUpHandler}
          >
            ثبت نام
          </button>
        </div>
      )}
      <AuthModal open={modalIsOpen} type={typeAuth} toggle={toggleModal} />
    </nav>
  )
}

export default Navbar
