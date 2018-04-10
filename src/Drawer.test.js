import React from "react";
import { shallow, mount } from "enzyme";

import Drawer from "./Drawer";

const noop = () => <div />;

describe("<Drawer />", () => {
  it("toggles open", () => {
    const drawer = shallow(
      <Drawer size={80} position="left" zIndex={1}>
        {noop}
      </Drawer>
    ).instance();

    drawer.toggleDrawer();

    expect(drawer.state.translation).toEqual(100);
  });

  it("toggles close", () => {
    const drawer = shallow(
      <Drawer size={80} position="left" zIndex={1}>
        {noop}
      </Drawer>
    ).instance();

    drawer.toggleDrawer();
    drawer.toggleDrawer();

    expect(drawer.state.translation).toEqual(-10);
  });

  it("swipes horizontally", () => {
    const drawer = shallow(
      <Drawer size={80} position="left" zIndex={1}>
        {noop}
      </Drawer>
    ).instance();

    drawer.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    drawer.handleTouchMove(80)({
      targetTouches: [{ clientX: 900, clientY: 100 }],
    });

    expect(drawer.state.translation).toEqual(100);
  });

  it("scrolls vertically", () => {
    const drawer = shallow(
      <Drawer size={80} position="left" zIndex={1}>
        {noop}
      </Drawer>
    ).instance();

    drawer.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    drawer.handleTouchMove(80)({
      targetTouches: [{ clientX: 100, clientY: 900 }],
    });

    expect(drawer.state.scrolling).toEqual(true);

    drawer.handleTouchMove(80)({
      targetTouches: [{ clientX: 200, clientY: 900 }],
    });

    expect(drawer.state.translation).toEqual(-10);
  });

  it("closes when swiping a little", () => {
    const drawer = shallow(
      <Drawer size={80} position="left" zIndex={1}>
        {noop}
      </Drawer>
    ).instance();

    drawer.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    drawer.handleTouchMove(80)({
      targetTouches: [{ clientX: 200, clientY: 100 }],
    });

    drawer.handleTouchEnd();

    expect(drawer.state.translation).toEqual(-10);
  });

  it("opens when swiping enough from left to right", () => {
    const drawer = shallow(
      <Drawer size={80} position="left" zIndex={1}>
        {noop}
      </Drawer>
    ).instance();

    drawer.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    drawer.handleTouchMove(80)({
      targetTouches: [{ clientX: 500, clientY: 100 }],
    });

    drawer.handleTouchEnd();

    expect(drawer.state.translation).toEqual(100);
  });

  it("opens when swiping enough from right to left", () => {
    const drawer = shallow(
      <Drawer size={80} position="right" zIndex={1}>
        {noop}
      </Drawer>
    ).instance();

    drawer.handleTouchStart({
      targetTouches: [{ clientX: 500, clientY: 100 }],
    });

    drawer.handleTouchMove(80)({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    drawer.handleTouchEnd();

    expect(drawer.state.translation).toEqual(100);
  });

  it("resets the window scroll position", () => {
    window.scrollTo = jest.fn();
    window.pageYOffset = 100;

    const drawer = mount(
      <Drawer size={80} position="left" zIndex={1}>
        {noop}
      </Drawer>
    ).instance();

    drawer.toggleDrawer();
    drawer.toggleDrawer();

    expect(drawer.mainContentScroll).toEqual(100);
    expect(window.scrollTo).toBeCalledWith(0, 100);
  });
});
