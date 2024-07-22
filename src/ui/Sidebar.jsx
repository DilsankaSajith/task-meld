import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  grid-row: 1 / -1;
  background-color: green;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <span>Sidebar</span>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
