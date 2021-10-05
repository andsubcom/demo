import { useSubscriptionInfo, useIsAccountSubscribed } from 'src/hooks'
import styles from 'styles/Checkout.module.css'


const Checkout = () => {
  const account = '0x66814090cCA5f4cFf0262720DC82F640e6E0663f'
  const productId = 0

  // const isSubscribed = useIsAccountSubscribed(account, productId)
  // console.log(`${account} is subscribed = ${isSubscribed}`)

  const info = useSubscriptionInfo(productId)
  console.log(`useSubscriptionInfo = ${JSON.stringify(info)}`)

  return (
    <div>
      <p style={{ fontSize: '48px' }}>Checkout page</p>
    </div>
  )
}

export default Checkout