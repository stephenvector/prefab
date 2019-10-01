import React from "react";
import { mount } from "enzyme";
import Button from "../Button";

describe("<Button />", () => {
  it("Should render child text", () => {
    const wrapper = mount(
      <>
        <Button>Hello</Button>
        <Button href="https://example.com/">Hello</Button>
        <Button>Hello</Button>
      </>
    );
    expect(wrapper.first().text()).toEqual("Hello");
  });
});
