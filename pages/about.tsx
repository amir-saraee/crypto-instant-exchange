import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/PageHeader'
import Styles from '../styles/about.module.scss'

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>درباره ما</title>
        <meta name='description' content='صفحه درباره ما' />
      </Head>

      <Header />
      <main className='main'>
        <div className='page-title'>
          <h2>درباره ما</h2>
        </div>
        <div className='content-box'>
          <p>
            ارزهای دیجیتال فرصت‌های جدیدی را برای دستیابی به آزادی مالی باز
            می‌کنند. هرچه پایگاه کاربر بزرگتر باشد، مزیت های رقابتی بیشتری را که
            فناوری های دفتر کل توزیع شده در حال ظهور ارائه می کنند، بیشتر می
            کند. FixedFloat ابزارهایی را برای استفاده کامل از دارایی های دیجیتال
            خود از طریق یک پلتفرم مبادله آسان و در دسترس در اختیار شما قرار می
            دهد.
          </p>
          <div>
            <h4>امتیازهای ویژه</h4>
            <p>
              ما متعهد به ارائه راه حل های انعطاف پذیر متناسب با خواسته ها و
              نیازهای شما هستیم. پردازش سریع، طراحی قوی، و تیم پشتیبانی مشتری
              دوستانه و اختصاصی شامل می شود. شما انتخاب می‌کنید که آیا نرخ ارز
              ثابت یا شناور با استراتژی شما مطابقت دارد، و سپس به ربات‌های ما
              اجازه می‌دهید تا کار سخت را برای انتخاب بهترین معامله برای شما
              انجام دهند. بدون ثبت نام، بدون دردسر.
            </p>
          </div>
          <div>
            <h4>ماموریت ما</h4>
            <p>
              ما بازیکنان بلندمدتی با چشم‌انداز هستیم و می‌خواهیم به شرکای قابل
              اعتماد و قابل اعتماد شما در دنیای دارایی‌های دیجیتال تبدیل شویم.
              ماموریت ما ساده سازی فرآیند مبادله از طریق راه حل های عملی و مقیاس
              پذیر است که باعث می شود اقتصاد کریپتو برای شما کار کند.
            </p>
          </div>
          <div>
            <h4>داستان ما</h4>
            <p>
              FixedFloat توسط تیمی از کارشناسان بلاک چین با تجربه گسترده در امور
              مالی، فناوری وب و کارآفرینی راه اندازی شد. ما با ایده ایجاد بهترین
              پلت فرم مبادله دارایی دیجیتال که تمام نیازهای جامعه کریپتو را
              برآورده می کند متحد شده ایم.
            </p>
          </div>
          <div>
            <h4>ارزهای پشتیبانی شده</h4>
            <div className={Styles.coins}>
              <ul>
                <li>
                  <div className='coin-ico svgcoin btc'></div>
                  <span>Bitcoin</span>
                </li>
                <li>
                  <div className='coin-ico svgcoin eth'></div>
                  <span>Ethereum</span>
                </li>
                <li>
                  <div className='coin-ico svgcoin usdt'></div>
                  <span>Tether (ERC20)</span>
                </li>
                <li>
                  <div className='coin-ico svgcoin ltc'></div>
                  <span>Litecoin</span>
                </li>
                <li>
                  <div className='coin-ico svgcoin xmr'></div>
                  <span>Litecoin</span>
                </li>
                <li>
                  <div className='coin-ico svgcoin bnb'></div>
                  <span>Litecoin</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About
