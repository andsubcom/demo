import { useContractCall, useEthers } from '@usedapp/core'
import { Interface } from '@usedapp/core/node_modules/@ethersproject/abi'
import styles from '../styles/Checkout.module.css'


const HUB_ADDRESS = '0xF61C6cD6FEa4E407651d94837816aD0f8be350E5'
const ABI = [
  `function checkUserHasActiveSubscription(address user, uint256 subscriptionId) external view returns(bool)`
]


function useIsAccountSubscribed(hubAddress, account, productId) {
  const [isSubscribed] = useContractCall({
    abi: new Interface(ABI),
    address: hubAddress,
    method: 'checkUserHasActiveSubscription',
    args: [account, productId]
  }) ?? []
  return isSubscribed
}

const Checkout = () => {
  const account = '0x66814090cCA5f4cFf0262720DC82F640e6E0663f'
  const isSubscribed = useIsAccountSubscribed(HUB_ADDRESS, account, 0)
  console.log(`${account} is subscribed = ${isSubscribed}`)

  return (
    <div>
      <p style={{ fontSize: '48px' }}>Checkout page</p>
    </div>
  )
}

export default Checkout