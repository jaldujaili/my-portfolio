import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl("about/meHarryPotter.jpeg")} className={styles.image} alt="image of me"/>
      <footer id="contact" className={styles.innerContainer}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <FaMailBulk className={styles.icon}/>
            <a href="mailto:jordan415_dc@yahoo.com">myemail@email.com</a>
          </li>
          <li className={styles.link}>
            <FaLinkedin className={styles.icon}/>
            <a href="https://www.linkedin.com/in/jaldujaili/">linkedin.com/jaldujaili</a>
          </li>
          <li className={styles.link}>
            <FaGithub className={styles.icon}/>
            <a href="https://github.com/jaldujaili">github.com/jaldujaili</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};