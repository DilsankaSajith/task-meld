import styled, { css } from "styled-components";

const Row = styled.div`
  ${(props) =>
    props.direction === "horizontal" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.6rem;
    `}

  ${(props) =>
    props.direction === "vertical" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: left;
      gap: 0.5rem;
    `}

    ${(props) =>
    props.responsive === "true" &&
    css`
      @media (min-width: 918px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1.6rem;
      }
    `}
`;

Row.defaultProps = {
  direction: "vertical",
  responsive: "false",
};

export default Row;
