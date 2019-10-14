import React from "react";
import { mount } from "enzyme";
import { Slider } from "../";

describe("<Slider />", () => {
  it("Should render", () => {
    mount(<Slider value={50} onChange={() => {}} />);
  });
});
