import Link from 'next/link'
import Navbar from '../shared/Navbar'
import styles from './ShowCase.module.scss'

function ShowCase() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>
            <Link href='/'>لوگو</Link>
          </h1>
        </div>
        <Navbar />
      </header>
    </section>
  )
}

export default ShowCase
