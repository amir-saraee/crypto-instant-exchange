import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import Classes from './OrderDirection.module.scss'

const OrderDirection = () => {
  return (
    <section className={Classes.section}>
      <div className={Classes.row}>
        <div className={Classes.direction}>
          <div className={Classes.info}>
            <span>ارسال می کنید</span>
            <span className={Classes.value}>0.00635793 BTC</span>
            <span>bc1qze5vhz2rg7z57pw2m6hl35huy2qp05c2p9npjm</span>
          </div>
          <div className={`coin-ico svgcoin btc ${Classes.icon}`}></div>
        </div>
        <div className={Classes.arrow}>
          <BsArrowLeft size={32} />
        </div>
        <div className={`${Classes.direction} ${Classes.d_start}`}>
          <div className={`coin-ico svgcoin eth ${Classes.icon}`}></div>
          <div className={Classes.info}>
            <span>دریافت می کنید</span>
            <span className={Classes.value}>0.1061713 ETH</span>
            <span>0x1Ca3AAE2786FCAFC75D818a8E7ec9b56150677AB</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderDirection
