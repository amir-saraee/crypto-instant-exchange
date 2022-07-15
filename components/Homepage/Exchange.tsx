import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { BiQrScan } from 'react-icons/bi'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import Classes from './Exchange.module.scss'

const Exchange = () => {
  const [exchangeOption, setExchangeOption] = useState('fixed')
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <form className={Classes.exchange_form}>
      <div className={Classes.exchange_amounts}>
        <div className={Classes.exchange_amounts_input}>
          <header>ارسال</header>
          <div className={Classes.input_box}>
            <input type='text' placeholder='from' defaultValue={0.0} />
            <label htmlFor='' className={Classes.label_left}>
              <AiFillCaretDown />
              <span>BTC</span>
              <span
                className={`coin-img svgcoin btc ${Classes.coin_image}`}
              ></span>
            </label>
          </div>
          <div className={Classes.input_sub}>
            <button type='button' title='lighting'>
              <BsFillLightningChargeFill color='#9157ff' />
              <span>لایتینگ</span>
            </button>
            <div>1 BTC ≈ 16.6549496 ETH</div>
          </div>
        </div>
        <div className={Classes.exchange_amounts_arrow}>
          <header>$2501</header>
          <button type='button' title='change'>
            <HiArrowLeft size={25} color='#f7931a' />
            <HiArrowRight size={25} color='#53ae94' />
          </button>
        </div>
        <div className={Classes.exchange_amounts_input}>
          <header>دریافت</header>
          <div className={Classes.input_box}>
            <input
              type='text'
              placeholder='from'
              defaultValue={0.0}
              className={Classes.input_receive}
            />
            <label htmlFor='' className={Classes.label_right}>
              <AiFillCaretDown />
              <span>BTC</span>
              <span
                className={`coin-img svgcoin btc ${Classes.coin_image}`}
              ></span>
            </label>
          </div>
          <div className={Classes.input_sub}>
            <div>1 BTC ≈ 16.6549496 ETH</div>
          </div>
        </div>
      </div>
      <div className={Classes.wallet}>
        <div>
          <input type='text' placeholder='آدرس بیت کوین شما' />
          <hr />
          <div>
            <BiQrScan cursor={'pointer'} size={28} color='#fff' />
          </div>
        </div>
      </div>

      <div className={Classes.exchange_options}>
        <div>
          <label htmlFor=''>
            <input
              type='radio'
              name='option'
              value={'fixed'}
              onChange={(e) => setExchangeOption(e.target.value)}
              checked={exchangeOption === 'fixed' ? true : false}
            />
            <span>نرخ ثابت</span>
          </label>
          <label htmlFor=''>
            <input
              type='radio'
              name='option'
              value={'float'}
              onChange={(e) => setExchangeOption(e.target.value)}
              checked={exchangeOption === 'float' ? true : false}
            />
            <span>نرخ شناور</span>
          </label>
        </div>
        <div className={Classes.difference}>
          <span onClick={() => setModalIsOpen(true)}>تفاوت در چیست؟</span>
        </div>
        <Modal
          isOpen={modalIsOpen}
          toggle={() => setModalIsOpen((prev) => !prev)}
          centered
        >
          <ModalHeader>تفاوت بین نرخ ثابت و شناور چیست؟</ModalHeader>
          <ModalBody className={Classes.modal}>
            <h4>نرخ ثابت</h4>
            <p>
              با انتخاب یک نرخ ثابت، قیمتی را که در نقطه شروع معامله مشاهده می
              کنید، دریافت می کنید.
            </p>
            <ul>
              <li> فقط 1% + هزینه شبکه بپردازید.</li>
              <li> بدون کمیسیون پنهان</li>
              <li> نرخ ها به مدت 10 دقیقه منجمد می شوند.</li>
              <li>
                اگر نرخ بازار قبل از ظاهر شدن تراکنش در شبکه بلاک چین بیش از 1.2
                درصد تغییر کند، از شما خواسته می شود که بازپرداخت کنید یا به
                مبادله با نرخ بازار ادامه دهید.
              </li>
            </ul>
            <h4>نرخ شناور</h4>
            <p>
              نرخ ارز در نهایت زمانی تنظیم می شود که تراکنش شما تعداد لازم
              تاییدیه شبکه بلاک چین را دریافت کند. اگر بازار بالا برود، ارز
              دیجیتال بیشتری دریافت خواهید کرد، اگر کاهش یابد - کمتر. همه
              منصفانه
            </p>
            <ul>
              <li> فقط 0.5% + هزینه شبکه بپردازید.</li>
              <li>بدون کمیسیون پنهان</li>
              <li> نرخ ارز زمانی تعیین می شود که تراکنش شما را دریافت کنیم.</li>
            </ul>
            <p>
              مثال: شما باید 1 BTC را با 28.37362388 ETH مبادله کنید. اگر یک نرخ
              ثابت را انتخاب کنید، دقیقاً 28.37362388 ETH برای 1 BTC دریافت
              خواهید کرد. اگر نرخ شناور را انتخاب کنید، قیمت 1 BTC مطابق با
              نوسانات نرخ ارز بین 28.52343244 ETH و 28.13788921 تغییر می کند.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color='warning' onClick={() => setModalIsOpen(false)}>
              بستن
            </Button>
          </ModalFooter>
        </Modal>
        <div className={Classes.exchange_btn}>
          <button type='button' title='submit' disabled>
            <span>اکنون مبادله کنید</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Exchange
