import React from "react";
import renderer from "react-test-renderer";

import DrawerOverlay from "./DrawerOverlay";

const noop = () => () => {};

describe("<DrawerOverlay />", () => {
  it("renders correctly when closed", () => {
    const component = renderer.create(
      <DrawerOverlay
        open={false}
        swiping={false}
        translateX={0}
        toggleDrawer={noop}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when swiping", () => {
    const component = renderer.create(
      <DrawerOverlay
        open={false}
        swiping
        translateX={50}
        toggleDrawer={noop}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when open", () => {
    const component = renderer.create(
      <DrawerOverlay
        open
        swiping={false}
        translateX={100}
        toggleDrawer={noop}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
