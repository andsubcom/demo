import { useEthers } from '@usedapp/core'
import Link from 'next/link'
import styles from '../styles/Account.module.css'

// function networkNameById(id) {
//   switch (id) {
//     case 1:
//       return 'Mainnet'
//     case 3:
//       return 'Ropsten'
//     case 4:
//       return 'Rinkeby'
//     case 5:
//       return 'Goerli'
//     case 56:
//       return 'BSC'
//     case 137:
//       return 'Polygon'
//     default:
//       return 'Unknown'
//   }
// }

function formatAccount(account) {
  return account.slice(0, 6) + '...' + account.slice(-4)
}


const Account = () => {
  const isPro = false

  const { activateBrowserWallet, account, chainId } = useEthers()
  const networkCorrect = chainId === 3

  return (
    <div className={styles.container}>
      {!networkCorrect && account  && <div className={styles.network}>{`Swtich to Ropsten`}</div>}
      {account && <div className={styles.account}>{formatAccount(account)}</div>}
      {!account && <button className={styles.button} onClick={() => { activateBrowserWallet() }}>Sign In</button>}
      {networkCorrect && account && !isPro && 
        <Link href='/checkout' passHref>
          <button className={styles.button}>Get Pro</button>
        </Link>
      }
    </div>
  )
}

export default Account