import React from "react";
import { mount } from "enzyme";
import { Input } from "../";

describe("<Input />", () => {
  it("Renders without throwing an error", () => {
    mount(<Input label="Text Field" />);
  });
});
