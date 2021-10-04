import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/App.module.css'

function MyApp({ Component, pageProps }) {
  const address = '0x66814090cCA5f4cFf0262720DC82F640e6E0663f'
  const isSignedIn = true
  const isPro = false
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Degens Club</title>
        <meta name="description" content="Andsub demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isSignedIn={isSignedIn} isPro={isPro}/>

      <div className={styles.layout}>
        <Component {...pageProps}/>
      </div>
    </div>
  )
}

export default MyApp
