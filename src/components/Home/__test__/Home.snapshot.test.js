import React from "react";
import HomePage from "../HomePage";
import TestRenderer from "react-test-renderer";
import { MockStateProps } from "./MockData";

describe("Test ad product page", () => {
  it("Home page snapshot", () => {
    const RenderedHomePage = TestRenderer.create(
      <HomePage state={MockStateProps} dispatch={() => {}}></HomePage>
    ).toJSON();
    expect(RenderedHomePage).toMatchSnapshot();
  });
});
