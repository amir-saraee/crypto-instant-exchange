import { FormEvent, useEffect, useState } from 'react'
import {
  Modal,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form
} from 'reactstrap'

import Styles from './AuthModal.module.scss'
import Login from './Login'
import Register from './Register'

type ModalType = {
  open: boolean
  type: string
  toggle: () => void
}

const AuthModal: React.FC<ModalType> = ({ open, type, toggle }) => {
  const [activeTab, setActiveTab] = useState('1')

  useEffect(() => {
    setActiveTab((type === 'login' && '1') || (type === 'signup' && '2') || '1')
  }, [type])

  return (
    <>
      <Modal isOpen={open} centered toggle={toggle}>
        <div className={Styles.modal}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={activeTab === '1' ? Styles.active : ''}
                onClick={() => setActiveTab('1')}
              >
                ورود
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === '2' ? Styles.active : ''}
                onClick={() => setActiveTab('2')}
              >
                ثبت نام
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId='1'>
              <Login setActiveTab={setActiveTab} />
            </TabPane>
            <TabPane tabId='2'>
              <Register />
            </TabPane>
            <TabPane tabId='3'>
              <Form className={Styles.auth_form}>
                <h4>فراموشی کلمه عبور</h4>
                <div className={Styles.inputs}>
                  <div>
                    <input type='email' placeholder='ایمیل' />
                  </div>
                </div>

                <button type='submit' className={Styles.button}>
                  بازیابی کلمه عبور
                </button>
                <div
                  className={Styles.forget_return_link}
                  onClick={() => setActiveTab('1')}
                >
                  <span>بازگشت به ورود</span>
                </div>
              </Form>
            </TabPane>
          </TabContent>
        </div>
      </Modal>
    </>
  )
}

export default AuthModal
