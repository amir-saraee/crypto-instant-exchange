import Styles from './BlogCard.module.scss'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type CardType = {
  image: StaticImageData
  title: string
  description?: string
  type?: string
}

const BlogCard: React.FC<CardType> = ({ image, title, description, type }) => {
  return (
    <article className={`${Styles.grid_item} `}>
      <div>
        <Link href='#'>
          <Image src={image} alt='blog post' className={Styles.img} />
        </Link>
      </div>

      <div className={Styles.article_body}>
        <Link href='#'>
          <h3>{title}</h3>
        </Link>
        <div className={Styles.article_date}>
          <span>6 خرداد 1401</span>
        </div>
        {type === 'large' && (
          <div className={Styles.article_desc}>
            <p>{description}</p>
          </div>
        )}
      </div>
    </article>
  )
}

export default BlogCard
