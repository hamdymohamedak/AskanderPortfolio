"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import HomeImg from "../../LogoWithoutBg.svg";
// const Cards = lazy(() => import("../cards/page"));
import Cards from "../cards/page";
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
    <Suspense
      fallback={<div className={styles.loading}></div>}
      key="home-suspense"
    >
      <section className={styles.homeSec}>
        <h1 className={styles.centerLine}></h1>

        <h2 className={styles.leftTitle} aria-label="Askander">
          <span>a</span>
          <span>s</span>
          <span>k</span>
          <span>a</span>
        </h2>

        <h3 className={styles.imageContainer}>
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
            <Button
              title="Contact"
              social="https://www.facebook.com/hamdy.elgokar.5"
            />
          </div>
        </h3>

        <h4 className={styles.rightTitle} aria-label="Nder">
          <span>n</span>
          <span>d</span>
          <span>e</span>
          <span>r</span>
        </h4>
      </section>
      <marquee style={{ fontWeight: "bold" }}>
        Askander supports Palestine🇵🇸💙
      </marquee>
      <button
        onClick={scrollZero}
        style={toTopBtnStyle}
        className={styles.toTopBtn}
        aria-label="Scroll to Top"
      ></button>
    </Suspense>
  );
}

export default Home;
