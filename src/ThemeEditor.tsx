import React from "react";
import { Label, ColorPicker } from "./";
import { PrefabThemeConfig } from "./themes";

type ThemeEditorProps = {
  value: PrefabThemeConfig;
  onChange(newTheme: PrefabThemeConfig): void;
};

export default function ThemeEditor({ value, onChange }: ThemeEditorProps) {
  return (
    <div className="ThemeEditor">
      <Label>Background</Label>
      <ColorPicker
        onChange={(newValue: string) => {
          console.log(newValue);
          const newTheme = {
            ...value
          };
          newTheme.colors.background = newValue;
          console.log(newValue);
          onChange(newTheme);
        }}
        value={value.colors.background}
      />

      <Label>Foreground</Label>
      <ColorPicker
        onChange={(newValue: string) => {
          const newTheme = {
            ...value
          };
          newTheme.colors.foreground = newValue;
          onChange(newTheme);
        }}
        value={value.colors.foreground}
      />

      <Label>Accent</Label>
      <ColorPicker
        onChange={(newValue: string) => {
          const newTheme = {
            ...value
          };
          newTheme.colors.accent = newValue;
          onChange(newTheme);
        }}
        value={value.colors.accent}
      />
    </div>
  );
}
