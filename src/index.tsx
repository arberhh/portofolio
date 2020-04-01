import * as React from "react";
import * as ReactDom from "react-dom";
import Header from "./app/components/header";
import Tabs from "./app/routes";

ReactDom.render(
  <div>
    <Header />
    <Tabs />
  </div>,
  document.getElementById("#root")
);
