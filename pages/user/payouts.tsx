import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../components/shared/Footer'
import Header from '../../components/shared/PageHeader'
import Panel from '../../components/User/Panel'
import Classes from '../../styles/profile.module.scss'
import CustomTable from '../../components/User/Orders/CustomTable'
import { Button } from 'reactstrap'

const Payouts: NextPage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'زمان',
        accessor: 'time'
      },
      {
        Header: 'ارسال',
        accessor: 'send'
      },
      {
        Header: 'دریافت',
        accessor: 'receive'
      },
      {
        Header: 'وضعیت',
        accessor: 'status'
      }
    ],
    []
  )
  const data = React.useMemo(
    () => [
      {
        id: '1',
        time: '12/3/1401',
        send: 'BTC',
        receive: 'ETH',
        status: 'ok'
      },
      {
        id: '2',
        time: '12/3/1401',
        send: 'BTC',
        receive: 'ETH',
        status: 'ok'
      },
      {
        id: '3',
        time: '12/3/1401',
        send: 'BTC',
        receive: 'ETH',
        status: 'ok'
      },
      {
        id: '4',
        time: '12/3/1401',
        send: 'BTC',
        receive: 'ETH',
        status: 'ok'
      }
    ],
    []
  )

  return (
    <div>
      <Head>
        <title> پرداخت ها</title>
        <meta name='description' content='صفحه پرداخت ها' />
      </Head>

      <Header />

      <main className='main'>
        <div className='page-title'>
          <h2>حساب شما</h2>
        </div>

        <Panel active='4'>
          <h4>پرداخت</h4>
          <div className={Classes.main_box}>
            <div className={Classes.payout}>
              <label htmlFor=''>آدرس بیت کوین</label>
              <input type='text' placeholder='آدرس را وارد نمایید...' />
            </div>
            <div className={Classes.payout}>
              <label htmlFor=''>آماده پرداخت</label>
              <span>0 بیت کوین (0 BTC کمتر از حداقل 0.001 BTC)</span>
            </div>
            <div className={Classes.payout}>
              <label htmlFor=''></label>
              <Button>پرداخت</Button>
            </div>
          </div>

          <h4 className='mt-4'>سفارشات تکمیل شده</h4>
          <div className={Classes.main_box}>
            <CustomTable data={data} columns={columns} />
          </div>
        </Panel>
      </main>
      <Footer />
    </div>
  )
}

export default Payouts
