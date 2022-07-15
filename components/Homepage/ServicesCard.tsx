import React from 'react'
import Image, { StaticImageData } from 'next/image'
import useViewport from '../../utils/hooks/useViewport'
import Classes from './Services.module.scss'

interface CardProps {
  title: string
  image: StaticImageData
  alt: string
  description: string
  second?: boolean
}

const ServicesCard: React.FC<CardProps> = ({
  title,
  image,
  alt,
  description,
  second
}) => {
  const { width } = useViewport()
  const breakpoint = 680

  return (
    <>
      {width > breakpoint ? (
        <div className={Classes.card}>
          <h3>{title}</h3>
          <Image src={image} alt={alt} />
          <p>{description}</p>
        </div>
      ) : (
        <div className={`${Classes.mobile} ${second ? Classes.second : ''}`}>
          <div>
            <Image src={image} alt={alt} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ServicesCard
