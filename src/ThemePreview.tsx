import React, { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { ColorPicker, DatePicker, PrefabThemeProvider } from "./";

type ThemePreviewProps = {
  theme: DefaultTheme;
};

function ThemePreview({ theme }: ThemePreviewProps) {
  return (
    <PrefabThemeProvider theme={theme}>
      <div>
        <h1>Prefab</h1>
        <p>Preview of the components.</p>
        <DatePicker />
        <ColorPicker onChange={() => {}} value={theme.colors.bg} />
      </div>
    </PrefabThemeProvider>
  );
}

export default ThemePreview;
