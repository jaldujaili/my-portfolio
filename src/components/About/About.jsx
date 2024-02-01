import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { FaMousePointer, FaServer } from "react-icons/fa";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>
      <div className={styles.content}>
        <div className={styles.items}>
          <img
            src={getImageUrl("about/meCambodia.jpeg")}
            alt="Me traveling"
            className={styles.image}
          />
          <span>
          Jordan, an adventure enthusiast, relishes in traveling, hiking, and snowboarding. 
          Their faithful dog is a constant companion, be it on trails or at home. Leisure 
          time is filled with video games and laughter-filled gatherings with friends, embodying a 
          life of balance and joyous escapades.
          </span>
        </div>

        <ul className={styles.items}>
          <li className={styles.item}>
            <FaMousePointer className={styles.icon}/>
            <div className={styles.itemText}>
              <h3>Frontend Developer</h3>
              <p>
                As a Front-End Developer, I excel in developing responsive,
                optimized websites using Vanilla JavaScript and React. 
                My portfolio highlights my commitment to creating seamless user 
                experiences and robust site functionality, showcasing my expertise
                and attention to detail.            
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <FaServer className={styles.icon}/>
            <div className={styles.itemText}>
              <h3>Backend Developer</h3>
              <p>
                With a background in back-end development, I specialize in creating fast,
                optimized systems and APIs. My work demonstrates a strong focus on 
                efficiency and scalability, ensuring robust and responsive solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
