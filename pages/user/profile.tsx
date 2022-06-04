import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../components/shared/Footer'
import Header from '../../components/shared/PageHeader'
import Panel from '../../components/User/Panel'
import Classes from '../../styles/profile.module.scss'

const Profile: NextPage = () => {
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

        <Panel active='1'>
          <h3>اطلاعات حساب</h3>
          <div className={Classes.main_box}>
            <div>
              <div>
                <label>ایمیل</label>
                <span>test@test.com</span>
              </div>
              <div>
                <label>کلمه عبور</label>
                <span>تغییر کلمه عبور</span>
              </div>
              <div>
                <label>تاریخ ثبت نام</label>
                <span>11 خرداد 1401</span>
              </div>
              <div>
                <label>آخرین بازدید</label>
                <span>8 ساعت پیش</span>
              </div>
            </div>
          </div>
        </Panel>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
