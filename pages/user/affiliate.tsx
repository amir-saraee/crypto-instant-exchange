import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Table } from 'reactstrap'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaCopy } from 'react-icons/fa'
import Footer from '../../components/shared/Footer'
import Header from '../../components/shared/PageHeader'
import Panel from '../../components/User/Panel'
import Classes from '../../styles/profile.module.scss'
import CustomTable from '../../components/User/Orders/CustomTable'

const Affiliate: NextPage = () => {
  const [CopyState, setCopyState] = useState({
    value: '',
    copy: false
  })

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
        <title> دعوت از دوستان</title>
        <meta name='description' content='صفحه دعوت از دوستان' />
      </Head>

      <Header />

      <main className='main'>
        <div className='page-title'>
          <h2>حساب شما</h2>
        </div>

        <Panel active='3'>
          <h4>آمار دعوت ها</h4>
          <div className={Classes.main_box}>
            <Table className='text-center'>
              <thead>
                <tr>
                  <th>موجودی تخمینی</th>
                  <th>در انتظار برداشت</th>
                  <th>حداقل مبلغ برداشت</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0 BTC</td>
                  <td>0 BTC</td>
                  <td>0.001 BTC</td>
                  <td>40</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h4 className='mt-4'>توکن و پیوندهای وابسته</h4>
          <div className={Classes.main_box}>
            <div className={Classes.payout}>
              <label htmlFor=''>توکن شما</label>
              <input type='text' placeholder='y99gttgd' value='y99gttgd' />
              <CopyToClipboard text={'y99gttgd'} onCopy={() => alert('copied')}>
                <FaCopy size={28} color='#919191' cursor={'pointer'} />
              </CopyToClipboard>
            </div>

            <div className={Classes.payout}>
              <label htmlFor=''>لینک ساده</label>
              <input
                type='text'
                value='https://fixedfloat.com/?ref=y99gttgd'
                placeholder='https://fixedfloat.com/?ref=y99gttgd'
              />
              <CopyToClipboard
                text={'https://fixedfloat.com/?ref=y99gttgd'}
                onCopy={() => alert('copied')}
              >
                <FaCopy size={28} color='#919191' cursor={'pointer'} />
              </CopyToClipboard>
            </div>
            <div className={Classes.payout}>
              <label htmlFor=''>لینک با ارزها</label>
              <input
                type='text'
                placeholder='آدرس را وارد نمایید...'
                value='https://fixedfloat.com/BTC/ETH?ref=y99gttgd'
              />
              <CopyToClipboard
                text={'https://fixedfloat.com/BTC/ETH?ref=y99gttgd'}
                onCopy={() => alert('copied')}
              >
                <FaCopy size={28} color='#919191' cursor={'pointer'} />
              </CopyToClipboard>
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

export default Affiliate
