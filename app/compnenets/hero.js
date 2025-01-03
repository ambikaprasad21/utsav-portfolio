"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <>
      <div id="stars"></div>
      <div className={styles.container} id="home">
        <div className={styles.intro}>
          <h1>Hello there, I&apos;m Utsav.</h1>
          <TypewriterComponent />
        </div>
        <div className={styles.social}>
          <a href="https://github.com/guptautsav" target="_blank">
            <i className="fab fa-github  fa-3x socialicons"></i>
          </a>

          <a target="_blank" href="https://www.instagram.com/utsav.official/">
            <i className="fab fa-instagram  fa-3x socialicons"></i>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/utsavgupta150102/"
          >
            <i className="fab fa-linkedin  fa-3x socialicons"></i>
          </a>
        </div>
        <button className={styles.btn}>
          <a href="#aboutme">More about me</a>
        </button>
      </div>
    </>
  );
}

function TypewriterComponent() {
  return (
    <p>
      <Typewriter
        words={[
          "Simulating the journey from a napkin sketch to an intuitive product with product strategy as my daily fuel - that's what gets me going.",
        ]}
        loop={1}
        cursor
        cursorStyle=""
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </p>
  );
}
