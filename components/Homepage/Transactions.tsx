import { Container, Col, Row } from 'reactstrap'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import Styles from './Transactions.module.scss'

function Transactions() {
  const transactions = [
    {
      id: '1',
      date: '4 دقیقه قبل',
      time: '16 ثانیه',
      from: {
        currency: 'LTC',
        amount: 1.51511,
        icon: 'ltc'
      },
      to: {
        currency: 'USDT',
        icon: 'usdttrc'
      }
    },
    {
      id: '2',
      date: '5 دقیقه قبل',
      time: '16 ثانیه',
      from: {
        currency: 'BTC',
        amount: 1.51511,
        icon: 'btc'
      },
      to: {
        currency: 'USDT',
        icon: 'eth'
      }
    },
    {
      id: '3',
      date: '6 دقیقه قبل',
      time: '16 ثانیه',
      from: {
        currency: 'BNB',
        amount: 1.51511,
        icon: 'bnb'
      },
      to: {
        currency: 'USDT',
        icon: 'usdttrc'
      }
    },
    {
      id: '3',
      date: '7 دقیقه قبل',
      time: '20 ثانیه',
      from: {
        currency: 'TRON',
        amount: 1.51511,
        icon: 'trx'
      },
      to: {
        currency: 'BTC',
        icon: 'btc'
      }
    },
    {
      id: '1',
      date: '8 دقیقه قبل',
      time: '16 ثانیه',
      from: {
        currency: 'LTC',
        amount: 1.51511,
        icon: 'ltc'
      },
      to: {
        currency: 'USDT',
        icon: 'usdttrc'
      }
    },
    {
      id: '2',
      date: '9 دقیقه قبل',
      time: '16 ثانیه',
      from: {
        currency: 'BTC',
        amount: 1.51511,
        icon: 'btc'
      },
      to: {
        currency: 'USDT',
        icon: 'eth'
      }
    },
    {
      id: '3',
      date: '10 دقیقه قبل',
      time: '16 ثانیه',
      from: {
        currency: 'BNB',
        amount: 1.51511,
        icon: 'bnb'
      },
      to: {
        currency: 'USDT',
        icon: 'usdttrc'
      }
    },
    {
      id: '3',
      date: '15 دقیقه قبل',
      time: '20 ثانیه',
      from: {
        currency: 'TRON',
        amount: 1.51511,
        icon: 'trx'
      },
      to: {
        currency: 'BTC',
        icon: 'btc'
      }
    }
  ]

  return (
    <section className={Styles.container}>
      <Container className='section-container'>
        <div className='text-center mb-4'>
          <h2>معاملات اخیر</h2>
        </div>
        <Row>
          {transactions.map((t) => (
            <Col key={t.id} md={6} sm={12}>
              <div className={Styles.transaction}>
                <span>{t.date}</span>
                <div className={Styles.t_coins}>
                  <span>
                    {t.from.amount} {t.from.currency}
                  </span>
                  <div className={`coin-ico svgcoin ${t.from.icon}`}></div>
                  <BsArrowLeft size={20} />
                  <div className={`coin-ico svgcoin ${t.to.icon}`}></div>
                  <span>{t.to.currency}</span>
                </div>
                <div className={Styles.timing}>
                  <BiTimeFive />
                  <span>{t.time}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Transactions
