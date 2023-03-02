import styles from "./About.module.css"
import { WorkCard } from "../../components"

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>About</h1>
      <div className={styles.workContainer}>
        <WorkCard 
          title="Founding Engineer" 
          company="JOYWORLD, Inc." 
          date="June 2021 - Jan. 2022"
          containerHeight="400"
          img="./joyworldLogo.jpg"
          location="Oswego, OR (REMOTE)"
          description={[
            "Developed user friendly Web3 Marketplace utilizing OpenSea API.",
            "Utilize Fullstack development to create a fully functioning Web3 Application including frontend with Next.js and backend with Deno, AWS and MongoDB.",
            "Design reusable functional components for ease of development.",
            "Integrate Web3 Providers and Wallets to allow user transactions on Ethereum Network.",
            "Created testnet Smart Contract and designed testing architecture using Rinkeby to brainstorm a fun way for users to purchase NFT's.",
            "Managed Git workflow between multiple developers."]} />
        <WorkCard 
          title="Web3 Frontend Engineer" 
          company="Upstate Interactive" 
          date="June 2021 - Sept. 2022"
          containerHeight="300"
          img="./upstateInteractiveLogo.png"
          location="Syracuse, NY (REMOTE)"
          description={[
            "Create mobile optimized web pages from given wireframe designs.",
            "Utilize Web3 technology to connect web app to smart contract to enable Ethereum Network transactions.",
            "Apply functional components to application for mapping NFTs to dedicated components/pages.",
            "Leverage Web3, Ethereum, ERC-721 and Smart Contract knowledge to build functional applications."
          ]} />
        {/* <WorkCard 
          title="Lead Loan Analyst" 
          company="PNC Bank" 
          date="Dec. 2018 - June 2021"
          img="./pngLogo.png"
          location="Pittsburgh, PA"
          containerHeight="200"
          description={[
            "Review applications and calculate loan criteria per underwriting guidelines.",
            "Adapt to procedural changes to maintain efficient work flow through corporate expansion.",
            "Assist in training new employees and ensuring knowledge of process and procedure."
          ]} /> */}
        <div className={styles.techStack}>
          <h1>Tech Stack</h1>
          <div className={styles.techHero}>
            <div className={styles.column}>
              <h2>Frontend</h2>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>SASS/CSS</li>
                <li>Three.js</li>
                <li>Ethers.js</li>
                <li>Web3 Libraries</li>
                <li>Wallet Providers</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h2>Backend</h2>
              <ul>
                <li>Node.js</li>
                <li>Deno.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>GraphQL</li>
                <li>Heroku</li>
                <li>CI/CD</li>
                <li>REST API</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h2>Other</h2>
              <ul>
                <li>Solidity</li>
                <li>Figma</li>
                <li>Git/GitHub</li>
                <li>Web3 Providers</li>
                <li>Jira</li>
                <li>L2 Protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About