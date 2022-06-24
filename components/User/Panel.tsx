import React from 'react'
import Link from 'next/link'
import { Container } from 'reactstrap'
import Classes from './Panel.module.scss'

const Panel: React.FC<{ children?: React.ReactNode; active?: string }> = ({
  children,
  active
}) => {
  return (
    <Container>
      <div className={Classes.wrap}>
        <aside>
          <ul>
            <li>
              <Link href='/user/profile'>
                <a className={active === '1' ? Classes.active : ''}>
                  اطلاعات شخصی
                </a>
              </Link>
            </li>
            <li>
              <Link href='/user/wallet'>
                <a className={active === 'wallet' ? Classes.active : ''}>
                  کیف پول
                </a>
              </Link>
            </li>
            <li>
              <Link href='/user/orders'>
                <a className={active === '2' ? Classes.active : ''}>
                  تاریخچه سفارشات
                </a>
              </Link>
            </li>
            <li>
              <Link href='/user/affiliate'>
                <a className={active === '3' ? Classes.active : ''}>
                  برنامه های وابسته
                </a>
              </Link>
            </li>
            <li>
              <Link href='/user/payouts'>
                <a className={active === '4' ? Classes.active : ''}>
                  پرداخت ها
                </a>
              </Link>
            </li>
            <li>
              <Link href=''>
                <a className={Classes.logout}>خروج</a>
              </Link>
            </li>
          </ul>
        </aside>
        <div className={Classes.main}>{children}</div>
      </div>
    </Container>
  )
}

export default Panel
