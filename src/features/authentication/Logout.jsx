import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button disabled={isLoading} onClick={logout}>
      {/* 4.18 */}
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </button>
  );
}

export default Logout;
