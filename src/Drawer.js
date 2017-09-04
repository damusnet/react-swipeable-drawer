import { Component } from "react";
import PropTypes from "prop-types";

class Drawer extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired,
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
    const { width, children } = this.props;
    const { swiping, translateX } = this.state;

    return children({
      width,
      swiping,
      translateX,
      mainContentScroll: this.mainContentScroll,
      toggleDrawer: this.toggleDrawer,
      handleTouchStart: this.handleTouchStart,
      handleTouchMove: this.handleTouchMove,
      handleTouchEnd: this.handleTouchEnd,
    });
  }
}

export default Drawer;

export { default as DrawerContainer } from "./DrawerContainer";
export { default as DrawerOverlay } from "./DrawerOverlay";
export { default as DrawerContentContainer } from "./DrawerContentContainer";
export { default as MainContentContainer } from "./MainContentContainer";
