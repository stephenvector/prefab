import React, { useEffect, useState } from "react";
import { PrefabTheme, ColorPicker, DatePicker } from "./";
import { PrefabThemeConfig } from "./themes";

type ThemePreviewProps = {
  theme: PrefabThemeConfig;
};

export default function ThemePreview({ theme }: ThemePreviewProps) {
  return (
    <PrefabTheme theme={theme}>
      <DatePicker />
      <ColorPicker onChange={() => {}} value={theme.colors.background} />
    </PrefabTheme>
  );
}
