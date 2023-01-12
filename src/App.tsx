import { Routes, Route } from "react-router-dom"
import './App.css';
import { Navbar } from './components';
import { About, Home, Projects, Web3 } from './pages';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: "_25tEa5bW5AAMwCLdZ39pfcDEvqc8KrO" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'JT Portfolio',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/web3" element={<Web3 />} />
          </Routes>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
