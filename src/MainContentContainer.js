import React from "react";
import PropTypes from "prop-types";

const MainContentContainer = ({ translateX, mainContentScroll, children }) => {
  const mainContentOpenStyle =
    translateX > 0
      ? {
          position: "fixed",
          top: -mainContentScroll,
        }
      : {};

  return (
    <div className="MainContentContainer" style={{ ...mainContentOpenStyle }}>
      {children}
    </div>
  );
};

export default MainContentContainer;

MainContentContainer.propTypes = {
  translateX: PropTypes.number.isRequired,
  mainContentScroll: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
