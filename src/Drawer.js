import { Component } from "react";
import PropTypes from "prop-types";

const START_TRANSLATION = -10;
const STOP_TRANSLATION = 100;

class Drawer extends Component {
  static propTypes = {
    position: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
    size: PropTypes.number.isRequired,
    children: PropTypes.func.isRequired,
  };

  state = {
    swiping: false,
    scrolling: false,
    translation: START_TRANSLATION,
    clientX: 0,
    clientY: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { translation } = this.state;
    if (
      translation !== prevState.translation &&
      translation === START_TRANSLATION
    ) {
      window.scrollTo(0, this.mainContentScroll);
    }
  }

  mainContentScroll = 0;

  saveScrollPosition = () => {
    const { translation } = this.state;
    if (translation === START_TRANSLATION) {
      this.mainContentScroll = window.pageYOffset;
    }
  };

  toggleDrawer = () => {
    this.saveScrollPosition();
    this.setState(({ translation }) => ({
      translation: translation > 50 ? START_TRANSLATION : STOP_TRANSLATION,
    }));
  };

  handleTouchStart = event => {
    this.saveScrollPosition();
    const { clientX, clientY } = event.targetTouches[0];
    this.setState({ swiping: true, clientX, clientY });
  };

  handleTouchMove = size => event => {
    const { position } = this.props;
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
    } else if (position === "right") {
      this.setState({
        translation: Math.min(
          (maxWidth - clientX) / (maxWidth * size / 100) * 100,
          STOP_TRANSLATION
        ),
      });
    } else {
      this.setState({
        translation: Math.min(
          clientX / (maxWidth * size / 100) * 100,
          STOP_TRANSLATION
        ),
      });
    }
  };

  handleTouchEnd = () => {
    this.setState(({ translation }) => ({
      swiping: false,
      scrolling: false,
      translation: translation < 50 ? START_TRANSLATION : STOP_TRANSLATION,
    }));
  };

  render() {
    const { position, size, children } = this.props;
    const { swiping, translation } = this.state;

    return children({
      position,
      size,
      swiping,
      translation,
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
