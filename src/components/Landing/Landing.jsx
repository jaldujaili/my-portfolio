
import { getImageUrl } from '../../utils'
import styles from './Landing.module.css'

export const Landing = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jordan</h1>
        <p className={styles.description}>I am a full-stack developer with 5 years of experience with Javascript, Java, and Python</p>
        <a href="mailto:jordan415_dc@yahoo.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("about/meHarryPotter.jpeg")} className={styles.image} alt="image of me"/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}