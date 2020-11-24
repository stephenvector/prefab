import React, { useContext, useEffect, useState } from "react";
import getRandomString from "./getRandomString";
import StylesContext from "./StylesContext";

type UseStylesProps = {
  styles: React.CSSProperties;
};

export default function useStyles(props: UseStylesProps) {
  const [randomString] = useState(() => {
    return getRandomString();
  });
  const stylesContext = useContext(StylesContext);
  const [currentStyles, setCurrentStyles] = useState(() => {
    return props.styles;
  });

  useEffect(() => {
    if (JSON.stringify(props.styles) !== JSON.stringify(currentStyles)) {
      setCurrentStyles(props.styles);
    }
  }, [props.styles, currentStyles]);

  useEffect(() => {
    stylesContext.addStyle(randomString, currentStyles);
  }, [currentStyles]);

  return { id: randomString };
}
