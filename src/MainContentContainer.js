import React from "react";
import PropTypes from "prop-types";

const MainContentContainer = ({ translation, mainContentScroll, children }) => {
  const mainContentOpenStyle =
    translation > 0
      ? {
          position: "fixed",
          top: -mainContentScroll,
          left: 0,
          right: 0,
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
  translation: PropTypes.number.isRequired,
  mainContentScroll: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
