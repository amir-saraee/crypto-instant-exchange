import Image from 'next/image'
import React from 'react'
import { BiCopyAlt } from 'react-icons/bi'
import Classes from './OrderAction.module.scss'
import QRIMAGE from '../../public/assets/images/barcode.png'

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
        <div className={Classes.detail}>
          <div>
            <div>
              <div>
                <p>
                  ارسال <b>0.00968936 بیت کوین</b> به آدرس:
                </p>
                <p className={Classes.address}>
                  bc1quuyhxcrf4xl4ve0vhh5ahgllsfjm3y3lrkn5e4
                </p>
              </div>
              <p>نرخ ارز پس از دریافت 1 تایید شبکه ثابت می شود.</p>
            </div>
            <footer>
              <p>آدرس دریافت ETH</p>
              <span className={Classes.address}>
                0x1Ca3AAE2786FCAFC75D818a8E7ec9b56150677AB
              </span>
            </footer>
          </div>
        </div>
        <div className={Classes.qr}>
          <div>
            <Image src={QRIMAGE} alt='barcode' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderAction
