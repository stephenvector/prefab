import React from "react";
import styled from "styled-components";

type ContainerProps = {
  fullWidth?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export default styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;
