import React from 'react';
import styles from './Projects.module.css';
import { getImageUrl } from "../../utils";
import { FaAngleRight } from 'react-icons/fa';

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <p>These are some of my projects coming soon.</p>
      <div className={styles.wrapper}>
        <section className={styles.projectsWrapper}>
          <article>
            <a href="#" className={styles.place}>
              <img className={styles.image} src={getImageUrl("images/pic04.jpg")} alt="" />
            </a>
            <h3 className={styles.projectTitle}>Sed feugiat lorem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
            <a href="#" className={styles.special}>
              <span className={styles.learnMoreBtn}><FaAngleRight/></span> Learn more
            </a>
          </article>
          <article>
            <a href="#" className={styles.place}>
              <img className={styles.image}src={getImageUrl("images/pic05.jpg")} alt="" />
            </a>
            <h3 className={styles.projectTitle}>Nisl placerat</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
            <a href="#" className={styles.special}>
              <span className={styles.learnMoreBtn}><FaAngleRight/></span> Learn more
            </a>
            
          </article>
        </section>
        <ul className={styles.place}>
          <li><a href="projects.html" className={styles.btn}>Browse All</a></li>
        </ul>
      </div>
    </section>
  )
}