import { NavLink } from "react-router-dom";

const Link = (props) => {
  const { children, href } = props;

  return (
    <NavLink className="nav-item" to={href}>
      {children}
    </NavLink>
  );
};

export default Link;
