import React from "react";
import renderer from "react-test-renderer";

import DrawerOverlay from "./DrawerOverlay";

const noop = () => () => {};
const positions = ["left", "right", "top", "bottom"];

describe("<DrawerOverlay />", () => {
  positions.forEach(position => {
    it(`renders correctly when closed ${position}`, () => {
      const component = renderer.create(
        <DrawerOverlay
          position={position}
          open={false}
          swiping={false}
          translation={0}
          toggleDrawer={noop}
          handleTouchStart={noop}
          handleTouchMove={noop}
          handleTouchEnd={noop}
          style={{ zIndex: 1 }}
        />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when open", () => {
      const component = renderer.create(
        <DrawerOverlay
          position={position}
          open
          swiping={false}
          translation={100}
          toggleDrawer={noop}
          handleTouchStart={noop}
          handleTouchMove={noop}
          handleTouchEnd={noop}
          style={{ zIndex: 1 }}
        />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("renders correctly when swiping", () => {
    const component = renderer.create(
      <DrawerOverlay
        position="left"
        open={false}
        swiping
        translation={50}
        toggleDrawer={noop}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
        style={{ zIndex: 1 }}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
