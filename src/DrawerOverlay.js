import React from "react";
import PropTypes from "prop-types";

const transition = ({ swiping, open }) => {
  if (swiping) {
    return "";
  } else if (open) {
    return "background-color .2s ease-in-out, width 0s 0s";
  }
  return "background-color .2s ease-in-out, width 0s .2s";
};

const DrawerOverlay = ({
  open,
  swiping,
  translateX,
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
      top: 0,
      bottom: 0,
      zIndex: 1,
      width: swiping || open ? "100%" : "20px",
      backgroundColor: `rgba(0,0,0,${0.6 * translateX / 100})`,
      transition: transition({ swiping, open }),
    }}
  />
);

export default DrawerOverlay;

DrawerOverlay.propTypes = {
  open: PropTypes.bool.isRequired,
  swiping: PropTypes.bool.isRequired,
  translateX: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchMove: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
};
