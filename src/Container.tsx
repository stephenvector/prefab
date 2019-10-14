import React from "react";
import styled from "styled-components";

type ContainerProps = {
  fullWidth?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  width: 100%;
  max-width: ${p => (p.fullWidth === true ? "100%" : "1200px")};
`;

export default Container;
