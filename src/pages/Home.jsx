import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../ui/Logo';
import Heading from '../ui/Heading';
import AuthButton from '../ui/AuthButton';

const HomeContainer = styled.div`
  background-color: var(--color-brand-50);

  display: grid;
  margin: 3.2rem;
  padding: 6rem;
  min-height: 100vh;
  border-radius: var(--border-radius-sm);
  align-content: center;
  justify-content: center;
  place-items: center;
`;

const HomeContainerLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const LogoContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  place-items: center;
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
`;

const MainButton = styled.button`
  background-color: var(--color-brand-500);
  width: 25%;
  padding: 0.7rem 1.4rem;
  border: none;
  font-weight: 600;
  color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  margin-top: 3rem;
  box-shadow: var(--shadow-lg);

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HomeContainerLayout>
        <LogoContainer>
          <Logo src="/logo-light.png" />
          <Heading as="h1">TaskMeld</Heading>
        </LogoContainer>
        <div>
          <Paragraph>
            Welcome to <strong>TaskMeld</strong>, The premier web app designed
            to streamline your academic life. <br />
            <br />
            If you’re a student juggling multiple assignments, TaskMeld has got
            you covered. Our intuitive interface and powerful features make it
            easier than ever to stay organized and on top of your tasks.
          </Paragraph>
          <MainButton onClick={() => navigate('/signup')}>Signup</MainButton>
        </div>
      </HomeContainerLayout>
    </HomeContainer>
  );
}

export default Home;
