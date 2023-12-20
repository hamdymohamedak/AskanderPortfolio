"use client";
import React from "react";
import { Suspense, lazy } from "react";
import styles from "./work.module.css"; 
const WorkCards = lazy(() => import("./workCards"));
function page() {
  return (
    <section className={styles.sec}>
      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/YBcvtqn/Screenshot-from-2023-10-06-21-34-09.png"
          url="https://to-do-ease.vercel.app/"
          title="ToDoEase"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/drPppPt/Screenshot-from-2023-10-06-21-35-02.png"
          url="https://scannerweb.vercel.app/"
          title="ScannerWeb"
        />
      </Suspense>
      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/B4XNhcC/Screenshot-from-2023-10-06-21-34-24.png"
          url="https://binarytranslator.vercel.app/"
          title="BinaryConverter"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/7byvgPk/Screenshot-from-2023-10-06-21-31-22.png"
          url="https://hamdymohamedak.github.io/WasSender/"
          title="waSender"
        />
      </Suspense>
      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/Zg4Xn5P/Screenshot-from-2023-10-06-21-33-40.png"
          url="https://web-cave.vercel.app/"
          title="webCaveCompany"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/1fy6Y5k/Screenshot-from-2023-10-06-21-31-52.png"
          url="https://hamdymohamedak.github.io/code_minifyer-/"
          title="Css-CodeMinifyer"
        />
      </Suspense>
      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/98k3Tmn/Screenshot-from-2023-10-06-21-32-31.png"
          url="https://hamdymohamedak.github.io/Almotawakel/"
          title="Almotawakel(Rank 1 at Google search)"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/0rVjNqn/Screenshot-from-2023-10-06-21-29-45.png"
          url="https://akgames.vercel.app/"
          title="AkGames"
        />
      </Suspense>
      {/* React Native projects */}


      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/3mLrYnY/password-App-portrait.png"
          url="https://github.com/hamdymohamedak/PassGeneratorApp"
          title="passWordGenerator App"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards 
          imgLink="https://i.ibb.co/LCvvf6G/qrcode-portrait.png"
          url="https://github.com/hamdymohamedak/ReactQRCode"
          title="Qrcode Maker App"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/vZG70dN/scanner2-portrait.png"
          url="https://github.com/hamdymohamedak/scannerApp"
          title="QrCode Scanner App"
        />
      </Suspense>
      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/fCTGP5Y/Mockup.png"
          url="https://elmaram.vercel.app/"
          title="Elmaram Pharmacy"
        />
      </Suspense>
    </section>
  );
}

export default page;