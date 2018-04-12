import React from "react";
import PropTypes from "prop-types";

const transform = ({ position, size, translation }) => {
  switch (position) {
    case "top":
      return {
        left: 0,
        right: 0,
        top: `-${size}%`,
        height: `${size}%`,
        transform: `translateY(${translation}%)`,
      };
    case "right":
      return {
        top: 0,
        bottom: 0,
        right: `-${size}%`,
        width: `${size}%`,
        transform: `translateX(${-translation}%)`,
      };
    case "bottom":
      return {
        left: 0,
        right: 0,
        bottom: `-${size}%`,
        height: `${size}%`,
        transform: `translateY(${-translation}%)`,
      };
    case "left":
    default:
      return {
        top: 0,
        bottom: 0,
        left: `-${size}%`,
        width: `${size}%`,
        transform: `translateX(${translation}%)`,
      };
  }
};

const DrawerContentContainer = ({
  position,
  size,
  swiping,
  translation,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  drawerContent,
  style,
}) => (
  <div
    className="DrawerContentContainer"
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove(size)}
    onTouchEnd={handleTouchEnd}
    style={{
      position: "fixed",
      zIndex: 1,
      transition: swiping ? "" : "transform .2s ease-in-out",
      ...transform({ position, size, translation }),
      ...style,
    }}
  >
    {drawerContent}
  </div>
);

export default DrawerContentContainer;

DrawerContentContainer.propTypes = {
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
  size: PropTypes.number.isRequired,
  swiping: PropTypes.bool.isRequired,
  translation: PropTypes.number.isRequired,
  handleTouchStart: PropTypes.func.isRequired,
  handleTouchMove: PropTypes.func.isRequired,
  handleTouchEnd: PropTypes.func.isRequired,
  drawerContent: PropTypes.element.isRequired,
  style: PropTypes.object.isRequired,
};
