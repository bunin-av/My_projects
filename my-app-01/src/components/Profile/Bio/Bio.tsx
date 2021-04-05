import React from "react";
import styles from "./Bio.module.scss"

const Bio = () => {
  return <div className={styles.Bio}>
    <h3>Alex B.</h3>
    <ul>
      <li>Date of Birth: 05.05.1990</li>
      <li>City: Moscow</li>
      <li>Web-site: none</li>
    </ul>
  </div>
}

export default Bio;