"use client";
import { useState, useEffect } from "react";
import styles from "./header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setActiveLink(id);
  };

  return (
    <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <a href="#home" onClick={() => handleClick("#home")}>
          {"<Utsav />"}
        </a>
      </div>
      <ul style={{ marginBottom: 0 }}>
        <li>
          <a
            href="#projects"
            onClick={() => handleClick("#projects")}
            className={activeLink === "#projects" ? styles.active : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1kv12OS4RVqoDDBhShqH9Djt3JvVV16BI/view?usp=drivesdk"
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="#aboutme"
            onClick={() => handleClick("#aboutme")}
            className={activeLink === "#aboutme" ? styles.active : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => handleClick("#skills")}
            className={activeLink === "#skills" ? styles.active : ""}
          >
            Skills
          </a>
        </li>
      </ul>
    </div>
  );
}
