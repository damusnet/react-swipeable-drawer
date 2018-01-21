import React from "react";
import { shallow, mount } from "enzyme";

import Drawer from "./Drawer";

const noop = () => <div />;

window.scrollTo = jest.fn();

describe("<Drawer />", () => {
  it("toggles open", () => {
    const drawer = shallow(
      <Drawer width={80} content={<div />}>
        {noop}
      </Drawer>
    ).instance();

    drawer.toggleDrawer();

    expect(drawer.state.translateX).toEqual(100);
  });

  it("toggles close", () => {
    const drawer = shallow(
      <Drawer width={80} content={<div />}>
        {noop}
      </Drawer>
    ).instance();

    drawer.toggleDrawer();
    drawer.toggleDrawer();

    expect(drawer.state.translateX).toEqual(0);
  });

  it("swipes horizontally", () => {
    const drawer = shallow(
      <Drawer width={80} content={<div />}>
        {noop}
      </Drawer>
    ).instance();

    drawer.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    drawer.handleTouchMove(80)({
      targetTouches: [{ clientX: 900, clientY: 100 }],
    });

    expect(drawer.state.translateX).toEqual(100);
  });

  it("swipes vertically", () => {
    const drawer = shallow(
      <Drawer width={80} content={<div />}>
        {noop}
      </Drawer>
    ).instance();

    drawer.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    drawer.handleTouchMove(80)({
      targetTouches: [{ clientX: 100, clientY: 900 }],
    });

    expect(drawer.state.translateX).toEqual(0);
  });

  it("closes when swiping a little", () => {
    const drawer = shallow(
      <Drawer width={80} content={<div />}>
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

    expect(drawer.state.translateX).toEqual(0);
  });

  it("opens when swiping enough", () => {
    const drawer = shallow(
      <Drawer width={80} content={<div />}>
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

    expect(drawer.state.translateX).toEqual(100);
  });

  it("watches scroll events", () => {
    global.addEventListener = jest.fn();

    const drawer = mount(
      <Drawer width={80} content={<div />}>
        {noop}
      </Drawer>
    ).instance();

    window.pageYOffset = 100;
    drawer.onScroll();

    expect(drawer.mainContentScroll).toEqual(100);

    drawer.toggleDrawer();
    window.pageYOffset = 0;
    drawer.onScroll();

    expect(drawer.mainContentScroll).toEqual(100);

    expect(global.addEventListener).toHaveBeenCalledTimes(7);
  });

  it("removes the scroll event listener", () => {
    global.removeEventListener = jest.fn();

    const drawer = shallow(
      <Drawer width={80} content={<div />}>
        {noop}
      </Drawer>
    ).instance();

    drawer.componentWillUnmount();

    expect(global.removeEventListener).toHaveBeenCalledTimes(1);
  });
});
