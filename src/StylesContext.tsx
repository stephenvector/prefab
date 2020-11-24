import { createContext, CSSProperties } from "react";

type StylesContextShape = {
  addStyle: (selector: string, cssProps: CSSProperties) => void;
};

const StylesContext = createContext<StylesContextShape>({
  addStyle: () => {},
});

export default StylesContext;
