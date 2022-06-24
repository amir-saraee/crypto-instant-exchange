import React from 'react'
import Image from 'next/image'
import {
  BsLightningChargeFill,
  BsCurrencyBitcoin,
  BsFillCalculatorFill
} from 'react-icons/bs'
import { AiOutlineTransaction, AiOutlineFieldTime } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import MAILIMG from '../../public/assets/images/mail.png'
import Classes from './OrderInfo.module.scss'

const OrderInfo = () => {
  return (
    <section className={Classes.section}>
      <div className={Classes.wrap}>
        <div className={Classes.des}>
          <h3>چه چیزی را باید بدانید؟</h3>
          <div>
            <BsLightningChargeFill size={25} />
            <p>­ برای تبادل فقط به ۱ تائید بلاک چین بیت کوین نیاز دارید</p>
          </div>
          <div>
            <BsCurrencyBitcoin size={25} />
            <p>
              سرعت تایید تراکنش بیت کوین به سطح ازدحام شبکه بلاک چین بستگی دارد،
              در مقاله ما بیشتر توضیح دهید
            </p>
          </div>
          <div>
            <div>
              <AiOutlineTransaction size={25} />
            </div>
            <p>
              ما از آدرس های بیت کوین segwit برای تراکنش های سریع تر و ارزان تر
              استفاده می کنیم، اگر کیف پول شما از این نوع آدرس پشتیبانی نمی کند،
              برای تغییر آدرس با پشتیبانی فنی تماس بگیرید.
            </p>
          </div>
          <div>
            <FaEthereum size={25} />
            <p>
              ما از ارسال و دریافت اتریوم با استفاده از قراردادهای هوشمند
              پشتیبانی نمی کنیم
            </p>
          </div>
          <div>
            <BsFillCalculatorFill size={25} />
            <p>
              اگر مبلغ تراکنش ارسالی شما با مبلغ اولیه مشخص شده در سفارش با نرخ
              شناور متفاوت باشد، سفارش به صورت خودکار مجدداً محاسبه می شود.
            </p>
          </div>
          <div>
            <div>
              <AiOutlineFieldTime size={25} />
            </div>
            <p>
              اگر تراکنش شما پس از انقضای سفارش دریافت شود، اما ظرف 24 ساعت، این
              تراکنش به صورت خودکار در سفارش نمایش داده می شود. شما می توانید
              سفارش را خودتان ادامه دهید یا وجه را بازپرداخت کنید.
            </p>
          </div>
        </div>
        <div className={Classes.mail}>
          <h3>اعلان وضعیت سفارش</h3>
          <p>
            اگر می خواهید در مورد تغییرات وضعیت این سفارش اعلان دریافت کنید،
            ایمیل خود را وارد کنید
          </p>
          <div>
            <input type='email' placeholder='ایمیل خود را وارد نمایید' />
            <button type='button'>تایید</button>
          </div>
          <div>
            <Image src={MAILIMG} alt='mail' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderInfo
