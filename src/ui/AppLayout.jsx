import { Outlet } from 'react-router';
import styled from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 23rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.div`
  background-color: var(--color-brand-50);
  padding: 4rem 4rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 128rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
