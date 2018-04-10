import React from "react";
import PropTypes from "prop-types";

import { DrawerOverlay, DrawerContentContainer } from "./Drawer";

const DrawerContainer = ({
  position,
  size,
  swiping,
  translation,
  toggleDrawer,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  drawerContent,
  overlayStyle,
  contentStyle,
}) => {
  const open = translation > 0;

  return (
    <div className="DrawerContainer">
      <DrawerOverlay
        position={position}
        open={open}
        swiping={swiping}
        translation={translation}
        toggleDrawer={toggleDrawer}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        style={overlayStyle}
      />
      <DrawerContentContainer
        position={position}
        size={size}
        swiping={swiping}
        translation={translation}
        toggleDrawer={toggleDrawer}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        drawerContent={drawerContent}
        style={contentStyle}
      />
    </div>
  );
};

export default DrawerContainer;

DrawerContainer.propTypes = {
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
  size: PropTypes.number.isRequired,
  swiping: PropTypes.bool.isRequired,
  translation: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchMove: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
  drawerContent: PropTypes.element.isRequired,
  overlayStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

DrawerContainer.defaultProps = {
  overlayStyle: {},
  contentStyle: {},
};
