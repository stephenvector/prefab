export type PrefabThemeConfig = {
  colors: {
    background: string;
    foreground: string;
    accent: string;
    danger: string;
    warning: string;
    success: string;
    meta: string;
    border: string;
  };
  fonts: {
    defaultFamily: string;
  };
  sizing: {
    borderRadius: string;
  };
};

export const lightTheme: PrefabThemeConfig = {
  colors: {
    background: "#fff",
    foreground: "#000",
    accent: "#e56",
    danger: "#fff",
    warning: "#fff",
    success: "#fff",
    meta: "#999",
    border: "#ddd"
  },
  fonts: {
    defaultFamily: "sans-serif"
  },
  sizing: {
    borderRadius: "3px"
  }
};
