import { NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const location = useLocation();

  const homeLinkStyle = {
    color: location.pathname === "/" ? "#0B44CD" : "#3470FF",
  };
  const catalogLinkStyle = {
    color: location.pathname === "/catalog" ? "#0B44CD" : "#3470FF",
  };
  const favoritesLinkStyle = {
    color: location.pathname === "/favorites" ? "#0B44CD" : "#3470FF",
  };

  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink to="/" style={homeLinkStyle}>
          Home
        </NavLink>

        <NavLink to="/catalog" style={catalogLinkStyle}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" style={favoritesLinkStyle}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};
