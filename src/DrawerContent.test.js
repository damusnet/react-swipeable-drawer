import React from "react";
import renderer from "react-test-renderer";

import DrawerContent from "./DrawerContent";

const noop = () => () => {};

describe("<DrawerContent />", () => {
  it("renders correctly when closed", () => {
    const component = renderer.create(
      <DrawerContent
        width={80}
        swiping={false}
        translateX={0}
        handleTouchStart={noop}
        handleTouchMove={noop}
        handleTouchEnd={noop}
        drawerContent={<div />}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when swiping", () => {
    const component = renderer.create(
      <DrawerContent
        width={80}
        swiping
        translateX={50}
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
