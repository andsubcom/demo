import { useEthers } from '@usedapp/core'
import Link from 'next/link'
import Account from './Account'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href='/' passHref>
        <div className={styles.title}>degens club</div>
      </Link>
      <Account/>
    </div>
  )
}

export default Header