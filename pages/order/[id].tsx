import React from 'react'
import { Container } from 'reactstrap'
import { useRouter } from 'next/router'
import Header from '../../components/shared/PageHeader'
import OrderDirection from '../../components/Order/OrderDirection'
import OrderAction from '../../components/Order/OrderAction'

const OrderPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='main-full-bg darkbg'>
      <Header hideBg />
      <Container>
        <OrderDirection />
        <OrderAction />
      </Container>
    </div>
  )
}

export default OrderPage
