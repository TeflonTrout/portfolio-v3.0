import styles from "./About.module.css"
import { Button, WorkCard } from "../../components"

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>Previous Roles</h1>
      <div className={styles.workContainer}>
        <WorkCard 
          title="Founding Engineer" 
          company="JOYWORLD, Inc." 
          date="June 2021 - Jan. 2023"
          containerHeight="470"
          img="./joyworldLogo.jpg"
          location="Oswego, OR"
          description={[
            "Designed, built and maintained Web3 NFT Marketplace platform using cutting-edge technologies such as Next.js, GraphQL, and Typescript.",
            "Collaborated with the team to implement new features and improve existing ones, utilizing design tools such as Figma to bring ideas to life.",
            "Conducted research and evaluated new technologies and tools to enhance platform functionality and user experience.",
            "Demonstrated expertise in Web3 and blockchain technologies, particularly Ethereum, through the successful delivery of high-quality and scalable software products.",
            "Showcased strong knowledge of smart contract development using Solidity and experience in integrating GraphQL API's.",
            "Exhibited strong communication and collaboration skills, able to work effectively with both technical and non-technical stakeholders."]} />
        <WorkCard 
          title="Front-End Web3 Engineer" 
          company="Upstate Interactive" 
          date="June 2021 - Sept. 2022"
          containerHeight="300"
          img="./upstateInteractiveLogo.png"
          location="Syracuse, NY"
          description={[
            "Create mobile optimized web pages from given wireframe designs.",
            "Utilize Web3 technology to connect web app to smart contract to enable Ethereum Network transactions.",
            "Apply functional components to application for mapping NFTs to dedicated components/pages.",
            "Leverage Web3, Ethereum, ERC-721 and Smart Contract knowledge to build functional applications."
          ]} />
        <WorkCard 
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
          ]} />
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
          <div className={styles.buttonContainer}>
            <Button text="See My Work" link="/projects" external={false} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About