import Card from "./card";
import styles from "./project.module.css";

const projectData = [
  {
    id: 1,
    img: "./images/teardown.png",
    url: "https://drive.google.com/file/d/1SYYy9ja3KgfysevMDQEf4TIzO9dv8GIt/view",
    name: "Product Teardown - Zepto",
  },
  {
    id: 3,
    img: "./images/uberteardown.png",
    url: "https://drive.google.com/file/d/1l4Ha_T2RG95pUZHboNiXUUruZBrA45cy/view?usp=drivesdk",
    name: "Product Teardown - Uber",
  },
  {
    id: 2,
    img: "./images/competanalysis.png",
    url: "https://drive.google.com/file/d/1kvduefGgJpJZOlKEWwW0kPYYRUwRp9Ts/view?usp=drivesdk",
    name: "Competitive Analysis - Paytm",
  },
];

export default function Project() {
  return (
    <div className={styles.container} id="projects">
      <h2>Recent Projects</h2>
      <div className={styles.p_c}>
        {projectData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
