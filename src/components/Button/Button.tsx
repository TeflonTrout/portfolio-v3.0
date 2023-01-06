import { Link } from "react-router-dom";
import styles from "./Button.module.css"

interface ButtonProps {
    text: string;
    link?: string;
}

const Button = (props: ButtonProps) => {
  return (
    <div className={styles.button}>
        {props.link
        ? <Link to={props.link}><p>{props.text}</p></Link>
        : <p>{props.text}</p>}
    </div>
  )
}

export default Button