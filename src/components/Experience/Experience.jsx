import React from "react";

import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json";
import { FaReact, FaJs, FaJava,  FaSwift, FaHtml5, FaCss3, FaPython } from "react-icons/fa";
import { GoRuby } from "react-icons/go";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <FaJava className={styles.skill}/>
          <FaJs className={styles.skill}/>
          <FaPython className={styles.skill}/>
          <GoRuby className={styles.skill}/>
          <FaReact className={styles.skill}/>
          <FaSwift className={styles.skill}/>
          <FaHtml5 className={styles.skill}/>
          <FaCss3 className={styles.skill}/>
        </div>
      </div>
    </section>
  );
};