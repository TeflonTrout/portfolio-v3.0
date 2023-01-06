import { Button } from "../../components"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <img src="/profile.jpg" alt="profile" width={200} height={200}/>
        <h1>Howdy! My name is J.T. Kazousky and I am a Fullstack Engineer.</h1>
        <h2>I specialize in building clean and efficient web applications and I have a passion for creating Web3 dApps.</h2>
        <Button text="Learn More" link="/about" />
      </div>
    </div>
  )
}

export default Home