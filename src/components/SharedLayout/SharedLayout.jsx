import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <div className={css.Container}>
      <header className={css.Header}>
        <nav className={css.Nav}>
          <NavLink to="/" className={css.Link} end>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.Link}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
