import React, { useContext, useState } from "react";
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
  return StylesContext;
}
