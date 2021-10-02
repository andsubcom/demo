import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Degens Club</title>
        <meta name="description" content="Andsub demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.coingecko.com/en/glossary/degen">Degens Club!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://andsub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Andsub
        </a>
      </footer>
    </div>
  )
}
