import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      color: inherit;
      font-size: 2.6rem;
      font-weight: 700;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      color: inherit;
      font-size: 1.8rem;
      font-weight: 800;
    `}
`;

export default Heading;
