import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { matchers } from "jest-emotion";
import { RadioGroup } from "../";

expect.extend(matchers);

const TEST_OPTIONS = [
  { label: "Red", value: "red" },
  { label: "Yellow", value: "yellow" },
  { label: "Blue", value: "blue" }
];

describe("<RadioGroup />", () => {
  test("Should render some options.", () => {
    const onChangeMock = jest.fn();

    const { container } = render(
      <RadioGroup onChange={onChangeMock} value="red" options={TEST_OPTIONS} />
    );

    expect(container.firstChild).not.toBe(null);

    if (container.firstChild === null) {
      throw new Error("Doesn't look like the RadioGroup rendered properly.");
    }

    expect(container.firstChild.lastChild).not.toBe(null);

    fireEvent.click(container.firstChild.lastChild as Element);

    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe("blue");
  });
});
