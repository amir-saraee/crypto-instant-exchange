import Image from 'next/image'
import { Container, Col, Row } from 'reactstrap'
import Styles from './Services.module.scss'
import SaveTimeImg from '../../public/assets/images/save-time.png'
import SaveMoneyImg from '../../public/assets/images/save-money.png'
import MakeExchangeImg from '../../public/assets/images/make-an-exchange.png'

function Services() {
  return (
    <Container className='section-container' tag='section'>
      <Row>
        <Col md={4}>
          <div className={Styles.card}>
            <h3>صرفه جویی در زمان</h3>
            <Image src={SaveTimeImg} alt='save-time' />
            <p>حداکثر سرعت تبادل به دلیل اتوماسیون کامل</p>
          </div>
        </Col>
        <Col md={4}>
          <div className={Styles.card}>
            <h3>صرفه جویی در هزینه</h3>
            <Image src={SaveMoneyImg} alt='save-money' />
            <p>بهترین نرخ ارز و حداقل کمیسیون</p>
          </div>
        </Col>
        <Col md={4}>
          <div className={Styles.card}>
            <h3>تبادل کنید</h3>
            <Image src={MakeExchangeImg} alt='make-an-exchange' />
            <p>استراتژی مناسب را انتخاب کنید و معاملات مطلوب انجام دهید</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
