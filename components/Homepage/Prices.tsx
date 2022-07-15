import Image from 'next/image'
import React, { useState } from 'react'
import {
  Container,
  Table,
  Dropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap'
import Link from 'next/link'
import { BiChevronLeft, BiDotsVerticalRounded } from 'react-icons/bi'
import Classes from './Prices.module.scss'
import BTCIMG from '../../public/assets/images/icons/btc-1618907530096.png'
import ETHIMG from '../../public/assets/images/icons/eth-1618907641672.png'
import USDTIMG from '../../public/assets/images/icons/usdt-1618907739001.png'
import BNBIMG from '../../public/assets/images/icons/bnb-1618907707820.png'
import chart from '../../public/assets/images/btc-chart.svg'
import useViewport from '../../utils/hooks/useViewport'

const Prices = () => {
  const [currencyType, setCurrencyType] = useState('IRT')
  const [dropDownIsOpen, setDropDownIsOpen] = useState(0)
  const { width } = useViewport()
  const breakpoint = 992

  return (
    <section className={Classes.container}>
      <Container className='section-container'>
        <div className='text-center mb-4'>
          <h2>قیمت ارزها</h2>
        </div>

        <div>
          <div className={Classes.table_currency}>
            <div className={width <= breakpoint ? Classes.full_width : ''}>
              <span>انتخاب بازار براساس</span>
              <div>
                <button
                  type='button'
                  className={currencyType === 'IRT' ? Classes.active : ''}
                  onClick={() => setCurrencyType('IRT')}
                >
                  تومان IRT
                </button>
                <button
                  type='button'
                  className={currencyType === 'USDT' ? Classes.active : ''}
                  onClick={() => setCurrencyType('USDT')}
                >
                  تتر USDT
                </button>
              </div>
            </div>
          </div>
          <Table responsive className={Classes.table}>
            <thead>
              <tr>
                <th className={Classes.name_th}>نام</th>
                <th>قیمت خرید</th>
                <th>قیمت فروش</th>
                {width <= breakpoint ? <></> : <th>نمودار هفتگی</th>}

                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={Classes.unit}>
                    <Image width={32} height={32} src={BTCIMG} alt='bitcoin' />
                    <div>
                      <span className={Classes.symbol}>BTC</span>
                      <span className={Classes.coin_name}>بیت کوین</span>
                    </div>
                  </div>
                </td>
                <td> {currencyType === 'IRT' ? '673,392,950' : '22,000'} </td>
                <td> {currencyType === 'IRT' ? '673,392,950' : '22,000'} </td>
                {width <= breakpoint ? (
                  <></>
                ) : (
                  <td>
                    <div>
                      <Image src={chart} alt='chart' />
                    </div>
                  </td>
                )}
                <td>
                  {width <= breakpoint ? (
                    <Dropdown
                      isOpen={dropDownIsOpen === 1}
                      toggle={() =>
                        setDropDownIsOpen(dropDownIsOpen === 1 ? 0 : 1)
                      }
                      direction='up'
                    >
                      <DropdownToggle data-toggle='dropdown' tag='span'>
                        <BiDotsVerticalRounded
                          cursor={'pointer'}
                          size={18}
                          color='#b3b3b3'
                        />
                      </DropdownToggle>
                      <DropdownMenu className={Classes.dropdown}>
                        <div onClick={function noRefCheck() {}}>
                          درباره بیت کوین
                        </div>
                        <div onClick={function noRefCheck() {}}>
                          خرید و فروش
                        </div>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <div className={Classes.trade}>
                      <button type='button'>خرید و فروش</button>
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <div className={Classes.unit}>
                    <Image width={32} height={32} src={USDTIMG} alt='usdt' />
                    <div>
                      <span className={Classes.symbol}>USDT</span>
                      <span className={Classes.coin_name}>تتر</span>
                    </div>
                  </div>
                </td>
                <td>32,000</td>
                <td> 32,000</td>
                {width <= breakpoint ? (
                  <></>
                ) : (
                  <td>
                    <div>
                      <Image src={chart} alt='chart' />
                    </div>
                  </td>
                )}

                <td>
                  {width <= breakpoint ? (
                    <Dropdown
                      isOpen={dropDownIsOpen === 2}
                      toggle={() =>
                        setDropDownIsOpen(dropDownIsOpen === 2 ? 0 : 2)
                      }
                      direction='up'
                    >
                      <DropdownToggle data-toggle='dropdown' tag='span'>
                        <BiDotsVerticalRounded
                          cursor={'pointer'}
                          size={18}
                          color='#b3b3b3'
                        />
                      </DropdownToggle>
                      <DropdownMenu className={Classes.dropdown}>
                        <div onClick={function noRefCheck() {}}>
                          درباره بیت کوین
                        </div>
                        <div onClick={function noRefCheck() {}}>
                          خرید و فروش
                        </div>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <div className={Classes.trade}>
                      <button type='button'>خرید و فروش</button>
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <div className={Classes.unit}>
                    <Image width={32} height={32} src={ETHIMG} alt='ethereum' />
                    <div>
                      <span className={Classes.symbol}>ETH</span>
                      <span className={Classes.coin_name}>اتریوم</span>
                    </div>
                  </div>
                </td>
                <td> 58,160,344</td>
                <td> 58,160,344 </td>
                {width <= breakpoint ? (
                  <></>
                ) : (
                  <td>
                    <div>
                      <Image src={chart} alt='chart' />
                    </div>
                  </td>
                )}
                <td>
                  {width <= breakpoint ? (
                    <Dropdown
                      isOpen={dropDownIsOpen === 3}
                      toggle={() =>
                        setDropDownIsOpen(dropDownIsOpen === 3 ? 0 : 3)
                      }
                      direction='up'
                    >
                      <DropdownToggle data-toggle='dropdown' tag='span'>
                        <BiDotsVerticalRounded
                          cursor={'pointer'}
                          size={18}
                          color='#b3b3b3'
                        />
                      </DropdownToggle>
                      <DropdownMenu className={Classes.dropdown}>
                        <div onClick={function noRefCheck() {}}>
                          درباره بیت کوین
                        </div>
                        <div onClick={function noRefCheck() {}}>
                          خرید و فروش
                        </div>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <div className={Classes.trade}>
                      <button type='button'>خرید و فروش</button>
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <div className={Classes.unit}>
                    <Image width={32} height={32} src={BNBIMG} alt='bnb' />
                    <div>
                      <span className={Classes.symbol}>BNB</span>
                      <span className={Classes.coin_name}>بایننس</span>
                    </div>
                  </div>
                </td>
                <td>9,332,215</td>
                <td> 9,332,215</td>
                {width <= breakpoint ? (
                  <></>
                ) : (
                  <td>
                    <div>
                      <Image src={chart} alt='chart' />
                    </div>
                  </td>
                )}
                <td>
                  {width <= breakpoint ? (
                    <Dropdown
                      isOpen={dropDownIsOpen === 4}
                      toggle={() =>
                        setDropDownIsOpen(dropDownIsOpen === 4 ? 0 : 4)
                      }
                      direction='up'
                    >
                      <DropdownToggle data-toggle='dropdown' tag='span'>
                        <BiDotsVerticalRounded
                          cursor={'pointer'}
                          size={18}
                          color='#b3b3b3'
                        />
                      </DropdownToggle>
                      <DropdownMenu className={Classes.dropdown}>
                        <div onClick={function noRefCheck() {}}>
                          درباره بیت کوین
                        </div>
                        <div onClick={function noRefCheck() {}}>
                          خرید و فروش
                        </div>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <div className={Classes.trade}>
                      <button type='button'>خرید و فروش</button>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </Table>
          <div>
            <Link href={'/'}>
              <div className={Classes.all_markets}>
                <a href=''>
                  <span>نمایش همه بازارها</span>
                  <BiChevronLeft />
                </a>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Prices
