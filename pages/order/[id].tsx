import React from 'react'
import { Container } from 'reactstrap'
import { useRouter } from 'next/router'
import Header from '../../components/shared/PageHeader'
import Footer from '../../components/shared/Footer'
import OrderDirection from '../../components/Order/OrderDirection'
import OrderAction from '../../components/Order/OrderAction'
import OrderTimeline from '../../components/Order/OrderTimeline'
import OrderInfo from '../../components/Order/OrderInfo'

const OrderPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='main-full-bg darkbg'>
      <Header hideBg />
      <Container>
        <OrderDirection />
        <OrderAction />
        <OrderTimeline />
        <OrderInfo />
      </Container>

      <Footer />
    </div>
  )
}

export default OrderPage
