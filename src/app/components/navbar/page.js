import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.listParent}>
        {Array.from({ length: 6 }, (_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
