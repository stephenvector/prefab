import React from "react";
import { mount } from "enzyme";
import { ProgressBar } from "../";

describe("<ProgressBar />", () => {
  it("Renders without throwing an error", () => {
    mount(<ProgressBar value={40} />);
  });

  it("Renders without throwing an error when disabled", () => {
    mount(<ProgressBar value={40} disabled />);
  });
});
