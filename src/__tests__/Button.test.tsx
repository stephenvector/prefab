import React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import { Button } from "../";

expect.extend(matchers);

describe("<Button />", () => {
  test("Should render", () => {
    renderer.create(<Button />);
  });

  test("Should render with a custom background if prop `bg` is supplied.", () => {
    const wrapper = renderer.create(<Button bg={"#00f"} />).toJSON();
    expect(wrapper).toHaveStyleRule("background", "#00f");
  });

  test("Should render outline colors as inverse of non-outlined buttons.", () => {
    const wrapper = renderer
      .create(<Button outline fg="#f00" bg={"#00f"} />)
      .toJSON();
    expect(wrapper).toHaveStyleRule("background", "#f00");
    expect(wrapper).toHaveStyleRule("color", "#00f");
  });

  test("Should render full width if fullWidth props is `true`.", () => {
    const wrapper = renderer.create(<Button fullWidth />).toJSON();
    expect(wrapper).toHaveStyleRule("width", "100%");
  });
});
