"use client";
import { useState } from "react";
import styles from "./skills.module.css";

const tabStyle = {
  transition: "all 100",
};

const activeTab = {
  color: "#000",
  fontWeight: 100,
  borderWidth: "1px 1px 0 1px",
  borderColor: "#bbb",
  borderStyle: "solid",
  padding: "8px 0",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  ...tabStyle,
};

const normalTab = {
  color: " #0d6efd",
  borderWidth: "0 0 1px 0",
  borderColor: "#bbb",
  borderStyle: "solid",
  padding: "8px 0",
  ...tabStyle,
};

const technicalSkill = [
  { name: "SQL", progress: 90 },
  { name: "Python", progress: 70 },
  { name: "PowerBI", progress: 90 },
  { name: "Figma", progress: 80 },
  { name: "Product roadmapping", progress: 70 },
  { name: "Product requirement documentation", progress: 75 },
  { name: "Agile SCRUM", progress: 85 },
];

const softSkill = [
  { name: "Goal-Oriented", progress: 85 },
  { name: "Problem Solving", progress: 80 },
  { name: "Collaboration", progress: 95 },
  { name: "Leadership", progress: 95 },
  { name: "Positivity", progress: 70 },
  { name: "Creative thinking", progress: 70 },
  { name: "Adaptability", progress: 85 },
  { name: "Teamwork", progress: 95 },
];

export default function Skills() {
  const [active, setActive] = useState(1);

  function handleTabClick(para) {
    setActive(para);
  }

  return (
    <div className={styles.skills} id="skills">
      <h2 className={styles.s_h}>Skills</h2>
      <div className={styles.s_c}>
        <div className={styles.tab}>
          <div
            onClick={() => handleTabClick(1)}
            style={active ? activeTab : normalTab}
            className={styles.tab_hover}
          >
            Technical Skills
          </div>
          <div
            onClick={() => handleTabClick(0)}
            style={!active ? activeTab : normalTab}
            className={styles.tab_hover}
          >
            Soft Skills
          </div>
        </div>
        <div className={styles.s_p}>
          {active
            ? technicalSkill.map((skill) => (
                <div className={styles.s_detail} key={skill.name}>
                  <p className={styles.s_label}>{skill.name}</p>
                  <div className={styles.rating_contianer}>
                    <div
                      className={styles.s_rating}
                      style={{
                        width: `${skill.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))
            : softSkill.map((skill) => (
                <div className={styles.s_detail} key={skill.name}>
                  <p className={styles.s_label}>{skill.name}</p>
                  <div className={styles.rating_contianer}>
                    <div
                      className={styles.s_rating}
                      style={{
                        width: `${skill.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
