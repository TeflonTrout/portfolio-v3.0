import { ProjectCard } from "../../components"
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <div className={styles.projectsPage}>
      <h1>Projects</h1>
      <div className={styles.projectGrid}>
        <ProjectCard 
          title="Nolengrad Warriors" 
          img="./NGW.png" 
          link="https://nolengrad-warriors.vercel.app/"
          stack={["Next.js", "Typescript", "Redux", "Node.js", "Express.js", "MongoDB", "Solidity"]}
          description={"- Fullstack Web3 Application built on Next.js with a custom Solidity contract. The application is an NFT project based on Chainlink's VRF Oracle. The user can connect their wallet and mint a verifiably random NFT."}
          buttons={[
            {text: "Frontend Code", link: "https://github.com/TeflonTrout/nolengrad-warriors-frontend", external: true},
            {text: "Backend Code", link: "https://github.com/TeflonTrout/nolengrad-warriors-server", external: true},
            {text: "Smart Contract", link: "https://goerli.etherscan.io/address/0x4B6Fde23Bb4224A3c57450C89902d48bB23f8819", external: true}
          ]}
        />
        <ProjectCard 
          title="JOYWORLD" 
          img="./joyworld.png" 
          link="https://joy.world"
          stack={["Next.js", "Redux", "GraphQL", "Deno.js", "Node.js", "Vercel", "Ethers.js", "Solidity"]}
          description={"- Utilize Fullstack development to create a fully functioning Web3 Application including frontend with Next.js and backend with Deno.js, AWS and MongoDB."}
          buttons={[]}
          privateCode={true}
        />
        <ProjectCard 
          title="Frame Perfect Controllers" 
          img="./fpc.png" 
          link="https://wavedash.tech"
          stack={["Next.js", "CSS", "Material UI", "Vercel", "GraphQL", "API's"]}
          description={"- Designed and Developed landing page for FPC. Application includes '/events' page that displays upcoming events from Start.gg API."}
          buttons={[
            {text: "Frontend Code", link: "https://github.com/TeflonTrout/fpc", external: true}
          ]}
        />
        <ProjectCard 
          title="Movie Watchlist" 
          img="movieWishlist.png" 
          link="https://tdi-wishlist.netlify.app/"
          stack={["React", "CSS", "Node.js", "Express.js", "MongoDB", "Git"]}
          description={"- Fullstack web app designed as a solution for my friend group to organize movies we want to watch. This is a MERN stack app with data pulled from OMDB."}
          buttons={[
            {text: "Frontend Code", link: "https://github.com/TeflonTrout/movie-wishlist-client", external: true},
            {text: "Backend Code", link: "https://github.com/TeflonTrout/movie-wishlist-server", external: true}
          ]}
        />
      </div>
    </div>
  )
}

export default Projects