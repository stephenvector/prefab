import React from "react";
import { mount } from "enzyme";
import { ThemePreview } from "../";
import { lightTheme } from "../themes";

describe("<ThemePreview />", () => {
  it("Should render", () => {
    mount(<ThemePreview theme={lightTheme} />);
  });
});
