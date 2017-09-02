import React from "react";
import PropTypes from "prop-types";

const DrawerContent = ({
  width,
  swiping,
  translateX,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  drawerContent,
}) => (
  <div
    className="DrawerContent"
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove(width)}
    onTouchEnd={handleTouchEnd}
    style={{
      position: "fixed",
      top: 0,
      bottom: 0,
      zIndex: 1,
      backgroundColor: "green",
      left: `-${width}%`,
      width: `${width}%`,
      transform: `translateX(${translateX}%)`,
      transition: swiping ? "" : "transform .2s ease-in-out",
      overflow: "scroll",
    }}
  >
    {drawerContent}
  </div>
);

export default DrawerContent;

DrawerContent.propTypes = {
  width: PropTypes.number.isRequired,
  swiping: PropTypes.bool.isRequired,
  translateX: PropTypes.number.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchMove: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
  drawerContent: PropTypes.element.isRequired,
};
