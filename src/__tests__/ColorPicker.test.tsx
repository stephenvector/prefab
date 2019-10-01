import React from "react";
import { mount } from "enzyme";
import { ColorPicker } from "../";

describe("<ColorPicker />", () => {
  it("Should render", () => {
    mount(<ColorPicker value="#000" onChange={() => {}} />);
  });
});
