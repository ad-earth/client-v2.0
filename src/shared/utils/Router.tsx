import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from 'react-router-dom';
import Header from '../../components/Header';
import LogInPage from '../../pages/LogInPage';

import MainPage from '../../pages/MainPage';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LogInPage />} />
      </Route>
    </>
  )
);
export default Router;

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
