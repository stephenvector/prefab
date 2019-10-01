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
    familyDefault: string;
  };
  sizing: {
    borderRadius: number;
    h1: number;
    h2: number;
    h3: number;
    h4: number;
    h5: number;
    h6: number;
    meta: number;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  remSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

export const lightTheme: PrefabThemeConfig = {
  colors: {
    background: "#fff",
    foreground: "#000",
    accent: "#56d",
    danger: "#fff",
    warning: "#fff",
    success: "#fff",
    meta: "#999",
    border: "#ddd"
  },
  fonts: {
    familyDefault: "sans-serif"
  },
  sizing: {
    borderRadius: 0.4,
    h1: 3,
    h2: 2.4,
    h3: 2.1,
    h4: 2.1,
    h5: 1.5,
    h6: 1.3,
    meta: 0.9
  },
  breakpoints: {
    xs: "320px",
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1200px"
  },
  remSize: {
    xs: "15px",
    sm: "15.5px",
    md: "16px",
    lg: "17px",
    xl: "18px"
  }
};
