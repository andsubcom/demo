import { useEthers } from '@usedapp/core'
import Link from 'next/link'
import styles from '../styles/Account.module.css'

function networkNameById(id) {
  switch (id) {
    case 1:
      return 'Ethereum'
    case 3:
      return 'Ropsten'
    case 4:
      return 'Rinkeby'
    case 5:
      return 'Goerli'
    case 56:
      return 'BSC'
    case 137:
      return 'Polygon'
    default:
      return 'Unknown'
  }
}

function formatAccount(account) {
  return account.slice(0, 6) + '...' + account.slice(-4)
}


const Account = () => {
  const isPro = false

  const { activateBrowserWallet, account, chainId } = useEthers()
  const connect = () => { activateBrowserWallet() }

  return (
    <div className={styles.container}>
      <div className={styles.network}>{networkNameById(chainId)}</div>
      {account && <div className={styles.account}>{formatAccount(account)}</div>}
      {!account
        ? <button className={styles.button} onClick={connect}>Sign In</button>
        : (!isPro &&
          <>
            <Link href='/checkout' passHref>
              <button className={styles.button}>Get Pro</button>
            </Link>
          </>
        )
      }
    </div>
  )
}

export default Account