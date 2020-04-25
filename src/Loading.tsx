import React from "react";
import styled from "./styled";

const LoadingWrapper = styled.div`
  padding: 1rem;
  text-align: center;
`;

function Loading(props: any, ref: React.Ref<HTMLDivElement>) {
  return (
    <LoadingWrapper {...props} ref={ref}>
      Loading
    </LoadingWrapper>
  );
}

export default React.forwardRef(Loading);
