import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import Styles from './BlogSection.module.scss'
import Link from 'next/link'
import Image1 from '../../public/assets/images/post-1.jpg'
import Image2 from '../../public/assets/images/post-2.jpg'
import BlogCard from '../shared/BlogCard'

function BlogSection() {
  return (
    <section className={Styles.section}>
      <Container className='section-container'>
        <div className='text-center mb-4'>
          <h2>جدیدترین مطالب</h2>
        </div>

        <div className={Styles.grid}>
          <BlogCard
            title='گزارش هفتگی رمزارزها'
            description='در طول این هفته (2022.05.22-2022.05.28) اتفاقات زیادی در جامعه
            کریپتو رخ داد. جالب ترین و آموزنده ترین اخبار را برای شما آماده کرده
            ایم.'
            image={Image2}
            type='large'
          />
          <div className={Styles.grid_row}>
            <div className={Styles.grid_sub}>
              <BlogCard title='گزارش هفتگی رمزارزها' image={Image2} />

              <BlogCard title='گزارش هفتگی رمزارزها' image={Image2} />
            </div>
            <div className={Styles.grid_sub}>
              <BlogCard title='گزارش هفتگی رمزارزها' image={Image2} />
              <BlogCard title='گزارش هفتگی رمزارزها' image={Image1} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BlogSection
