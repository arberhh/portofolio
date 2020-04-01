import * as React from "react";

interface Skill {
  title: string;
  link: string;
}

const ContactLink: React.FC<Skill> = ({ title, link }) => {
  return (
    <div className="row">
      <p>{title}:&nbsp;</p>
      <a style={{ color: "blue" }} href={link}>
        <p> {link}</p>
      </a>
    </div>
  );
};

export default ContactLink;
