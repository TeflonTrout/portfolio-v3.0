import { useState } from "react";
import styles from "./Web3.module.css"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi";
import { Button } from "../../components";
import { CONTRACT_ABI } from "../../utils/soulboundToken";
import { ethers } from "ethers";

const Web3 = () => {
  const [tokenGateOpen, setTokenGateOpen] = useState<boolean>(false);
  const [hash, setHash] = useState<`0x${string}`>("0x");
  const { address } = useAccount();

  const { refetch } = useContractRead({
    address: '0xD3a58333391f019f2cB1f3e91d9c0Fb558dA538E',
    abi: CONTRACT_ABI,
    functionName: 'balanceOf',
    args: [address],
    onSuccess(data:any) {
      console.log("Checking isOwner")
      const isSoulboundOwner:number = ethers.BigNumber.from(data).toNumber()
      if(isSoulboundOwner === 1) {
        setTokenGateOpen(true);
      }else {
        setTokenGateOpen(false);
      }
    }
  })

  const { config } = usePrepareContractWrite({
    address: '0xD3a58333391f019f2cB1f3e91d9c0Fb558dA538E',
    abi: CONTRACT_ABI,
    functionName: 'safeMint',
    args: [address, ""],
    onError(error){
      console.log(error)
    }
  })
  const { write } = useContractWrite({
    ...config,
    onSuccess(data){
      refetch?.()
      setHash(data?.hash)
    }
  })

  useWaitForTransaction({
    hash: hash,
    onSuccess(){
      console.log("Hash successful, refetching isOwner")
      refetch?.()
    }
  })

  const mintToken = () => {
    write?.()
  }

  return (
    <div className={styles.web3Page}>
      <h1>This Page is Still Under Construction!</h1>
      <div className={styles.hero}>
        <div className={styles.heading}>
          <h1>My Web3 XP</h1>
          <div className={styles.connectWalletContainer}>
            <ConnectButton />
          </div>
        </div>
        <p>To display my experience with Web3 Engineering I've written a soulbound token on the Goerli testnet and token gated this portion of my portfolio! 
          Please connect your wallet and mint a soulbound NFT token.
          &#40;If you need GoerliETH grab some from the Alchemy Faucet!&#41;.
        </p>
        <div className={styles.mintBtn}>
          {tokenGateOpen === false 
            ? <div className={styles.buttonContainer}>
                <div onClick={() => mintToken()}><Button text="Mint" /></div>
                <Button text="Faucet" link="https://goerlifaucet.com/" external={true}/>
            </div> : null}
            <div className={styles.tokenGated}>
              <h1>Token Gate</h1>
              {tokenGateOpen === true ? 
                <p>Token Gate Open! Once finalized, this page will showcase some of my Web3 Experience.</p>
                : <p>You don't own the proper token. Please connect your wallet and mint a Soulbound JTK Token!</p>}
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Web3