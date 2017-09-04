import React from "react";
import renderer from "react-test-renderer";

import MainContentContainer from "./MainContentContainer";

describe("<MainContentContainer />", () => {
  it("renders correctly when closed", () => {
    const component = renderer.create(
      <MainContentContainer translateX={0} mainContentScroll={0}>
        <div />
      </MainContentContainer>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when swiping", () => {
    const component = renderer.create(
      <MainContentContainer translateX={50} mainContentScroll={100}>
        <div />
      </MainContentContainer>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
