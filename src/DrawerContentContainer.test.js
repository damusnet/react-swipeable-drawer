import React from "react";
import renderer from "react-test-renderer";

import DrawerContentContainer from "./DrawerContentContainer";

const noop = () => () => {};

describe("<DrawerContentContainer />", () => {
  it("renders correctly when closed", () => {
    const component = renderer.create(
      <DrawerContentContainer
        position="left"
        size={80}
        zIndex={2}
        swiping={false}
        translation={0}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
        drawerContent={<div />}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when swiping right", () => {
    const component = renderer.create(
      <DrawerContentContainer
        position="left"
        size={80}
        zIndex={2}
        swiping
        translation={50}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
        drawerContent={<div />}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when swiping left", () => {
    const component = renderer.create(
      <DrawerContentContainer
        position="right"
        size={80}
        zIndex={2}
        swiping
        translation={50}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
        drawerContent={<div />}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when swiping down", () => {
    const component = renderer.create(
      <DrawerContentContainer
        position="top"
        size={80}
        zIndex={2}
        swiping
        translation={50}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
        drawerContent={<div />}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when up", () => {
    const component = renderer.create(
      <DrawerContentContainer
        position="bottom"
        size={80}
        zIndex={2}
        swiping
        translation={50}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
        drawerContent={<div />}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
