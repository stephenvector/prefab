import React, { useEffect, useState } from "react";
import { PrefabTheme, ColorPicker, DatePicker } from "./";
import { PrefabThemeConfig } from "./themes";

type ThemePreviewProps = {
  theme: PrefabThemeConfig;
};

export default function ThemePreview({ theme }: ThemePreviewProps) {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <PrefabTheme theme={currentTheme}>
      <DatePicker />
      <ColorPicker onChange={() => {}} value={currentTheme.colors.background} />
    </PrefabTheme>
  );
}
