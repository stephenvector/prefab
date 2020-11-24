import { createContext, CSSProperties } from "react";

type StylesContext = {
  addStyle: (selector: string, cssProps: CSSProperties) => void;
};

const StylesContext = createContext<StylesContext>({
  addStyle: () => {},
});

export default StylesContext;
