import Link from 'next/link'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href='/about'>درباره ما</Link>
        </li>
        <li>
          <Link href=''>وبلاگ</Link>
        </li>
        <li>
          <Link href=''>سوالات متداول</Link>
        </li>
        <li>
          <Link href=''>API</Link>
        </li>
        <li>
          <Link href=''>پشتیبانی</Link>
        </li>
      </ul>
      <div className={styles.separate}></div>
      <div>
        <button type='button' className={styles.button}>
          ورود
        </button>
        <button type='button' className={styles.button}>
          ثبت نام
        </button>
      </div>
    </nav>
  )
}

export default Navbar
