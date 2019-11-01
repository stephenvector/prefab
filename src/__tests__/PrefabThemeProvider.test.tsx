import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PrefabThemeProvider, defaultPrefabTheme } from "../";
import { matchers } from "jest-emotion";

expect.extend(matchers);

describe("<PrefabThemeProvider />", () => {
  it("should render", () => {
    render(
      <PrefabThemeProvider theme={defaultPrefabTheme}>Test</PrefabThemeProvider>
    );
  });
});
