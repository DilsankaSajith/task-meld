import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      color: inherit;
      font-size: 3.6rem;
      font-weight: 700;
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      color: inherit;
      font-size: 2.4rem;
      font-weight: 700;
    `}
  ${(props) =>
    props.as === 'h4' &&
    css`
      color: inherit;
      font-size: 3rem;
      font-weight: 600;
    `}
`;

export default Heading;
