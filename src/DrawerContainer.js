import React from "react";
import PropTypes from "prop-types";

import { DrawerOverlay, DrawerContentContainer } from "./Drawer";

const DrawerContainer = ({
  position,
  size,
  zIndex,
  swiping,
  translation,
  toggleDrawer,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  drawerContent,
}) => {
  const open = translation > 0;

  return (
    <div className="DrawerContainer">
      <DrawerOverlay
        position={position}
        zIndex={zIndex}
        open={open}
        swiping={swiping}
        translation={translation}
        toggleDrawer={toggleDrawer}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
      />
      <DrawerContentContainer
        position={position}
        size={size}
        zIndex={zIndex + 1}
        swiping={swiping}
        translation={translation}
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
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
  size: PropTypes.number.isRequired,
  zIndex: PropTypes.number.isRequired,
  swiping: PropTypes.bool.isRequired,
  translation: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchMove: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
  drawerContent: PropTypes.element.isRequired,
};
