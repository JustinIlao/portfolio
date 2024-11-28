import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey, I'm Justin</h1>
            <p className={styles.description}>I am a Networking and IT Security student at Ontario Tech University.</p>
            <a href="mailto:justinilao@hotmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("Images/heroImage.png")} alt="Hero image" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.topBlur} />
    </section>;



}