import React from "react";
import { mount } from "enzyme";
import { Container } from "../";

describe("<Container />", () => {
  it("Renders without throwing an error", () => {
    mount(<Container />);
  });
});
