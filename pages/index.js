import { useEthers } from '@usedapp/core'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


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

const NoAccessLayout = ({ address }) => {
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
      <Link href='/plans' passHref>
        <button style={{ marginTop: '4rem' }}>Become a member</button>
      </Link>
    </div>
  )
}

const ContentLayout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Image src="/success.svg" alt="Vercel Logo" width={160} height={160} style={{ color:'red' }} />
      <p className={styles.description}>Welcome to the degens club!</p>
    </div>
  )
}


const Home = () => {
  // const address = '0x66814090cCA5f4cFf0262720DC82F640e6E0663f'
  // const isSignedIn = false
  const isPro = false
  
  const { activateBrowserWallet, account } = useEthers()
  const connect = () => { activateBrowserWallet() }
  return (
    <>
      {account
        ? (isPro ? <ContentLayout/> : <NoAccessLayout address={account}/>) 
        : <LoginLayout onClick={connect}/>}
    </>
  )
}

export default Home
