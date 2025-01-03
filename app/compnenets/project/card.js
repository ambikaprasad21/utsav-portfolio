import styles from "./card.module.css";

export default function Card({ project }) {
  return (
    <div className={styles.container}>
      <a href={project.url} target="_blank" className={styles.lang}>
        <img src={project.img} alt="teardown project" />
        <p className={styles.name}>{project.name}</p>
      </a>
    </div>
  );
}
