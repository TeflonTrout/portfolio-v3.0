import styles from "./ProjectCard.module.css"

interface CardProps {
    title: string;
    img: string;
    stack: string[];
    description: string;
}

const ProjectCard = (props: CardProps) => {
  return (
    <div className={styles.projectCard}>
        <div className={styles.heading}>
            <img src="" alt="project sample" />
            <h1>{props.title}</h1>
        </div>
        <div className={styles.techStack}>
            {props.stack.map(tech => (
                <h4 key={tech}>{tech}</h4>
            ))}
        </div>
        <div className={styles.description}>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ProjectCard