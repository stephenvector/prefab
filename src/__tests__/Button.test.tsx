import React from "react";
import { mount } from "enzyme";
import { Button } from "../";

describe("<Button />", () => {
  it("Should render child text", () => {
    const wrapper = mount(<Button>Hello</Button>);
    expect(wrapper.text()).toEqual("Hello");
  });
});
