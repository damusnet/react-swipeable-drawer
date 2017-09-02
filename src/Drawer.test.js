import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Drawer from "./Drawer";

jest.mock("./DrawerOverlay", () => "DrawerOverlay");
jest.mock("./DrawerContent", () => "DrawerContent");

describe("<Drawer />", () => {
  it("toggles open", () => {
    const component = renderer.create(
      <Drawer width={80} content={<div />}>
        <div />
      </Drawer>
    );
    let tree = component.toJSON();
    tree.children[0].children[0].props.toggleDrawer();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("toggles close", () => {
    const component = renderer.create(
      <Drawer width={80} content={<div />}>
        <div />
      </Drawer>
    );
    let tree = component.toJSON();
    tree.children[0].children[0].props.toggleDrawer();
    tree.children[0].children[0].props.toggleDrawer();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("swipes horizontally", () => {
    const component = renderer.create(
      <Drawer width={80} content={<div />}>
        <div />
      </Drawer>
    );
    let tree = component.toJSON();
    tree.children[0].children[0].props.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });
    tree.children[0].children[0].props.handleTouchMove(80)({
      targetTouches: [{ clientX: 200, clientY: 100 }],
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("swipes vertically", () => {
    const component = renderer.create(
      <Drawer width={80} content={<div />}>
        <div />
      </Drawer>
    );
    let tree = component.toJSON();
    tree.children[0].children[0].props.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });
    tree.children[0].children[0].props.handleTouchMove(80)({
      targetTouches: [{ clientX: 100, clientY: 200 }],
    });
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("closes when swiping a little", () => {
    const component = renderer.create(
      <Drawer width={80} content={<div />}>
        <div />
      </Drawer>
    );
    let tree = component.toJSON();
    tree.children[0].children[0].props.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });
    tree.children[0].children[0].props.handleTouchMove(80)({
      targetTouches: [{ clientX: 200, clientY: 100 }],
    });
    tree.children[0].children[0].props.handleTouchEnd();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("opens when swiping enough", () => {
    const component = renderer.create(
      <Drawer width={80} content={<div />}>
        <div />
      </Drawer>
    );
    let tree = component.toJSON();
    tree.children[0].children[0].props.handleTouchStart({
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });
    tree.children[0].children[0].props.handleTouchMove(80)({
      targetTouches: [{ clientX: 500, clientY: 100 }],
    });
    tree.children[0].children[0].props.handleTouchEnd();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("watches scroll events", () => {
    const wrapper = shallow(
      <Drawer width={80} content={<div />}>
        <div />
      </Drawer>
    );
    const instance = wrapper.instance();

    window.pageYOffset = 100;
    instance.onScroll();
    expect(instance.mainContentScroll).toEqual(100);

    instance.toggleDrawer();
    window.pageYOffset = 0;
    instance.onScroll();
    expect(instance.mainContentScroll).toEqual(100);
  });

  it("removes the scroll event listener", () => {
    global.removeEventListener = jest.fn();

    const wrapper = shallow(
      <Drawer width={80} content={<div />}>
        <div />
      </Drawer>
    );
    const instance = wrapper.instance();

    instance.componentWillUnmount();
    expect(global.removeEventListener).toHaveBeenCalledTimes(1);
  });
});
