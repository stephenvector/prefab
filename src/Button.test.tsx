import React from "react";
import { mount } from "enzyme";
import Button from "./Button";

describe("<Button />", () => {
  it("Should render child text", () => {
    const wrapper = mount(<Button>Hello</Button>);
    console.log(wrapper.find("button"));
    console.log("000", wrapper.text(), "000");
    expect(wrapper.text()).toEqual("Hello");
  });
});
