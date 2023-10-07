import React from "react";
import styles from "./footer.module.css";

let date = new Date();
let year = date.getFullYear();

function Page() {
  return (
    <footer className={styles.footer}>
      All Rights © Reserved Copyright For Askander {year}
    </footer>
  );
}

export default Page;
