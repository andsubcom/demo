import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = ({ isSignedIn, isPro }) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>degens club</div>
      <div>
        {!isSignedIn
          ? <button className={styles.button}>Sign In</button>
          : (!isPro &&
              <Link href='/checkout'>
                <button className={styles.button}>Get Pro</button>
              </Link>
          )
        }
      </div>
    </div>
  )
}

export default Header