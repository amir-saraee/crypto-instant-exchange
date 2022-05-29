import type { NextPage } from 'next'
import Head from 'next/head'
import BlogSection from '../components/Homepage/BlogSection'
import FAQ from '../components/Homepage/FAQ'
import Services from '../components/Homepage/Services'
import ShowCase from '../components/Homepage/ShowCase'
import Transactions from '../components/Homepage/Transactions'
import Footer from '../components/shared/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>صفحه اصلی سایت</title>
        <meta name='description' content='این توضیحات صفحه اصلی سایت است.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ShowCase />
      <Services />
      <Transactions />
      <FAQ />
      <BlogSection />
      <Footer />
    </div>
  )
}

export default Home
