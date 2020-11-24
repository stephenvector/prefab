import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Button from "./Button";
import StylesContextProvider from "./StylesContextProvider";

it("Button renders", () => {
  const t = render(
    <StylesContextProvider>
      <Button>Button</Button>
    </StylesContextProvider>
  );
});
