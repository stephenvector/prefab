import React from "react";
import { shallow, mount, render } from "enzyme";
import { Button } from "./";

describe("<Button />", () => {
  it("Should render child text", () => {
    const wrapper = shallow(<Button>Hello</Button>);

    expect(wrapper.text()).toBe("Hello");
  });
});
