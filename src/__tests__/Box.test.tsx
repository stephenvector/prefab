import React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import { Box } from "../";

expect.extend(matchers);

describe("<Box />", () => {
  test("Should render with a custom background if prop `bg` is supplied.", () => {
    const wrapper = renderer.create(<Box bg={"red"} />).toJSON();
    expect(wrapper).toHaveStyleRule("background", "red");
  });

  test("Should render with a custom text color if prop `fg` is supplied.", () => {
    const wrapper = renderer.create(<Box fg={"red"} />).toJSON();
    expect(wrapper).toHaveStyleRule("color", "red");
  });

  test("Should render without padding if no props are supplied.", () => {
    const wrapper = renderer.create(<Box />).toJSON();
    expect(wrapper).not.toHaveStyleRule("padding", "*");
  });

  test("Should render with padding-top value if value is supplied to prop `paddingTop`.", () => {
    const wrapper = renderer.create(<Box paddingTop={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("padding-top", "1rem");
  });

  test("Should render with padding-left value if value is supplied to prop `paddingLeft`.", () => {
    const wrapper = renderer.create(<Box paddingLeft={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("padding-left", "1rem");
  });

  test("Should render with padding-right value if value is supplied to prop `paddingRight`.", () => {
    const wrapper = renderer.create(<Box paddingRight={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("padding-right", "1rem");
  });

  test("Should render with padding-bottom value if value is supplied to prop `paddingBottom`.", () => {
    const wrapper = renderer.create(<Box paddingBottom={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("padding-bottom", "1rem");
  });

  test("Should render with padding-top & padding-bottom value if value is supplied to prop `paddingY`.", () => {
    const wrapper = renderer.create(<Box paddingY={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("padding-top", "1rem");
    expect(wrapper).toHaveStyleRule("padding-bottom", "1rem");
  });

  test("Should render with padding-left & padding-right value if value is supplied to prop `paddingX`.", () => {
    const wrapper = renderer.create(<Box paddingX={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("padding-left", "1rem");
    expect(wrapper).toHaveStyleRule("padding-right", "1rem");
  });

  test("Should render with padding value if value is supplied to prop `padding`.", () => {
    const wrapper = renderer.create(<Box padding={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("padding", "1rem");
  });

  test("Should render without margin if no props are supplied.", () => {
    const wrapper = renderer.create(<Box />).toJSON();
    expect(wrapper).not.toHaveStyleRule("margin", "*");
  });

  test("Should render with margin-top value if value is supplied to prop `marginTop`.", () => {
    const wrapper = renderer.create(<Box marginTop={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("margin-top", "1rem");
  });

  test("Should render with margin-left value if value is supplied to prop `marginLeft`.", () => {
    const wrapper = renderer.create(<Box marginLeft={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("margin-left", "1rem");
  });

  test("Should render with margin-right value if value is supplied to prop `marginRight`.", () => {
    const wrapper = renderer.create(<Box marginRight={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("margin-right", "1rem");
  });

  test("Should render with margin-bottom value if value is supplied to prop `marginBottom`.", () => {
    const wrapper = renderer.create(<Box marginBottom={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("margin-bottom", "1rem");
  });

  test("Should render with margin-top & margin-bottom value if value is supplied to prop `marginY`.", () => {
    const wrapper = renderer.create(<Box marginY={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("margin-top", "1rem");
    expect(wrapper).toHaveStyleRule("margin-bottom", "1rem");
  });

  test("Should render with margin-left & margin-right value if value is supplied to prop `marginX`.", () => {
    const wrapper = renderer.create(<Box marginX={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("margin-left", "1rem");
    expect(wrapper).toHaveStyleRule("margin-right", "1rem");
  });

  test("Should render with margin value if value is supplied to prop `margin`.", () => {
    const wrapper = renderer.create(<Box margin={1} />).toJSON();
    expect(wrapper).toHaveStyleRule("margin", "1rem");
  });
});
