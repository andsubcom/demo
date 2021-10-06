import { useSubscriptionInfo, useIsAccountSubscribed } from 'src/hooks'
import Image from 'next/image'
import styles from 'styles/Checkout.module.css'


const Checkout = () => {
  // const account = '0x66814090cCA5f4cFf0262720DC82F640e6E0663f'
  // const isSubscribed = useIsAccountSubscribed(account, productId)
  // console.log(`${account} is subscribed = ${isSubscribed}`)

  // const productId = 0
  // const info = useSubscriptionInfo(productId)
  // console.log(`useSubscriptionInfo = ${JSON.stringify(info)}`)

  return (
    <div className={styles.widget}>
      <div className={styles.subscribe}>Subscribe to</div>
      <div className={styles.product}>
        <Image src='/demo-logo.png' alt='Demo logo' width={24} height={24} className={styles.logo} />
        <div className={styles.name}>Premium Membership</div>
      </div>

      <div style={{ height: '35px' }}/>

      <div className={styles.pricebox}>
        <div className={styles.price}>$20.00</div>
        <div className={styles.period}>per month</div>
      </div>
      
      <div style={{ height: '45px' }}/>

      <div style={{ 
        display: 'flex', 
        flexFlow: 'row nowrap',
        justifyContent: 'stretch',
        alignItems: 'center',
        padding: '0px 0px 0px 0px'
      }}>
        <div style={{ height: '1px', background: '#4e6180', flexGrow: '1' }} />
        <div style={{ padding: '0px 15px', color: '#4e6180', fontSize: '16px' }}>Connect wallet</div>
        <div style={{ height: '1px', background: '#4e6180', flexGrow: '1' }} />
      </div>
      
      <div style={{ height: '20px' }}/>

      <div className={styles.accountheader}>Account</div>
      <div className={styles.accountbox}>
        <Image
            src='/metamask.svg'
            alt='Metamask logo'
            width={24}
            height={24}
            className={styles.boxicon}
          />
        <div className={styles.account}>0x0000...5ef0</div>
        <Image src='/arrow-down.svg' alt='Account dropdown' width={28} height={28} className={styles.dropdown} />
      </div>

      <div style={{ height: '25px' }}/>

      <div className={styles.networkheader}>Network</div>
      <div className={styles.nextworkbox}>
        <Image
          src='/eth-logo.svg'
          alt='Ethereum logo'
          width={24}
          height={24}
          className={styles.boxicon}
        />
        <div className={styles.networkname}>Ethereum</div>
        <Image src='/arrow-down.svg' alt='Coin list dropdown' width={28} height={28} className={styles.dropdown} />
      </div>

      <div style={{ height: '50px' }}/>

      <div style={{ 
        display: 'flex', 
        flexFlow: 'row nowrap',
        justifyContent: 'stretch',
        alignItems: 'center',
        padding: '0px 0px 0px 0px'
      }}>
        <div style={{ height: '1px', background: '#4e6180', flexGrow: '1' }} />
        <div style={{ padding: '0px 15px', color: '#4e6180', fontSize: '16px' }}>Subscribe with crypto</div>
        <div style={{ height: '1px', background: '#4e6180', flexGrow: '1' }} />
      </div>
      
      <div style={{ height: '20px' }}/>

      <div className={styles.coinheader}>Pay with</div>
      <div className={styles.coinbox}>
        <Image
          src='/coin-logo.png'
          alt='Coin logo'
          width={24}
          height={24}
          className={styles.boxicon}
        />
        <div className={styles.coincontent}>
          <div className={styles.coinsymbol}>USDT</div>
          <div className={styles.coinname}>Tether</div>
        </div>
        <div className={styles.coinbalance}>1,402.00</div>
        <Image src='/arrow-down.svg' alt='Coin list dropdown' width={28} height={28} className={styles.dropdown} />
      </div>

      <button className={styles.button}>Subscribe</button>

      <div className={styles.hint}>By confirming your subscription you allow Company to charge you for this payment and future payments. Payments processed on-chain.</div>
    </div>
  )
}

export default Checkout