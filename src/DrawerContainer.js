import React from "react";
import PropTypes from "prop-types";

import { DrawerOverlay, DrawerContentContainer } from "./Drawer";

const DrawerContainer = ({
  position,
  size,
  overlayStyle,
  contentStyle,
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
        style={overlayStyle}
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
        style={contentStyle}
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
  /* eslint-disable react/forbid-prop-types */
  overlayStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  /* eslint-enable react/forbid-prop-types */
  swiping: PropTypes.bool.isRequired,
  translation: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchMove: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
  drawerContent: PropTypes.element.isRequired,
};

DrawerContainer.defaultProps = {
  overlayStyle: {},
  contentStyle: {},
};
