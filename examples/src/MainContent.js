import React from "react";
import FaBars from "react-icons/lib/fa/bars";

import CupcakeIpsum from "./CupcakeIpsum";

import "./MainContent.css";

const MainContent = ({ style, toggleDrawer }) => (
  <div className="MainContent" style={{ ...style }}>
    <div className="MainContent-navbar">
      <FaBars size={24} color="white" onClick={toggleDrawer} />
      <h1 className="MainContent-navbar-title">React Swipeable Drawer</h1>
    </div>
    <CupcakeIpsum />
  </div>
);

export default MainContent;
