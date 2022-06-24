import Image from 'next/image'
import React from 'react'
import { Container, Table } from 'reactstrap'
import Classes from './Prices.module.scss'
import BTCIMG from '../../public/assets/images/icons/btc-1618907530096.png'
import ETHIMG from '../../public/assets/images/icons/eth-1618907641672.png'
import USDTIMG from '../../public/assets/images/icons/usdt-1618907739001.png'
import BNBIMG from '../../public/assets/images/icons/bnb-1618907707820.png'

const Prices = () => {
  return (
    <section className={Classes.container}>
      <Container className='section-container'>
        <div className='text-center mb-4'>
          <h2>قیمت ارزها</h2>
        </div>

        <Table responsive hover className={Classes.table}>
          <thead>
            <tr>
              <th>واحد</th>
              <th>ارز</th>
              <th>قیمت به دلار</th>
              <th>فروش (تومان)</th>
              <th>خرید (تومان)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={Classes.unit}>
                  <Image width={32} height={32} src={BTCIMG} alt='bitcoin' />
                  <span>BTC</span>
                </div>
              </td>
              <td>بیت کوین</td>
              <td> 31407.50</td>
              <td> 986,109,938 </td>
              <td> 1,008,722,375 </td>
            </tr>
            <tr>
              <td>
                <div className={Classes.unit}>
                  <Image width={32} height={32} src={USDTIMG} alt='usdt' />
                  <span>USDT</span>
                </div>
              </td>
              <td>تتر</td>
              <td> 1</td>
              <td> 31,500 </td>
              <td> 32,000 </td>
            </tr>
            <tr>
              <td>
                <div className={Classes.unit}>
                  <Image width={32} height={32} src={ETHIMG} alt='ethereum' />
                  <span>ETH</span>
                </div>
              </td>
              <td>اتریوم</td>
              <td> 1900.5</td>
              <td> 58,160,344 </td>
              <td> 59,856,958 </td>
            </tr>
            <tr>
              <td>
                <div className={Classes.unit}>
                  <Image width={32} height={32} src={BNBIMG} alt='bnb' />
                  <span>BNB</span>
                </div>
              </td>
              <td>بایننس</td>
              <td> 297.50</td>
              <td> 9,332,215 </td>
              <td> 9,562,840 </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </section>
  )
}

export default Prices
