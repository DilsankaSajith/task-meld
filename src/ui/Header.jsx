import styled from 'styled-components';
import Logout from '../features/authentication/Logout';

const StyledHeader = styled.header`
  background-color: #00ff73;
  padding: 1.2rem 4.8rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
}

export default Header;
