import { useState } from "react";
import styles from "./WorkCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-regular-svg-icons"

interface WorkCardProps {
    title: string;
    company: string;
    location: string;
    date: string;
    img?: string;
    containerHeight: string;
    description: string[];
}

const WorkCard = (props: WorkCardProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.workCard} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.heading}>
            <img src={props.img} alt="logo" width={100}/>
            <div className={styles.jobContainer}>
                <h1>{props.title}</h1>
                <h2>{props.company}</h2>
                <h4 className={styles.date}>{props.date}</h4>
                <h4 className={styles.location}>{props.location}</h4>
            </div>
            <div style={isOpen 
                    ? {fontSize: "20px", marginLeft: "auto", marginRight: "20px", transition: "0.25s ease-in-out", transform: "rotate(180deg)"} 
                    : {fontSize: "20px", marginLeft: "auto", marginRight: "20px", transition: "0.25s ease-in-out"}}>
                <FontAwesomeIcon className={styles.icon} icon={faCaretSquareDown} size={window.innerWidth > 600 ? "xl" : "sm" } /> 
            </div>
        </div>
        <div className={styles.description} 
            style={isOpen 
                ? {transition: "0.25s ease-in", height: `${props.containerHeight}px`} 
                : {transition: "0.25s ease-in", height: "0px", overflow: 'hidden'}}>
            <h4 style={isOpen ? {transition: "opacity 0.5s ease-in"} : {opacity: 0, transition: "opacity 0.5s ease-in"}}>
                Job Function:
            </h4>
            {props.description.map((bullet, idx) => (
                <p key={idx} 
                    style={isOpen 
                        ? {transition: "opacity 0.5s ease-in"} 
                        : {opacity: 0, transition: "opacity 0.5s ease-in"}}>
                    - {bullet}
                </p>
            ))}
        </div>
    </div>
  )
}

export default WorkCard