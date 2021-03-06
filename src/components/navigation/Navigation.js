import { NavLink } from "react-router-dom";

const Navigation = ({ routes, url = "", savedResult }) => {
  return (
    <ul className="add_info__list">
      {routes.map((route) => (
        <li key={route.path}>
          <NavLink
            className="movie__info_link"
            activeClassName="movie__info_link_active"
            to={{ pathname: url + route.path, state: { ...savedResult } }}
            exact={route.exact}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
