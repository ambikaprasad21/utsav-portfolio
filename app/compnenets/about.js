import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container} id="aboutme">
      <div className={styles.image_cont}>
        <img src="/images/utsav.jpg" alt="profile_photo" />
      </div>
      <div className={styles.a_t}>
        <h2>About Me</h2>
        <p>
          I&apos;m Utsav Gupta, a final-year B.Tech student at MNNIT Allahabad,
          passionate about entrepreneurship, startups, and product management.
          I&apos;m focused on creating businesses that can make a positive
          impact and tap into India&apos;s untapped market. I enjoy
          brainstorming, analyzing businesses, and staying updated on market
          trends. Product management excites me as I aim to bring innovative
          products to market that meet customer needs. I believe in lifelong
          learning and constantly improving to stay ahead in my field.
        </p>

        <a
          href="https://drive.google.com/file/d/1kv12OS4RVqoDDBhShqH9Djt3JvVV16BI/view?usp=drivesdk"
          target="_blank"
        >
          <button className={styles.resume}>Resume</button>
        </a>
      </div>
    </div>
  );
}
