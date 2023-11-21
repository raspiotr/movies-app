import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.Container}>
      <header className={css.Header}>
        <nav className={css.Nav}>
          <NavLink
            to="/"
            exact
            className={css.Link}
            activeClassName={css.Active}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={css.Link}
            activeClassName={css.Active}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
