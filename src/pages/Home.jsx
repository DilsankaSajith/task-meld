import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHome = styled.div`
  color: var(--color-green-500);
  font-size: 1.4rem;
  max-width: 500px;
  line-height: 1.4;
`;

function Home() {
  return (
    <StyledHome>
      <NavLink to="/login">Login</NavLink>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dicta
        ducimus cumque! Dolores nulla asperiores cupiditate accusamus. Illo
        consectetur molestias nobis saepe cupiditate placeat alias eveniet
        debitis. Provident, porro assumenda?
      </p>
    </StyledHome>
  );
}

export default Home;
