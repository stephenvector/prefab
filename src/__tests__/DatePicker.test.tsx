import React from "react";
import { mount } from "enzyme";
import { DatePicker } from "../";

describe("<DatePicker />", () => {
  it("Renders without throwing an error", () => {
    mount(<DatePicker />);
  });
});
