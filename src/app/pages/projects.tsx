import * as React from "react";
import styles from "../components/styles";

function Projects() {
  return (
    <div style={styles.container}>
      <p className="tabs-text">
        <span>Crm: </span>Costumer relationship management system done in
        laravel, mysql, jquery
      </p>
      <p className="tabs-text">
        <span>Fluux: </span>A mobile app done in react-native
      </p>
    </div>
  );
}

export default Projects;
