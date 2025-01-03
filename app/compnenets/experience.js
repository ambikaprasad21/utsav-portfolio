import styles from "./experience.module.css";

export default function Experience() {
  return (
    <div className={styles.container} id="experience">
      <h2>Experiences</h2>
      <div className={styles.e_item}>
        <div className={styles.exp}>
          <img src="/images/cashcry.png" alt="cashcry" width={300} />
          <div className={styles.e_t}>
            <div>Product Analyst</div>
            <div>June 2024 – July 2024</div>
          </div>
        </div>
        <div className={styles.exp}>
          <img src="/images/cooliewale.svg" alt="cooliewale" width={100} />
          <div className={styles.e_t}>
            <div>Ex-founder</div>
            <div>December 2022 – May 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}
