import { ProjectCard } from "../../components"
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <div className={styles.projectsPage}>
      <h1>Projects</h1>
      <div className={styles.projectGrid}>
        <ProjectCard 
          title="Nolengrad Warriors" 
          img="" 
          stack={["Next.js", "Typescript", "Redux", "Node.js", "Express.js", "MongoDB", "Solidity"]}
          description={"- Fullstack Web3 Application built on Next.js with a custom Solidity contract. The application is an NFT project based on Chainlink's VRF Oracle. The user can connect their wallet and mint a verifiably random NFT."}
        />
        <ProjectCard 
          title="JOYWORLD" 
          img="" 
          stack={["Next.js", "Redux", "GraphQL", "Deno.js", "Node.js", "Vercel", "Ethers.js", "Solidity"]}
          description={"- Utilize Fullstack development to create a fully functioning Web3 Application including frontend with Next.js and backend with Deno.js, AWS and MongoDB."}
        />
        <ProjectCard 
          title="FramePerfectControllers" 
          img="" 
          stack={["Next.js", "CSS", "Material UI", "Vercel", "GraphQL", "API's"]}
          description={"- Designed and Developed landing page for FPC. Application includes '/events' page that displays upcoming events from Start.gg API."}
        />
        <ProjectCard 
          title="Movie Watchlist" 
          img="" 
          stack={["React", "CSS", "Node.js", "Express.js", "MongoDB", "Git"]}
          description={"- Fullstack web app designed as a solution for my friend group to organize movies we want to watch. This is a MERN stack app with data pulled from OMDB."}
        />
      </div>
    </div>
  )
}

export default Projects