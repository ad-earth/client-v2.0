import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
} from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LogInPage from '../../pages/LogInPage';
import MainPage from '../../pages/MainPage';
import ListPage from '../../pages/ListPage';
import Mypage from '../../pages/Mypage';
import MyOrder from '../../components/MyOrder';
import MyOrderDetail from '../../components/MyOrderDetail';
import MyCancelDetail from '../../components/MyCancelDetail';
import MyWish from '../../components/MyWish';
import NotFoundPage from '../../pages/NotFoundPage';
import SignUpPage from '../../pages/SignUpPage';
import SearchPage from '../../pages/SearchPage';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/list/:category" element={<ListPage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route element={<Mypage />}>
          <Route path="mypage">
            <Route index element={<MyOrder />} />
            <Route path=":id" element={<MyOrderDetail />} />
            <Route path="cancel-call/:id" element={<MyCancelDetail />} />
          </Route>
          <Route path="wish" element={<MyWish />} />
          <Route path="cancel">
            <Route index element={<MyOrder />} />
            <Route path=":id" element={<MyOrderDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
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
      <Footer />
    </>
  );
}
