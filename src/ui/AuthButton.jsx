import styled from 'styled-components';

const AuthButton = styled.button`
  background-color: var(--color-brand-500);
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  font-weight: 600;
  color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  margin-block: 2.4rem;

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

export default AuthButton;
