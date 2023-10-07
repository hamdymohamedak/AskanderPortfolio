"use client";
import React from "react";
import styles from "./btn.module.css";

function btn(props) {
  return (
    <button
      onClick={() => {
        window.open(props.social);
      }}
      className={styles.btn}
    >
      {props.title}
    </button>
  );
}

export default btn;
