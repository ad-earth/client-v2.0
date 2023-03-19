import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import MyLayout from '../../components/common/MyLayout';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CartPage from '../../pages/CartPage';
import CompletePage from '../../pages/CompletePage';
import DetailPage from '../../pages/DetailPage';
import ListPage from '../../pages/ListPage';
import LogInPage from '../../pages/LogInPage';
import MainPage from '../../pages/MainPage';
import MyCancelPage from '../../pages/MyCancelPage';
import MyOrderDetailPage from '../../pages/MyOrderDetailPage';
import MyOrderPage from '../../pages/MyOrderPage';
import MyWishPage from '../../pages/MyWishPage';
import NotFoundPage from '../../pages/NotFoundPage';
import PaymentPage from '../../pages/PaymentPage';
import SearchPage from '../../pages/SearchPage';
import SignUpPage from '../../pages/SignUpPage';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/list/:category" element={<ListPage />} />
        <Route path="/search/:keyword" element={<SearchPage />} />
        <Route path="/detail/:productNo" element={<DetailPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route element={<MyLayout />}>
          <Route path="mypage">
            <Route index element={<MyOrderPage />} />
            <Route path=":id" element={<MyOrderDetailPage />} />
            <Route path="cancel-call/:id" element={<MyCancelPage />} />
          </Route>
          <Route path="wish" element={<MyWishPage />} />
          <Route path="cancel">
            <Route index element={<MyOrderPage />} />
            <Route path=":id" element={<MyOrderDetailPage />} />
          </Route>
        </Route>
        <Route path="cart" element={<CartPage />} />
        <Route path="payment/:productNo" element={<PaymentPage />} />
        <Route path="complete" element={<CompletePage />} />
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
