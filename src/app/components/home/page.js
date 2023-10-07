"use client";
import { lazy, Suspense } from "react";
import Image from "next/image";
import styles from "./home.module.css";
const Cards = lazy(() => import("../cards/page"));
const Button = lazy(() => import("../btn/btn"));
import HomeImg from "../../LogoWithoutBg.svg";
import Link from "next/link";

let handleClickAtBtnContact = () => {
  window.open("https://www.facebook.com/hamdy.elgokar.5");
};

function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className={styles.homeSec}>
        <div className={styles.centerLine}></div>

        <div className={styles.leftTitle} aria-label="Askander">
          <span>a</span>
          <span>s</span>
          <span>k</span>
          <span>a</span>
        </div>

        <div className={styles.imageContainer}>
          <Image
            onClick={() => {
              window.location.reload();
            }}
            className={styles.homeImg}
            src={HomeImg}
            alt="Home Image"
            loading="lazy"
            width={500}
            height={300}
          />

          <div>
            <Button onClick={handleClickAtBtnContact} title="Contact" />
          </div>
        </div>

        <div className={styles.rightTitle} aria-label="Nder">
          <span>n</span>
          <span>d</span>
          <span>e</span>
          <span>r</span>
        </div>
      </section>
      <marquee style={{ fontWeight: "bold" }}>Support Palestine🇵🇸💙</marquee>
    </Suspense>
  );
}

export default Home;
