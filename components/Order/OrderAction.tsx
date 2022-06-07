import React from 'react'
import { BiCopyAlt } from 'react-icons/bi'
import Classes from './OrderAction.module.scss'

const OrderAction = () => {
  return (
    <section className={Classes.section}>
      <div>
        <div className={Classes.info}>
          <div>
            <div>
              <label htmlFor=''>شناسه سفارش</label>
              <div className={Classes.id}>
                <span>6ZCJ7Z</span>
                <BiCopyAlt size={22} />
              </div>
            </div>
            <div>
              <label htmlFor=''>زمان باقی مانده</label>
              <div className={Classes.time}>
                <span>24:32</span>
              </div>
            </div>
            <div>
              <label htmlFor=''>نوع سفارش</label>
              <div>
                <span>نرخ شناور</span>
              </div>
            </div>
            <div>
              <label htmlFor=''>تاریخ ایجاد</label>
              <div>
                <span>2022/07/08 4:18 AM</span>
              </div>
            </div>
          </div>
        </div>
        <div className={Classes.detail}></div>
        <div className={Classes.qr}></div>
      </div>
    </section>
  )
}

export default OrderAction
