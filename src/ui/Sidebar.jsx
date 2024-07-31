import styled from 'styled-components';
import MainNav from './MainNav';
import Logo from './Logo';

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-300);
  padding: 5rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo src="/logo-light.png"></Logo>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
