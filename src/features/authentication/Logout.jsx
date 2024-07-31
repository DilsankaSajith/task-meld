import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';
import styled from 'styled-components';

const LogoutButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  background-color: var(--color-brand-50);
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: var(--color-brand-800);
    color: var(--color-grey-50);
  }
`;

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <LogoutButton disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </LogoutButton>
  );
}

export default Logout;
