import React, { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  

  return (
    <section
      ref={aboutRef}
      className={`${styles.container} ${isInView ? styles.visible : ""}`}
      id="about"
    >
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("Images/cursorIcon.png")} alt="Cursor" className={styles.imgic}/>
            <div className={styles.aboutItemText}>
              <h3>IT Specialist</h3>
              <p>Through working on computers throughout my life, I have developed a deep understanding of operating systems, like Windows and Linux.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("Images/serverIcon.png")} alt="Server" className={styles.imgic} />
            <div className={styles.aboutItemText}>
              <h3>Networking Engineer</h3>
              <p>As a student in the Networking and IT Security program at Ontario Tech University, I have honed my skills in networking theory and hands-on practice through practical coursework on Ontario Tech's state of the art Cisco Lab.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("Images/cyberIcon.png")} alt="Cursor2" className={styles.imgic} />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Enthusiast</h3>
              <p>Cybersecurity is not just my field of study - it's a personal passion. I actively learn by engaging with podcasts, reading books, and experimenting in my dedicated homelab.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
