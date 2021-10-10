import Link from 'next/link'
import Account from 'components/Account'
import styles from 'styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href='/' passHref>
        <div className={styles.title}>Andsub Demo</div>
      </Link>
      <Account/>
    </div>
  )
}

export default Header