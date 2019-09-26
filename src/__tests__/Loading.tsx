import React from "react";
import { mount } from "enzyme";
import { Loading } from "../";

describe("<Loading />", () => {
  it("Renders without throwing an error", () => {
    mount(<Loading />);
  });
});
