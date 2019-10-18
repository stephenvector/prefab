import React from "react";
import "jest-styled-components";
import {
  render,
  fireEvent,
  createEvent,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Slider } from "../";

describe("<Slider />", () => {
  it("should render", () => {
    render(<Slider value={40} onChange={() => {}} />);
  });

  it("should respond to mouse events", () => {
    HTMLDivElement.prototype.getBoundingClientRect = () => {
      return {
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        right: 100,
        bottom: 100
      };
    };

    const onChangeMock = jest.fn();
    const { container } = render(<Slider value={30} onChange={onChangeMock} />);
    const slider = container.firstChild as Element;

    fireEvent.mouseDown(slider, {
      clientX: 40,
      clientY: 20,
      button: 0,
      buttons: 1
    });

    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe(40);

    fireEvent.mouseMove(slider, {
      clientX: 60,
      clientY: 20,
      button: 0,
      buttons: 1
    });

    expect(onChangeMock.mock.calls.length).toBe(2);
    expect(onChangeMock.mock.calls[1][0]).toBe(60);

    fireEvent.mouseUp(slider, {
      clientX: 60,
      clientY: 20,
      button: 0,
      buttons: 1
    });
  });

  it("should respond to touch events", () => {
    HTMLDivElement.prototype.getBoundingClientRect = () => {
      return {
        width: 100,
        height: 100,
        top: 0,
        left: 0,
        right: 100,
        bottom: 100
      };
    };

    const onChangeMock = jest.fn();
    const { container } = render(<Slider value={30} onChange={onChangeMock} />);
    const slider = container.firstChild as Element;

    fireEvent.touchStart(slider, {
      targetTouches: [
        {
          clientX: 40,
          clientY: 20
        }
      ]
    });

    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe(40);

    fireEvent.touchMove(slider, {
      targetTouches: [
        {
          clientX: 60,
          clientY: 20
        }
      ]
    });
    expect(onChangeMock.mock.calls.length).toBe(2);
    expect(onChangeMock.mock.calls[1][0]).toBe(60);

    fireEvent.touchEnd(slider, {
      clientX: 60,
      clientY: 20,
      button: 0,
      buttons: 1
    });
  });
});
