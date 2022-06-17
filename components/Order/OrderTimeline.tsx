import React from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import { GiSandsOfTime } from 'react-icons/gi'
import { FaExchangeAlt } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import Classes from './OrderTimeline.module.scss'

const OrderTimeline = () => {
  return (
    <section className={Classes.section}>
      <div className=''>
        <ul>
          <li className={Classes.active}>
            <div>
              <RiDownload2Fill size={32} />
              <label htmlFor=''>در انتظار واریز</label>
            </div>
          </li>
          <li>
            <div>
              <GiSandsOfTime size={32} />
              <label htmlFor=''>در انتظار تایید</label>
            </div>
          </li>
          <li>
            <div>
              <FaExchangeAlt size={32} />
              <label htmlFor=''>انجام مبادله</label>
            </div>
          </li>
          <li>
            <div>
              <TiTick size={32} />
              <label htmlFor=''>اتمام</label>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default OrderTimeline
