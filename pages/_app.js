import { ChainId, DAppProvider } from '@usedapp/core'
import AppContent from '../components/AppContent'
import '../styles/globals.css'


// web3-react
//
// function getLibrary(provider, connector) {
//   return new ethers.providers.Web3Provider(window.ethereum)
// }
// 
// function App({ Component, pageProps }) {
//   return (
//     <Web3ReactProvider getLibrary={getLibrary}>
//       <AppContent Component={Component} pageProps={pageProps}/>
//     </Web3ReactProvider>
//   )
// }


// usedapp

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    // TODO: replace mainnet url
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
    [ChainId.Ropsten]: `https://eth-ropsten.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
  },
}

function App({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <AppContent Component={Component} pageProps={pageProps}/>
    </DAppProvider>
  )
}

export default App