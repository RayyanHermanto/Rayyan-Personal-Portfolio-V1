import React from "react";
import styles from "./style/SectionOne.module.css";

export default function SectionOne() {
  return (
    <section className={styles.section}>
      <div className={styles.leftcontent}>
        <h2 className={styles.minitext}>Hello! I'm</h2>
        <p className={styles.bigtext}>
          Rayyan Syahbani<br></br> Hermanto
        </p>
      </div>

      <div className={styles.rightcontent}>
        <h2>Fullstack Web Developer</h2>
        <h2>&</h2>
        <h2>Game Developer</h2>
      </div>
    </section>
  );
}
