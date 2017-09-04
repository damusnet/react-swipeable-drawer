import React, { Component } from "react";
import PropTypes from "prop-types";

import DrawerOverlay from "./DrawerOverlay";
import DrawerContent from "./DrawerContent";

class Drawer extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    content: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired,
  };

  state = {
    swiping: false,
    scrolling: false,
    translateX: 0,
    clientX: 0,
    clientY: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const { translateX } = this.state;
    if (translateX === 0) {
      this.mainContentScroll = window.pageYOffset;
    }
  };

  mainContentScroll = 0;

  toggleDrawer = () => {
    this.setState(
      ({ translateX }) => ({
        translateX: translateX > 50 ? 0 : 100,
      }),
      this.restoreMainContentScrollPosition
    );
  };

  handleTouchStart = event => {
    const { clientX, clientY } = event.targetTouches[0];
    this.setState({ swiping: true, clientX, clientY });
  };

  handleTouchMove = width => event => {
    const {
      clientX: prevClientX,
      clientY: prevClientY,
      scrolling,
    } = this.state;
    const maxWidth = window.innerWidth;
    const { clientX, clientY } = event.targetTouches[0];

    const diffTranslateX = Math.abs(clientX - prevClientX);
    const diffTranslateY = Math.abs(clientY - prevClientY);

    if (scrolling || diffTranslateY > diffTranslateX) {
      this.setState({ scrolling: true });
    } else {
      const translateX = Math.min(
        clientX / (maxWidth * width / 100) * 100,
        100
      );
      this.setState({ translateX });
    }
  };

  handleTouchEnd = () => {
    this.setState(
      ({ translateX }) => ({
        swiping: false,
        scrolling: false,
        translateX: translateX < 50 ? 0 : 100,
      }),
      this.restoreMainContentScrollPosition
    );
  };

  restoreMainContentScrollPosition = () => {
    const { translateX } = this.state;
    if (translateX === 0) {
      window.scrollTo(0, this.mainContentScroll);
    }
  };

  render() {
    const { width, content: drawerContent, children } = this.props;
    const { swiping, translateX } = this.state;

    const open = translateX > 0;

    const mainContentOpenStyle = {
      position: "fixed",
      top: -this.mainContentScroll,
    };

    const mainContent = React.cloneElement(children, {
      toggleDrawer: this.toggleDrawer,
      style: open ? mainContentOpenStyle : {},
    });

    return (
      <div>
        <div className="DrawerContainer">
          <DrawerOverlay
            open={open}
            swiping={swiping}
            translateX={translateX}
            toggleDrawer={this.toggleDrawer}
            handleTouchStart={this.handleTouchStart}
            handleTouchMove={this.handleTouchMove}
            handleTouchEnd={this.handleTouchEnd}
          />
          <DrawerContent
            width={width}
            swiping={swiping}
            translateX={translateX}
            toggleDrawer={this.toggleDrawer}
            handleTouchStart={this.handleTouchStart}
            handleTouchMove={this.handleTouchMove}
            handleTouchEnd={this.handleTouchEnd}
            drawerContent={drawerContent}
          />
        </div>
        {mainContent}
      </div>
    );
  }
}

export default Drawer;
