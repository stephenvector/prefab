import React from "react";
import { mount } from "enzyme";
import { Textarea } from "../";

describe("<Textarea />", () => {
  it("Renders without throwing an error", () => {
    mount(<Textarea label="textarea" />);
  });
});
