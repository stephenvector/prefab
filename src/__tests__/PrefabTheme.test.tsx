import React from "react";
import { mount } from "enzyme";
import { PrefabTheme } from "../";
import { lightTheme } from "../themes";

describe("<PrefabTheme />", () => {
  it("Renders without throwing an error", () => {
    mount(
      <PrefabTheme theme={lightTheme}>
        <></>
      </PrefabTheme>
    );
  });
});
