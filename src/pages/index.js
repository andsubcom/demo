import { useEthers } from '@usedapp/core'
import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Home.module.css'

import { useIsSubscribed } from 'src/hooks'

const LoginLayout = ({ onClick }) => {
  return (
    <div className={styles.layoutContainer}>
      <p className={styles.description}>
        Please sign in with your Ethereum wallet.
      </p>
      <button onClick={onClick}>Sign In</button>
    </div>
  )
}

const NoAccessLayout = ({ address, productId }) => {
  return (
    <div className={styles.layoutContainer}>
      <div style={{fontSize: '6rem'}}>🔐</div>
      <p 
        className={styles.description} 
        style={{ marginTop: '1rem', marginBottom: '0.5rem' }}
      >
        You have no access to the club.
      </p>
      <code className='code'>{address}</code>
      <Link href={`https://checkout.andsub.com/${productId}`} passHref>
        <button style={{ marginTop: '4rem' }}>Get Premium</button>
      </Link>
    </div>
  )
}

const ContentLayout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Image src="/success.svg" alt="Vercel Logo" width={160} height={160} style={{ color:'red' }} />
      <p className={styles.description}>Welcome to the club!</p>
    </div>
  )
}

const PRODUCT_ID = 'test_ilya'

const Home = () => {
  
  const { activateBrowserWallet, account, chainId } = useEthers()
  const networkCorrect = chainId === 3
  const isPro = useIsSubscribed(PRODUCT_ID)

  return (
    <>
      {!account && 
        <LoginLayout onClick={() => activateBrowserWallet() }/>
      }
      {!networkCorrect && account && 
        <p>This app only works on Ropsten network</p>
      }
      {networkCorrect && account && isPro && 
        <ContentLayout /> 
      }
      {networkCorrect && account && !isPro && 
        <NoAccessLayout address={account} productId={PRODUCT_ID}/>
      }
    </>
  )
}

export default Home
