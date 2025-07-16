import React from "react";
import styles from "./style/SectionTwo.module.css";

export default function SectionTwo() {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.mobileglow}>
        <div className={styles.glowtop}></div>
        <div className={styles.glowbottom}></div>
      </div>
      <section className={styles.section}>
        <div className={styles.leftcontent}></div>
        <div className={styles.rightcontent}>
          <h2>About Me</h2>
          <p>
            A <strong>Fullstack Web Developer</strong> and{" "}
            <strong>Game Developer </strong>
            with a passion for building interactive{" "}
            <strong>web applications</strong> and
            <strong> games</strong>, covering both <strong>frontend</strong> and{" "}
            <strong>backend </strong>
            development. Skilled in a wide range of technologies such as{" "}
            <strong>Next.js</strong>,<strong> Node.js</strong>,{" "}
            <strong>React</strong>, <strong>Laravel</strong>, and
            <strong> Three.js</strong>, as well as experienced in game creation
            using
            <strong> Unity</strong> or <strong>Godot</strong>. Dedicated to
            delivering
            <strong> functional</strong>, <strong>visually appealing</strong>,
            and
            <strong> user-friendly</strong> digital experiences.
          </p>
          <a
            href="https://drive.google.com/file/d/1ISMNtjpo9eRhwj-m7FbBtkkOsZUcXLXc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            View CV
          </a>
        </div>
      </section>
    </div>
  );
}
