"use client";
import React from "react";
import { Suspense, lazy } from "react";
import styles from "./work.module.css";
const WorkCards = lazy(() => import("./workCards"));
function page() {
  return (
    <section className={styles.sec}>
      <Suspense fallback={ <div className={styles.loading}></div> }>
        <WorkCards
          imgLink="https://i.ibb.co/YBcvtqn/Screenshot-from-2023-10-06-21-34-09.png"
          url="https://to-do-ease.vercel.app/"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/drPppPt/Screenshot-from-2023-10-06-21-35-02.png"
          url="https://scannerweb.vercel.app/"
        />
      </Suspense>
      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/B4XNhcC/Screenshot-from-2023-10-06-21-34-24.png"
          url="https://binarytranslator.vercel.app/"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/7byvgPk/Screenshot-from-2023-10-06-21-31-22.png"
          url="https://hamdymohamedak.github.io/WasSender/"
        />
      </Suspense>
      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/Zg4Xn5P/Screenshot-from-2023-10-06-21-33-40.png"
          url="https://web-cave.vercel.app/"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/1fy6Y5k/Screenshot-from-2023-10-06-21-31-52.png"
          url="https://hamdymohamedak.github.io/code_minifyer-/"
        />
      </Suspense>
      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/98k3Tmn/Screenshot-from-2023-10-06-21-32-31.png"
          url="https://hamdymohamedak.github.io/Almotawakel/"
        />
      </Suspense>

      <Suspense fallback={<div className={styles.loading}></div>}>
        <WorkCards
          imgLink="https://i.ibb.co/0rVjNqn/Screenshot-from-2023-10-06-21-29-45.png"
          url="https://akgames.vercel.app/"
        />
      </Suspense>
    </section>
  );
}

export default page;
