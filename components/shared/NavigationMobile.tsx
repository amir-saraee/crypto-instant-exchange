import React, { useRef, useState } from 'react'
import Link from 'next/link'
import AuthModal from './AuthModal'
import Classes from './NavigationMobile.module.scss'
import useOnClickOutside from '../../utils/hooks/useOutsideAlerter'

const NavigationMobile: React.FC<{ active: string }> = (props) => {
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
    <nav className={`${Classes.nav} ${props.active && Classes.active}`}>
      <div>
        <ul>
          <li className={Classes.head}>
            <span>حساب کاربری</span>
          </li>
          <li>
            <span onClick={loginHandler}>ورود</span>
          </li>
          <li>
            <span onClick={signUpHandler}>ثبت نام</span>
          </li>
          <li className={Classes.head}>
            <span>FixedFloat</span>
          </li>
          <li>
            <Link href='/about'>
              <a>درباره ما</a>
            </Link>
          </li>
          <li>
            <Link href='/faq'>
              <a>سوالات متداول</a>
            </Link>
          </li>
          <li>
            <Link href='/terms'>
              <a>شرایط استفاده</a>
            </Link>
          </li>
        </ul>
      </div>
      <AuthModal open={modalIsOpen} type={typeAuth} toggle={toggleModal} />
    </nav>
  )
}

export default NavigationMobile
