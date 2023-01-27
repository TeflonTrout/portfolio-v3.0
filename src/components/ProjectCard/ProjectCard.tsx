import styles from "./ProjectCard.module.css"
import { Button } from "../index"
import { ButtonProps } from "../Button/Button";

interface CardProps {
    title: string;
    img: string;
    stack: string[];
    description: string;
    link: string;
    buttons?: ButtonProps[];
    privateCode?: boolean;
}

const ProjectCard = (props: CardProps) => {
  return (
    <div className={styles.projectCard}>
        <div className={styles.heading}>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={props.img} alt="project sample" />
            </a>
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
        <div className={styles.buttonContainer}>
            {props.buttons?.map((button: any) => (
                <Button text={button.text} link={button?.link} external={button.external}/>
            ))}
            {props.privateCode ? <Button text="This code is private but you can view the site here!" link="/" external={true} /> : null}
        </div>
    </div>
  )
}

export default ProjectCard