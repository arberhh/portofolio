import * as React from "react";
import * as ReactDom from "react-dom";
import Header from "./components/header";
import Tabs from "./components/tabs";

ReactDom.render(
  <div className="contanier">
    <Header name="Arber" lastName="Haxhimusa" />
    <Tabs />
  </div>,
  document.getElementById("#root")
);
