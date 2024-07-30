import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis dicta
        ducimus cumque! Dolores nulla asperiores cupiditate accusamus. Illo
        consectetur molestias nobis saepe cupiditate placeat alias eveniet
        debitis. Provident, porro assumenda?
      </p>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );
}

export default Home;
