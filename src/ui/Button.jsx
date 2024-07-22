import styled, { css } from "styled-components";

const Button = styled.button`
  border: 1px solid var(--color-${(props) => props.bgcolor}-500);
  padding: 0.4rem 0.7rem;
  border-radius: var(--border-radius-sm);
  font-size: 1.2rem;
  font-weight: 600;
  transition: 0.5s ease;
  letter-spacing: 0.1rem;

  box-shadow: var(--shadow-sm);
  text-transform: uppercase;
  background-color: var(--color-${(props) => props.bgcolor}-200);

  &:hover {
    background-color: var(--color-${(props) => props.bgcolor}-500);
  }
`;

export default Button;
