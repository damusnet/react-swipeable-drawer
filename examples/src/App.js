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
  <Drawer width={80}>
    {({
      width,
      swiping,
      translateX,
      mainContentScroll,
      toggleDrawer,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
    }) => (
      <div>
        <DrawerContainer
          width={width}
          swiping={swiping}
          translateX={translateX}
          toggleDrawer={toggleDrawer}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
          drawerContent={<DrawerContent />}
        />
        <MainContentContainer
          translateX={translateX}
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
