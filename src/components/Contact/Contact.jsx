import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
    return(
        <footer id="contact" className={styles.container}>
            <div className={styles.text}><h2>Contact</h2><p>Feel free to reach out!</p></div>
            <ul className={styles.links}>
                <li className={styles.link}>
                <a href="mailto:justinilao@hotmail.com"><img src={getImageUrl("Images/emailIcon.png")} alt="Email Icon"  className={styles.nameimg} /></a>
                </li>
                <li className={styles.link}>
                <a href= "https://www.linkedin.com/in/ilaojustin/"><img src={getImageUrl("Images/linkedinIcon.png")} alt="Linkedin Icon"  className={styles.nameimg} /> </a>
                </li>
                <li className={styles.link}>
                <a href="https://github.com/JustinIlao"><img src={getImageUrl("Images/githubIcon.png")} alt="Github Icon"  className={styles.nameimg} /></a>
                </li>
            </ul>
        </footer>

    )

}