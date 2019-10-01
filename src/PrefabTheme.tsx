import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import { PrefabThemeConfig, lightTheme } from "./themes";

type PrefabProvider = {
  theme: PrefabThemeConfig;
  children: React.ReactNode;
};

function createCSSVariables(p: PrefabThemeConfig = lightTheme) {
  const themeStyleDeclaration: {
    variables: { [key: string]: string };
  } = {
    variables: {}
  };
  for (let [group, settings] of Object.entries(p)) {
    for (let [key, value] of Object.entries(settings)) {
      themeStyleDeclaration.variables[`--${group}-${key}`] = value;
    }
  }

  return StyleSheet.create(themeStyleDeclaration);
}

export default function PrefabWrapper({ theme, children }: PrefabProvider) {
  const [styles] = useState(createCSSVariables(theme));

  return <div className={css(styles.variables)}>{children}</div>;
}
