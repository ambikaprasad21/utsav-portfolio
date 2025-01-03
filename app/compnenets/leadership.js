import Carousel from "./carousel";
import styles from "./leadership.module.css";

export default function Leadership() {
  return (
    <div className={styles.l_c}>
      <h2>Leadership</h2>
      <div className={styles.c}>
        <div className={styles.para}>
          I led a project to develop an SQL-based analysis of ride-sharing data
          for the Namma Yatri platform using MySQL Workbench, focusing on trip
          metrics, earnings, and driver performance. I guided a team in crafting
          innovative queries to uncover insights into customer behavior, payment
          methods, and driver efficiency. My leadership in evaluating key
          metrics like cancellation rates and search-to-booking conversion
          helped identify critical areas for operational improvement.
          Additionally, I oversaw the analysis of trip distributions by time and
          location, driving a data-driven approach that optimized platform
          operations, enhanced customer experience, and boosted revenue
          generation.
        </div>
        <div className={styles.slider}>
          <Carousel />
        </div>
      </div>
    </div>
  );
}
