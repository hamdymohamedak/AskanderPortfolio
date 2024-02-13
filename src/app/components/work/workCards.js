import React from "react";
import styles from "./work.module.css";
function workCards(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.mobile}
        style={{ borderRadius: "20%" }}
        src={props.imgLink}
        alt="logo"
      />
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.card_inner}>
        <div style={{ textAlign: "end" }}>{props.title}</div>
      </div>
      <button
        onClick={() => {
          window.open(props.url);
        }}
        className={styles.Dbtn}
      >
        Go
      </button>
    </div>
  );
}

export default workCards;
