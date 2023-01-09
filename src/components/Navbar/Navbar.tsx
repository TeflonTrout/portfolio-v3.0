import { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faXmarkCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function useOutsideAlerter(ref:any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event:any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className={styles.container} ref={wrapperRef}>
      <div className={isOpen ? styles.hamburgerIconClosed : styles.hamburgerIcon} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={isOpen ? styles.navigation : styles.navigationClosed}>
        <div className={styles.closeBtn} onClick={() => setIsOpen(!isOpen)}>
        <span><FontAwesomeIcon icon={faXmarkCircle} width="40px"/></span>
        </div>
        <div className={styles.linkContainer}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <h3>Home</h3>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <h3>About</h3>
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            <h3>Projects</h3>
          </Link>
          <Link to="/dapps" onClick={() => setIsOpen(false)}>
            <h3>Web3 XP</h3>
          </Link>
          <div className={styles.socials}>
            <a href="/">
              <h3>Resume&nbsp;<FontAwesomeIcon icon={faDownload} size="sm" color='#102b3fff'/></h3>
            </a>
            <div className={styles.icons}>
              <a href="https://github.com/teflontrout" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className={styles.faIcon} size="xl" color='white'/>
              </a>
              <a href="https://linkedin.com/in/jtkazousky" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className={styles.faIcon} size="xl" color='white'/>
              </a>
              <a href="mailto:jtkazo@gmail.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className={styles.faIcon} size="xl" color='white'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar