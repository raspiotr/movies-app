import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.Container}>
      <header className={css.Header}>
        <nav className={css.Nav}>
          <NavLink className={css.Link} to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
