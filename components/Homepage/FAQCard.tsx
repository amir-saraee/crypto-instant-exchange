import React from 'react'
import { Card, CardBody } from 'reactstrap'
import Classes from './FAQ.module.scss'
import Link from 'next/link'
import {
  AiFillTwitterCircle,
  AiFillMediumCircle,
  AiFillInstagram,
  AiFillRedditCircle
} from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { FaBitcoin } from 'react-icons/fa'

interface CardProps {
  title: string
  description: string
  social?: boolean
}

const FAQCard: React.FC<CardProps> = ({ title, description, social }) => {
  return (
    <Card className={Classes.card}>
      <div className={Classes.head}>
        چگونه می توانم سفارش خود را پیگیری کنم؟
      </div>
      <CardBody className={Classes.body}>
        <p>
          به سه روش: از طریق ایمیل (اگر آدرس ایمیل خود را بگذارید)، در وب سایت
          ما (در صورتی که مرورگر شما کوکی ها را بپذیرد) یا با مشاهده تراکنش های
          موجود در بلاک چین توسط پیوندهای سفارش شما.
        </p>
        {social && (
          <div className={Classes.social}>
            <a href='' title='Twitter link'>
              <AiFillTwitterCircle color='#1A8CD8' size={32} />
            </a>
            <a href='' title='Telegram link'>
              <BsTelegram color='#36AEE2' size={28} />
            </a>
            <a href='' title='Medium link'>
              <AiFillMediumCircle color='#000' size={32} />
            </a>
            <a href='' title='Instagram link'>
              <AiFillInstagram color='#C13584' size={32} />
            </a>
            <a href='' title='Reddit link'>
              <AiFillRedditCircle color='#FF4500' size={32} />
            </a>
            <a href='' title='Bitcoin link'>
              <FaBitcoin color='#EF8E19' size={28} />
            </a>
          </div>
        )}
      </CardBody>
    </Card>
  )
}

export default FAQCard
