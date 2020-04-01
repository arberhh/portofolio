import * as React from "react";

interface Skill {
  title: string;
  text: string;
  list: string[];
}

const listStyle = {};

const SkillsCategories: React.FC<Skill> = ({ title, text, list }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span>Technologies: {list}</span>
    </div>
  );
};

export default SkillsCategories;
