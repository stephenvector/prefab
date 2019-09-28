import React from "react";
import { mount } from "enzyme";
import { Column } from "../";

describe("<Column />", () => {
  it("Renders without throwing an error", () => {
    mount(<Column />);
  });
});
