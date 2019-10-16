import styled from "styled-components";

export const Display1 = styled.div`
  line-height: 1.1;
  font-size: 8rem;
  font-weight: 900;
  letter-spacing: -0.05em;
`;

export const Display2 = styled.div`
  line-height: 1.1;
  font-size: 6rem;
  font-weight: 700;
`;

export const Display3 = styled.div`
  line-height: 1.1;
  font-size: 5rem;
  font-weight: 700;
`;

export const Display4 = styled.div`
  line-height: 1.1;
  font-size: 3rem;
  font-weight: 300;
`;

export const H1 = styled.h1`
  line-height: 1.1;
  font-size: 3rem;
  font-weight: 700;
`;

export const H2 = styled.h2`
  line-height: 1.1;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const H3 = styled.h3`
  line-height: 1.1;
  font-size: 2rem;
  font-weight: 700;
`;

export const H4 = styled.h4`
  line-height: 1.1;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const H5 = styled.h5`
  line-height: 1.1;
  font-size: 1.3rem;
  font-weight: 700;
`;

export const H6 = styled.h6`
  line-height: 1.1;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const Paragraph = styled.p`
  margin: ${p => `calc(${p.theme.sizing.formControls}/2) 0`};
`;
