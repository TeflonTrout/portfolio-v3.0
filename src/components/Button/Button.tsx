import { Link } from "react-router-dom";
import styles from "./Button.module.css"

export interface ButtonProps {
    text: string;
    link?: string;
    external?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <div className={styles.button}>
        {props.link && props.external === false
        ? <Link to={props.link}><p>{props.text}</p></Link>
        : props.link && props.external === true
          ? <a href={props.link} target="_blank" rel="noreferrer">{props.text}</a>
          : <p>{props.text}</p>}
    </div>
  )
}

export default Button