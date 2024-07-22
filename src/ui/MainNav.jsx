import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/create">create</NavLink>
        </li>
        <li>
          <NavLink to="/showcase">showcase</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
