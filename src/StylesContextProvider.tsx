import React, { useCallback, useEffect, useState } from "react";
import getRandomString from "./getRandomString";
import StylesContext from "./StylesContext";

type StylesContextProviderProps = {
  children: React.ReactNode;
};

export default function StylesContextProvider(
  props: StylesContextProviderProps
) {
  const [addedStyleTag, setAddedStyleTag] = useState(false);
  const styleTagId = useState(() => {
    return getRandomString();
  });

  const [styles, setStyles] = useState<{ [key: string]: React.CSSProperties }>(
    () => {
      return {};
    }
  );

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.setAttribute("id", styleTagId.toString());
    const headElements = document.getElementsByTagName("head");
    const headElement = headElements.item(0);
    if (headElement) {
      headElement.appendChild(styleTag);
      setAddedStyleTag(true);
    }
  }, []);

  useEffect(() => {
    const styleTag = document.getElementById(styleTagId.toString());
    if (styleTag) {
      styleTag.textContent = `body{background: red}`;
    }
  }, [addedStyleTag, styles]);

  const addStyle = useCallback(
    (selector: string, rules: React.CSSProperties) => {
      setStyles({
        ...styles,
        [selector]: { ...rules },
      });
    },
    [styles]
  );

  return (
    <StylesContext.Provider value={{ addStyle }}>
      {props.children}
    </StylesContext.Provider>
  );
}
