import Link from 'next/link'
import Classes from './NavigationMobile.module.scss'

const NavigationMobile: React.FC<{ active: string }> = (props) => {
  return (
    <nav className={`${Classes.nav} ${props.active && Classes.active}`}>
      <div>
        <ul>
          <li className={Classes.head}>
            <span>حساب کاربری</span>
          </li>
          <li>
            <span>ورود</span>
          </li>
          <li>
            <span>ثبت نام</span>
          </li>
          <li className={Classes.head}>
            <span>FixedFloat</span>
          </li>
          <li>
            <Link href='/about'>
              <a>درباره ما</a>
            </Link>
          </li>
          <li>
            <Link href='/faq'>
              <a>سوالات متداول</a>
            </Link>
          </li>
          <li>
            <Link href='/terms'>
              <a>شرایط استفاده</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavigationMobile
