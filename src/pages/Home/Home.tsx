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
        <h2>I specialize in building clean and efficient web applications and I have a passion for creating Web3 dApps.</h2>
        <div className={styles.buttonContainer}>
          <Button text="Learn More" link="/about" external={false} />
        </div>
      </div>
    </div>
  )
}

export default Home