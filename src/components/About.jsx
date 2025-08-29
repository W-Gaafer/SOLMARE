import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <p className={styles.bigTitle}>About</p>
        <p className={styles.paragraph}>
          Welcome to our fragrance world! We specialize in creating and
          marketing high-quality perfumes for both men and women. Our mission is
          to bring you unique scents that enhance your style and leave a lasting
          impression. Our vision is to bring you unique scents that enhance your
          style and leave a lasting impression.
        </p>
        <p className={styles.paragraph}>
          Our vision is to bring you unique scents that enhance your style and
          leave a lasting impression.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="images/about2.jpg" alt="logo img" className={styles.image} />
      </div>
    </section>
  );
}

export default About;
