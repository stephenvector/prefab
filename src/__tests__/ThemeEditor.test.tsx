import React from "react";
import { mount } from "enzyme";
import { ThemeEditor } from "../";
import { lightTheme } from "../themes";

describe("<ThemeEditor />", () => {
  it("Should render", () => {
    mount(<ThemeEditor value={lightTheme} onChange={() => {}} />);
  });
});
