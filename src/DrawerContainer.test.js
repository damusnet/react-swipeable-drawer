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
        swiping={false}
        translation={0}
        toggleDrawer={noop}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
        drawerContent={<div />}
        overlayStyle={{ zIndex: 1 }}
        contentStyle={{ zIndex: 2 }}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
