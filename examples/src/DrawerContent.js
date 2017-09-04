import React from "react";

import CupcakeIpsum from "./CupcakeIpsum";

import logo from "./logo.svg";
import "./DrawerContent.css";

const DrawerContent = () => (
  <div className="DrawerContent" style={{}}>
    <div className="DrawerContent-header">
      <img src={logo} className="DrawerContent-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <CupcakeIpsum />
  </div>
);

export default DrawerContent;
