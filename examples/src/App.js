import React from "react";
import FaBars from "react-icons/lib/fa/bars";

import CupcakeIpsum from "./CupcakeIpsum";

import "./MainContent.css";

import Drawer, {
  DrawerContainer,
  MainContentContainer,
} from "../../src/Drawer";

import DrawerContent from "./DrawerContent";

const App = () => (
  <Drawer size={80} position="left">
    {({
      position,
      size,
      swiping,
      translation,
      mainContentScroll,
      toggleDrawer,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
    }) => (
      <div>
        <DrawerContainer
          position={position}
          size={size}
          swiping={swiping}
          translation={translation}
          toggleDrawer={toggleDrawer}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
          drawerContent={<DrawerContent />}
        />
        <MainContentContainer
          translation={translation}
          mainContentScroll={mainContentScroll}
        >
          <div className="MainContent">
            <div className="MainContent-navbar">
              <FaBars size={24} color="white" onClick={toggleDrawer} />
              <h1 className="MainContent-navbar-title">
                React Swipeable Drawer
              </h1>
            </div>
            <CupcakeIpsum />
          </div>
        </MainContentContainer>
      </div>
    )}
  </Drawer>
);

export default App;
