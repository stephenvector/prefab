import React from "react";
import { mount } from "enzyme";
import { Textarea } from "../";

describe("<Textarea />", () => {
  it("Should render", () => {
    mount(<Textarea value={""} onChange={() => {}} />);
  });
});
