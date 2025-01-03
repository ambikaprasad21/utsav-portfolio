import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.f_h}>Get In Touch</p>
      <p className={styles.f_t}>
        My core competency is in creation. I can spend the rest of my life
        solving problems that are at the look of it, simple, yet still need you
        to leverage first principle thinking and calculated experiments.{" "}
        <span className={styles.mail}>utsavofficial150102@gmail.com</span>.
      </p>
      <div className={styles.f_b}>
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
        <span className={styles.f_n}>Utsav Kumar</span> using{" "}
        <i className="fab fa-react"></i>
      </div>
    </div>
  );
}
