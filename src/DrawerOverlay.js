/* eslint jsx-a11y/click-events-have-key-events: 0 */
import React from "react";
import PropTypes from "prop-types";

const transform = ({ position, swiping, open }) => {
  switch (position) {
    case "top":
      return {
        top: 0,
        left: 0,
        right: 0,
        height: swiping || open ? "100%" : "20px",
      };
    case "right":
      return {
        right: 0,
        top: 0,
        bottom: 0,
        width: swiping || open ? "100%" : "20px",
      };
    case "bottom":
      return {
        bottom: 0,
        left: 0,
        right: 0,
        height: swiping || open ? "100%" : "20px",
      };
    case "left":
    default:
      return {
        left: 0,
        top: 0,
        bottom: 0,
        width: swiping || open ? "100%" : "20px",
      };
  }
};

const transition = ({ swiping, open }) => {
  if (swiping) {
    return "";
  } else if (open) {
    return "background-color .2s ease-in-out, width 0s 0s, height 0s 0s";
  }
  return "background-color .2s ease-in-out, width 0s .2s, height 0s 0s";
};

const DrawerOverlay = ({
  position,
  zIndex,
  open,
  swiping,
  translation,
  toggleDrawer,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
}) => (
  <div
    className="DrawerOverlay"
    onClick={open ? toggleDrawer : null}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove(100)}
    onTouchEnd={handleTouchEnd}
    style={{
      position: "fixed",
      zIndex,
      backgroundColor: `rgba(0,0,0,${0.6 * translation / 100})`,
      transition: transition({ swiping, open }),
      ...transform({ position, swiping, open }),
    }}
  />
);

export default DrawerOverlay;

DrawerOverlay.propTypes = {
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
  zIndex: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  swiping: PropTypes.bool.isRequired,
  translation: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchMove: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
};
