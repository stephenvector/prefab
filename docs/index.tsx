import React from "react";
import { hydrate, render } from "react-dom";

import { PrefabTheme, DatePicker, Slider } from "../src";
import { lightTheme } from "../src/themes";

function App() {
  return (
    <div>
      <PrefabTheme theme={lightTheme}>
        <DatePicker />
        <Slider />
      </PrefabTheme>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement !== null && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
