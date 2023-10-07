import React from "react";
import styles from "./work.module.css";

function workCards(props) {
  let date = new Date();
  let year = date.getFullYear();
  let day = date.getDay() + 8;
  let month = date.getMonth() + 1;
  return (
    <div className={styles.card}>
      <img style={{ borderRadius: "20%" }} src={props.imgLink} alt="logo" />
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.card_inner}>
        <div style={{ textAlign: "end" }}>
          {day}/{month}/{year}
        </div>
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
