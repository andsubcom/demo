import { useContractCall } from '@usedapp/core'
import { Interface } from '@ethersproject/abi'
import ANDSUB_HUB_ABI from 'public/abi/ProductsHub.json'
import { useEthers } from '@usedapp/core'

// TODO: read from config
const ANDSUB_HUB_ADDRESS = process.env.NEXT_PUBLIC_ANDSUB_ADDRESS


export const useSubscriptionInfo = (productId) => {
  const [amount, payableToken, period, organizationId] = useContractCall({
    abi: new Interface(ANDSUB_HUB_ABI),
    address: ANDSUB_HUB_ADDRESS,
    method: 'getSubscriptionInfo',
    args: [productId]
  }) ?? []
  return {
    amount,
    payableToken,
    period,
    organizationId
  }
}

export const useIsAccountSubscribed = (account, productId) => {
  const [isSubscribed] = useContractCall({
    abi: new Interface(ANDSUB_HUB_ABI),
    address: ANDSUB_HUB_ADDRESS,
    method: 'checkUserHasActiveSubscription',
    args: [account, productId]
  }) ?? []
  return isSubscribed
}

export const useIsSubscribed = (productId) => {
  const { account } = useEthers()

  const [isSubscribed] = useContractCall(account && {
    abi: new Interface(ANDSUB_HUB_ABI),
    address: ANDSUB_HUB_ADDRESS,
    method: 'checkUserHasActiveSubscription',
    args: [account, productId]
  }) ?? []
  return isSubscribed
}
