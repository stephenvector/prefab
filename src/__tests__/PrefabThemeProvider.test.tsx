import React from "react";
import "jest-styled-components";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PrefabThemeProvider, defaultPrefabTheme } from "../";

describe("<PrefabThemeProvider />", () => {
  it("should render", () => {
    render(
      <PrefabThemeProvider theme={defaultPrefabTheme}>Test</PrefabThemeProvider>
    );
  });
});
