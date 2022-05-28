import { Col, Container, Row } from 'reactstrap'
import {
  AiFillTwitterCircle,
  AiFillMediumCircle,
  AiFillInstagram,
  AiFillRedditCircle
} from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { FaBitcoin } from 'react-icons/fa'
import Styles from './Footer.module.scss'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={Styles.footer}>
      <Container className='section-container'>
        <Row>
          <Col md={4}>
            <div className={Styles.info}>
              <h2>لوگو</h2>
              <div className={Styles.social}>
                <a href='' title='Twitter link'>
                  <AiFillTwitterCircle size={32} />
                </a>
                <a href='' title='Telegram link'>
                  <BsTelegram size={28} />
                </a>
                <a href='' title='Medium link'>
                  <AiFillMediumCircle size={32} />
                </a>
                <a href='' title='Instagram link'>
                  <AiFillInstagram size={32} />
                </a>
                <a href='' title='Reddit link'>
                  <AiFillRedditCircle size={32} />
                </a>
                <a href='' title='Bitcoin link'>
                  <FaBitcoin size={28} />
                </a>
              </div>
              <p>© 2018–2022 FixedFloat. تمامی حقوق محفوظ است.</p>
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={4}>
                <div className={Styles.menu}>
                  <h4>لینک ها</h4>
                  <ul>
                    <li>
                      <Link href=''>درباره ما</Link>
                    </li>
                    <li>
                      <Link href=''>برند</Link>
                    </li>
                    <li>
                      <Link href=''>برنامه های وابسته</Link>
                    </li>
                    <li>
                      <Link href=''>شرایط استفاده</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div className={Styles.menu}>
                  <h4>لینک ها</h4>
                  <ul>
                    <li>
                      <Link href=''>وبلاگ</Link>
                    </li>
                    <li>
                      <Link href=''>سوالات متداول</Link>
                    </li>
                    <li>
                      <Link href=''>پشتیبانی</Link>
                    </li>
                    <li>
                      <Link href=''>شرایط استفاده</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={4}>
                <div className={Styles.menu}>
                  <h4>لینک ها</h4>
                  <ul>
                    <li>
                      <Link href=''>درباره ما</Link>
                    </li>
                    <li>
                      <Link href=''>برند</Link>
                    </li>
                    <li>
                      <Link href=''>برنامه های وابسته</Link>
                    </li>
                    <li>
                      <Link href=''>شرایط استفاده</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
