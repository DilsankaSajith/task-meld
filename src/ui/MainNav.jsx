import { HiListBullet, HiMiniPaperClip } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FlexX from './FlexX';

const StyledMainNav = styled.div`
  margin-top: 4rem;
  font-size: 1.8rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: flex-start;
`;

const StyledLi = styled.li`
  font-weight: 600;
  &:hover {
    color: var(--color-grey-500);
  }
`;

function MainNav() {
  return (
    <StyledMainNav>
      <StyledUl>
        <FlexX>
          <HiListBullet />
          <StyledLi>
            <NavLink to="/create">create</NavLink>
          </StyledLi>
        </FlexX>
        <FlexX>
          <HiMiniPaperClip />
          <StyledLi>
            <NavLink to="/showcase">showcase</NavLink>
          </StyledLi>
        </FlexX>
      </StyledUl>
    </StyledMainNav>
  );
}

export default MainNav;
