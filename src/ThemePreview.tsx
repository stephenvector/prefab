import React, { useEffect, useState } from "react";
import { PrefabTheme, ColorPicker, DatePicker } from "./";
import { PrefabThemeConfig, lightTheme } from "./themes";

type ThemePreviewProps = {
  theme: PrefabThemeConfig;
};

function ThemePreview({ theme }: ThemePreviewProps) {
  return (
    <PrefabTheme theme={theme}>
      <h1>Prefab</h1>
      <p>Preview of the components.</p>
      <DatePicker />
      <ColorPicker onChange={() => {}} value={theme.colors.background} />
    </PrefabTheme>
  );
}

ThemePreview.defaultProps = {
  theme: lightTheme
};

export default ThemePreview;
