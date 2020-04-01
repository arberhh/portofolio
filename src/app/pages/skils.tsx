import * as React from "react";
import SkillsCategories from "../components/skills-categories";
import styles from "../components/styles";

function Skills() {
  return (
    <div style={styles.container}>
      <SkillsCategories
        title="Back-End"
        text="Experience with php"
        list={["php", " laravel", " mysql"]}
      />
      <SkillsCategories
        title="Front-End"
        text="Experience with javascript, html, css"
        list={[" javascript", " react", " jquery"]}
      />
      <SkillsCategories
        title="Mobile"
        text="Experience with both ios and android"
        list={["react-native"]}
      />
    </div>
  );
}

export default Skills;
