import { Container, Col, Row, Card, CardHeader, CardBody } from 'reactstrap'
import {
  AiFillTwitterCircle,
  AiFillMediumCircle,
  AiFillInstagram,
  AiFillRedditCircle
} from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { FaBitcoin } from 'react-icons/fa'
import { HiArrowLeft } from 'react-icons/hi'
import Classes from './FAQ.module.scss'
import Link from 'next/link'
import FAQCard from './FAQCard'

function FAQ() {
  return (
    <Container tag='section' className='section-container'>
      <div className='text-center mb-4'>
        <h2>سوالات متداول</h2>
      </div>

      <Row>
        <Col md={4}>
          <FAQCard
            title='چگونه می توانم سفارش خود را پیگیری کنم؟'
            description='به سه روش: از طریق ایمیل (اگر آدرس ایمیل خود را بگذارید)، در وب
              سایت ما (در صورتی که مرورگر شما کوکی ها را بپذیرد) یا با مشاهده
              تراکنش های موجود در بلاک چین توسط پیوندهای سفارش شما.'
          />
        </Col>
        <Col md={4}>
          <FAQCard
            title='چرا می توانم به شما اعتماد کنم؟'
            description='بدون ثبت نام و بدون نیاز به اشتراک گذاری مشخصات شخصی. ما وجوه
            شما را نگه نمی داریم، همه مبادلات فوراً در حالت کاملاً خودکار
            انجام می شود.'
            social
          />
        </Col>
        <Col md={4}>
          <FAQCard
            title='آیا هزینه های پنهانی دارید؟'
            description='صداقت اولویت اصلی ما است، بنابراین ما متعهد به شفافیت کامل هستیم و
            همه هزینه ها را شفاف می کنیم: • 1% اگر نرخ ثابتی را انتخاب کنید
            •اگر نرخ شناور را انتخاب کنید 0.5٪'
          />
        </Col>
      </Row>
      <div className='d-flex justify-content-end'>
        <Link href=''>
          <a className={Classes.page_link}>
            رفتن به صفحه سوالات متداول <HiArrowLeft />
          </a>
        </Link>
      </div>
    </Container>
  )
}

export default FAQ
