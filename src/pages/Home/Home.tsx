import { useState } from "react";
import { Button } from "../../components"
import styles from "./Home.module.css"

const Home = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        {isLoaded ? null : <div className={styles.profileSkeleton}></div>}
        <img src="/profile.jpg" alt="profile" width={200} height={200} style={isLoaded ? {} : {display: 'none'}} onLoad={() => setIsLoaded(true)}/>
        <h1>Howdy! My name is J.T. Kazousky and I am a Fullstack Engineer.</h1>
        <h4>Experienced Founding Engineer with a demonstrated history of delivering high-quality scalable software products using cutting-edge technologies. Strong expertise in Web3 and blockchain technologies, particularly Ethereum.
          Adept at collaborating with cross-functional teams and contributing to the growth of the engineering team.
        </h4>
        <div className={styles.buttonContainer}>
          <Button text="Learn More" link="/about" external={false} />
          <Button text="See Projects" link="/projects" external={false} />
        </div>
      </div>
    </div>
  )
}

export default Home