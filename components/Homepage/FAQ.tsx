import { Container, Col, Row, Card, CardHeader, CardBody } from 'reactstrap'
import {
  AiFillTwitterCircle,
  AiFillMediumCircle,
  AiFillInstagram,
  AiFillRedditCircle
} from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { FaBitcoin } from 'react-icons/fa'
import Styles from './FAQ.module.scss'

function FAQ() {
  return (
    <Container tag='section' className='section-container'>
      <div className='text-center mb-4'>
        <h2>سوالات متداول</h2>
      </div>

      <Row>
        <Col md={4}>
          <Card className={Styles.card}>
            <CardHeader className={Styles.head} tag='h4'>
              چگونه می توانم سفارش خود را پیگیری کنم؟
            </CardHeader>
            <CardBody className={Styles.body}>
              به سه روش: از طریق ایمیل (اگر آدرس ایمیل خود را بگذارید)، در وب
              سایت ما (در صورتی که مرورگر شما کوکی ها را بپذیرد) یا با مشاهده
              تراکنش های موجود در بلاک چین توسط پیوندهای سفارش شما.
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className={Styles.card}>
            <CardHeader className={Styles.head} tag='h4'>
              چرا می توانم به شما اعتماد کنم؟
            </CardHeader>
            <CardBody className={Styles.body}>
              <p>
                بدون ثبت نام و بدون نیاز به اشتراک گذاری مشخصات شخصی. ما وجوه
                شما را نگه نمی داریم، همه مبادلات فوراً در حالت کاملاً خودکار
                انجام می شود.
              </p>
              <div className={Styles.social}>
                <a href='' title='Twitter link'>
                  <AiFillTwitterCircle color='#1A8CD8' size={32} />
                </a>
                <a href='' title='Telegram link'>
                  <BsTelegram color='#36AEE2' size={28} />
                </a>
                <a href='' title='Medium link'>
                  <AiFillMediumCircle color='#000' size={32} />
                </a>
                <a href='' title='Instagram link'>
                  <AiFillInstagram color='#C13584' size={32} />
                </a>
                <a href='' title='Reddit link'>
                  <AiFillRedditCircle color='#FF4500' size={32} />
                </a>
                <a href='' title='Bitcoin link'>
                  <FaBitcoin color='#EF8E19' size={28} />
                </a>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className={Styles.card}>
            <CardHeader className={Styles.head} tag='h4'>
              آیا هزینه های پنهانی دارید؟
            </CardHeader>
            <CardBody className={Styles.body}>
              صداقت اولویت اصلی ما است، بنابراین ما متعهد به شفافیت کامل هستیم و
              همه هزینه ها را شفاف می کنیم: • 1% اگر نرخ ثابتی را انتخاب کنید
              •اگر نرخ شناور را انتخاب کنید 0.5٪
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default FAQ
