import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
const Home = lazy(() => import('../pages/Home/Home'));
//import { Loader } from './Loader/Loader';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
