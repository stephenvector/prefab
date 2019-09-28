import React from "react";
import { mount } from "enzyme";
import { Slider } from "../";

describe("<Slider />", () => {
  it("Renders without throwing an error", () => {
    mount(<Slider min={0} max={100} />);
  });
});
