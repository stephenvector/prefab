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

  useEffect(() => {
    stylesContext.addStyle(randomString, props.styles);
  }, [stylesContext, props.styles, randomString]) 
 
  return { id: randomString };
}
