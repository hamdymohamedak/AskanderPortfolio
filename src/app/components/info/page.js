import { lazy } from "react";
import Image from "next/image";
import styles from "./info.module.css";
import MyLogo from "../../LogoWithoutBg.svg"
function info() {
  return (
    <section className={styles.sec}>
        <div className={styles.title}>
            <h1>Hamdy Mohamed (Askander)</h1>
            <h2>Software Engineer</h2>
            <p>I am a software engineer with a passion for building beautiful and functional websites and applications.</p>
            <p>I have a strong background in computer science and engineering, and I have a passion for building beautiful and functional websites and applications.</p>
        </div>
        <div className={styles.imgParent}>
            <Image loading="lazy" src={MyLogo} alt="Logo"/>
        </div>
    </section>
  )
}

export default info;
