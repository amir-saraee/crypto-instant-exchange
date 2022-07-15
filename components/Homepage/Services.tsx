import { Container, Col, Row } from 'reactstrap'
import SaveTimeImg from '../../public/assets/images/save-time.png'
import SaveMoneyImg from '../../public/assets/images/save-money.png'
import MakeExchangeImg from '../../public/assets/images/make-an-exchange.png'
import ServicesCard from './ServicesCard'

function Services() {
  return (
    <Container className='section-container' tag='section'>
      <Row>
        <Col md={4}>
          <ServicesCard
            title='صرفه جویی در زمان'
            image={SaveTimeImg}
            alt='save-time'
            description='حداکثر سرعت تبادل به دلیل اتوماسیون کامل'
          />
        </Col>
        <Col md={4}>
          <ServicesCard
            title='صرفه جویی در هزینه'
            image={SaveMoneyImg}
            alt='save-money'
            description='بهترین نرخ ارز و حداقل کمیسیون'
            second={true}
          />
        </Col>
        <Col md={4}>
          <ServicesCard
            title='تبادل کنید'
            image={MakeExchangeImg}
            alt='make-an-exchange'
            description='استراتژی مناسب را انتخاب کنید و معاملات مطلوب انجام دهید'
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Services
