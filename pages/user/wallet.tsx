import type { NextPage } from 'next'
import Head from 'next/head'
import { Table } from 'reactstrap'
import { BsDownload } from 'react-icons/bs'
import { BiRotateLeft } from 'react-icons/bi'
import Footer from '../../components/shared/Footer'
import Header from '../../components/shared/PageHeader'
import Panel from '../../components/User/Panel'
import Classes from '../../styles/wallet.module.scss'
import Link from 'next/link'

const Wallet: NextPage = () => {
  return (
    <div>
      <Head>
        <title>اطلاعات شخصی</title>
        <meta name='description' content='صفحه اطلاعات شخصی' />
      </Head>

      <Header />

      <main className='main'>
        <div className='page-title'>
          <h2>حساب شما</h2>
        </div>

        <Panel active='wallet'>
          <div className={Classes.wrap}>
            <h3>موجودی</h3>
            <div className={Classes.inventory}>
              <div>مبلغ کل موجودی شما به تومان در کیف پول</div>
              <span>0 تومان</span>
            </div>
            <div className={Classes.links}>
              <button type='button'>
                <BsDownload />
                <span>مشاهده برداشت ها</span>
              </button>
              <button type='button'>
                <BsDownload />
                <span>مشاهده واریزها</span>
              </button>
            </div>
          </div>

          <div className={Classes.wrap}>
            <h3>کیف پول شما</h3>
            <Table className={Classes.table} responsive>
              <thead>
                <tr>
                  <th>نوع کیف پول </th>
                  <th>موجودی</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className={Classes.wallet_type}>
                      <svg
                        data-v-62f1b59b=''
                        width='32'
                        height='32'
                        viewBox='0 0 512 512'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='coin-icon'
                      >
                        <path
                          data-v-62f1b59b=''
                          d='M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z'
                          fill='white'
                        ></path>{' '}
                        <path
                          data-v-62f1b59b=''
                          d='M105.739 122.435H139.13V144.7H172.521V122.435H205.912V144.7H239.3V122.435H272.691V144.7H306.082V122.435H339.473V144.7H372.864V122.435H406.255V144.7H486.592C445.19 59.065 357.493 0 256 0C154.507 0 66.8104 59.065 25.4004 144.7H105.737L105.739 122.435Z'
                          fill='#259245'
                        ></path>{' '}
                        <path
                          data-v-62f1b59b=''
                          d='M406.261 367.3V389.561H372.87V367.3H339.479V389.561H306.088V367.3H272.7V389.561H239.306V367.3H205.915V389.561H172.524V367.3H139.13V389.561H105.739V367.3H25.4004C66.8104 452.935 154.506 512 256 512C357.494 512 445.19 452.935 486.6 367.3H406.261Z'
                          fill='#ED1F34'
                        ></path>{' '}
                        <path
                          data-v-62f1b59b=''
                          d='M319.19 244.844C319.187 235.881 317.279 227.02 313.592 218.85C309.905 210.68 304.523 203.388 297.803 197.456C295.097 195.088 291.564 193.888 287.976 194.119C284.388 194.35 281.038 195.993 278.658 198.689C276.279 201.385 275.065 204.913 275.281 208.502C275.497 212.091 277.127 215.448 279.812 217.838C284.409 221.89 287.895 227.049 289.94 232.825C291.985 238.602 292.52 244.805 291.497 250.847C290.473 256.888 287.924 262.568 284.09 267.349C280.257 272.13 275.266 275.852 269.592 278.164V235.733C269.561 232.148 268.115 228.721 265.57 226.197C263.024 223.674 259.585 222.258 256 222.258C252.415 222.258 248.976 223.674 246.43 226.197C243.885 228.721 242.439 232.148 242.409 235.733V278.164C236.733 275.852 231.743 272.13 227.909 267.35C224.075 262.569 221.525 256.889 220.501 250.847C219.477 244.806 220.013 238.603 222.058 232.826C224.102 227.049 227.588 221.89 232.185 217.838C234.87 215.448 236.5 212.091 236.716 208.502C236.932 204.913 235.718 201.385 233.339 198.689C230.959 195.993 227.609 194.35 224.021 194.119C220.433 193.888 216.9 195.088 214.195 197.456C205.433 205.184 198.986 215.19 195.569 226.362C192.152 237.534 191.9 249.435 194.84 260.741C197.78 272.048 203.797 282.319 212.223 290.411C220.649 298.504 231.153 304.102 242.57 306.584C243.049 309.801 244.669 312.74 247.133 314.864C249.597 316.987 252.742 318.156 255.995 318.156C259.248 318.156 262.393 316.987 264.857 314.864C267.321 312.74 268.941 309.801 269.421 306.584C283.509 303.504 296.123 295.704 305.174 284.476C314.225 273.248 319.17 259.266 319.19 244.844Z'
                          fill='#ED1F34'
                        ></path>
                      </svg>
                      <span>تومان ایران</span>
                    </div>
                  </td>
                  <td>0(تومان)</td>
                  <td>
                    <div className={Classes.options}>
                      <Link href='/'>
                        <div>
                          <BsDownload size={18} />
                          <span>واریز</span>
                        </div>
                      </Link>
                      <span>
                        <div>
                          <BsDownload size={18} />
                          <span>برداشت</span>
                        </div>
                      </span>
                      <span>
                        <div>
                          <BiRotateLeft size={18} />
                          <span>گردش حساب</span>
                        </div>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Panel>
      </main>
      <Footer />
    </div>
  )
}

export default Wallet
