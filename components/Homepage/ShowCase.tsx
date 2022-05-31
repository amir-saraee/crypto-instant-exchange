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
      <header className={styles.header_mobile}>
        <div className={styles.menu_btn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </section>
  )
}

export default ShowCase
