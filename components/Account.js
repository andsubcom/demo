import { useEthers } from '@usedapp/core'
import Link from 'next/link'
import styles from 'styles/Account.module.css'

const PRODUCT_ID = process.env.NEXT_PUBLIC_PRODUCT_ID

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
      {!networkCorrect && account && <div className={styles.network}>{`Swtich to Ropsten`}</div>}
      {account && <div className={styles.account}>{formatAccount(account)}</div>}
      {!account && <button className={styles.button} onClick={() => { activateBrowserWallet() }}>Sign In</button>}
      {networkCorrect && account && !isPro &&
        <a href={`https://checkout.andsub.com/${PRODUCT_ID}`} target='_blank' rel="noreferrer">
          <button className={styles.button}>Get Premium</button>
        </a>
      }
    </div>
  )
}

export default Account