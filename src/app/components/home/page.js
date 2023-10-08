"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import HomeImg from "../../LogoWithoutBg.svg";
import Link from "next/link";
import Head from "next/head";
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
      <Head>
        <meta
          property="og:title"
          content="Askander - Front End Developer | Next.js | React Native"
        />
        <meta
          property="og:description"
          content="I'm Askander, a Front End Developer specializing in Next.js and React Native for mobile. Discover my work and expertise."
        />
        <meta
          property="og:image"
          content="https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/384550840_881373160178410_1443430486526755727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=0vP6_Y9LJdgAX8sWIof&_nc_ht=scontent.fcai19-8.fna&oh=00_AfCcrOcEcJwWHJZGZE6akmNHsQ5GeV0pgmlygfSi9k15oQ&oe=6527E27A"
        />
        <meta property="og:url" content="https://askander.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Askander - Front End Developer | Next.js | React Native"
        />
        <meta
          name="twitter:description"
          content="I'm Askander, a Front End Developer specializing in Next.js and React Native for mobile. Discover my work and expertise."
        />
        <meta
          name="twitter:image"
          content="https://twitter.com/HamdyMohamedd1"
        />

        <meta property="og:title" content="Hamdy Mohamed Askander" />
        <meta
          property="og:description"
          content="Learn more about me and my work as a Front End Developer specializing in Next.js and React Native for mobile."
        />
        <meta
          property="og:image"
          content="https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/384550840_881373160178410_1443430486526755727_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=0vP6_Y9LJdgAX8sWIof&_nc_ht=scontent.fcai19-8.fna&oh=00_AfCcrOcEcJwWHJZGZE6akmNHsQ5GeV0pgmlygfSi9k15oQ&oe=6527E27A"
        />
        <meta
          property="og:url"
          content="https://www.facebook.com/hamdy.elgokar.5"
        />

        <link rel="canonical" href="https://askander.vercel.app/" />
      </Head>

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
            <Button
              title="Contact"
              social="https://www.facebook.com/hamdy.elgokar.5"
            />
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
