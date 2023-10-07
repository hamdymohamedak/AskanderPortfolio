"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import HomeImg from "../../LogoWithoutBg.svg";
import Link from "next/link";

const Cards = lazy(() => import("../cards/page"));
const Button = lazy(() => import("../btn/btn"));

function Home() {
  const [toTopBtnStyle, setToTopBtnStyle] = useState({ display: "none" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setToTopBtnStyle({ display: "block" });
      } else {
        setToTopBtnStyle({ display: "none" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollZero = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Suspense fallback={<div>Loading...</div>} key="home-suspense">
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
            <Button title="Contact" social="https://www.facebook.com/hamdy.elgokar.5"/>
          </div>
        </div>

        <div className={styles.rightTitle} aria-label="Nder">
          <span>n</span>
          <span>d</span>
          <span>e</span>
          <span>r</span>
        </div>
      </section>
      <marquee style={{ fontWeight: "bold" }}>
        Askander supports Palestine🇵🇸💙
      </marquee>
      {/* Button to scroll to the top */}
      <button
        onClick={scrollZero}
        style={toTopBtnStyle}
        className={styles.toTopBtn}
      >
        🡅
      </button>
    </Suspense>
  );
}

export default Home;
