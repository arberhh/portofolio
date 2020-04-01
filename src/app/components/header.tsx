import * as React from "react";

const profilePicture = require("../img/download.jpeg");

function Header() {
  return (
    <div className="contanier">
      <img
        className="img"
        width={100}
        height={"auto"}
        alt={"profile"}
        src={profilePicture}
      />
      {/* <h3 className="header-text">Arber Haxhimusa</h3> */}
      <p className="bio-text">
        Hello my name is Arber Haxhimusa, i'm a software engineer
      </p>
    </div>
  );
}

export default Header;
