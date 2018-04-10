import React from "react";
import renderer from "react-test-renderer";

import DrawerContainer from "./DrawerContainer";

const noop = () => () => {};

describe("<DrawerContainer />", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <DrawerContainer
        position="left"
        size={80}
        zIndex={1}
        swiping={false}
        translation={0}
        toggleDrawer={noop}
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
