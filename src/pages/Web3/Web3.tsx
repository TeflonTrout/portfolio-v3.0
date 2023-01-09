import styles from "./Web3.module.css"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";
import { Button } from "../../components";

const Web3 = () => {
  const { address } = useAccount();
  console.log(address)
  return (
    <div className={styles.web3Page}>
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1>My Web3 XP</h1>
          <div className={styles.connectWalletContainer}>
            <ConnectButton />
          </div>
        </div>
        <p>To display my experience with Web3 Engineering I've written a soulbound token on the Goerli testnet and token gated this portion of my portfolio! 
          Please connect your wallet and mint a soulbound NFT token.
          &#40;It's free, I've written the contract to take the funds out of my GoerliETH address&#41;.
        </p>
        <div className={styles.mintBtn}>
          {address !== undefined ? <Button text="Mint" /> : null}
        </div>
      </div>
    </div>
  )
}

export default Web3