import styled from "styled-components";

const ButtonText = styled.button`
  color: var(--color-brand-600);

  font-weight: 500;
  text-align: left;
  transition: all 0.3s;
  background: none;
  border: none;

  &:hover,
  &:active {
    color: var(--color-brand-700);
    text-decoration: underline;
  }
`;

export default ButtonText;
