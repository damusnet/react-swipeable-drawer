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
  <Drawer position="left" size={80} zIndex={1}>
    {({
      position,
      size,
      zIndex,
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
          zIndex={zIndex}
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
