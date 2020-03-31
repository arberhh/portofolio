import * as React from "react";

const profilePicture = require("../img/download.jpeg");

type HeaderProps = {
  name: string;
  lastName: string;
};

function Header(props: HeaderProps) {
  console.log("props :", props);
  return (
    <div className="contanier">
      <img width={250} height={"auto"} alt={"profile"} src={profilePicture} />
      <h3 className="header-text">
        {props.name}
        {" " + props.lastName}
      </h3>
      <p className="bio-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
    </div>
  );
}

export default Header;
