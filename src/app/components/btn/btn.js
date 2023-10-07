import React from 'react'
import styles from "./btn.module.css"
function btn(props) {
  return (
    <button className={styles.btn}>{props.title}</button>
  )
}

export default btn