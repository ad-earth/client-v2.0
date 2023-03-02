import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from '../../components/common/Layout';
import ListPage from '../../pages/ListPage';
import MainPage from '../../pages/MainPage';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/list/:category" element={<ListPage />} />
      </Route>
    </>
  )
);
export default Router;
