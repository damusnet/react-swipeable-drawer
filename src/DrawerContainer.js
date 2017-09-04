import React from "react";
import PropTypes from "prop-types";

import { DrawerOverlay, DrawerContentContainer } from "./Drawer";

const DrawerContainer = ({
  width,
  swiping,
  translateX,
  toggleDrawer,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  drawerContent,
}) => {
  const open = translateX > 0;

  return (
    <div className="DrawerContainer">
      <DrawerOverlay
        open={open}
        swiping={swiping}
        translateX={translateX}
        toggleDrawer={toggleDrawer}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
      />
      <DrawerContentContainer
        width={width}
        swiping={swiping}
        translateX={translateX}
        toggleDrawer={toggleDrawer}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        drawerContent={drawerContent}
      />
    </div>
  );
};

export default DrawerContainer;

DrawerContainer.propTypes = {
  width: PropTypes.number.isRequired,
  swiping: PropTypes.bool.isRequired,
  translateX: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchMove: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
  drawerContent: PropTypes.element.isRequired,
};
