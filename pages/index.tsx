import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import { Button } from 'reactstrap'
import BlogSection from '../components/Homepage/BlogSection'
import FAQ from '../components/Homepage/FAQ'
import Prices from '../components/Homepage/Prices'
import Services from '../components/Homepage/Services'
import ShowCase from '../components/Homepage/ShowCase'
import Transactions from '../components/Homepage/Transactions'
import Footer from '../components/shared/Footer'
import MenuContext from '../store/menu-context'

const Home: NextPage = () => {
  const { menu, toggleMenu } = useContext(MenuContext)

  return (
    <>
      <Head>
        <title>صفحه اصلی سایت</title>
        <meta name='description' content='این توضیحات صفحه اصلی سایت است.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {menu && <div className='shadow-body' onClick={toggleMenu}></div>}

      <ShowCase />
      <Services />
      <Transactions />
      <Prices />
      <FAQ />
      <BlogSection />
      <Footer />
    </>
  )
}

export default Home
