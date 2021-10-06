import Head from 'next/head'
import Header from 'components/Header'
import styles from 'styles/AppContent.module.css'

const AppContent = ({ Component, pageProps }) => {
  return (
    <div className={styles.container}>
        <Head>
          <title>Andsub Demo</title>
          <meta name="description" content="Andsub demo app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>

        <div className={styles.layout}>
          <Component {...pageProps}/>
        </div>
    </div>
  )
}

export default AppContent