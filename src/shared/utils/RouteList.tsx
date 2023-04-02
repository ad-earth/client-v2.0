import MyLayout from '../../components/common/MyLayout';
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

interface RouterBase {
  id: number;
  path?: string;
  index?: boolean;
  element?: React.ReactNode;
  withAuth?: boolean;
  redirectPath?: string;
}
interface NestedRouterBase {
  id: number;
  path?: string;
  element?: React.ReactNode;
  children?: RouterBase[];
}

export const routerData: RouterBase[] = [
  {
    id: 0,
    path: '/',
    element: <MainPage />,
    withAuth: false,
  },
  {
    id: 1,
    path: '/list/:category',
    element: <ListPage />,
    withAuth: false,
  },
  {
    id: 2,
    path: '/search/:keyword',
    element: <SearchPage />,
    withAuth: false,
  },
  {
    id: 3,
    path: '/detail/:productNo',
    element: <DetailPage />,
    withAuth: false,
  },
  {
    id: 4,
    path: 'login',
    element: <LogInPage />,
    withAuth: false,
  },
  {
    id: 5,
    path: 'signup',
    element: <SignUpPage />,
    withAuth: false,
  },
  {
    id: 6,
    element: <MyLayout />,
    withAuth: true,
    redirectPath: '/',
  },
  {
    id: 7,
    path: 'cart',
    element: <CartPage />,
    withAuth: true,
    redirectPath: '/',
  },
  {
    id: 8,
    path: 'payment',
    element: <PaymentPage />,
    withAuth: true,
    redirectPath: '/',
  },
  {
    id: 9,
    path: 'complete',
    element: <CompletePage />,
    withAuth: true,
  },
  {
    id: 10,
    path: '*',
    element: <NotFoundPage />,
    withAuth: false,
  },
];

export const myRouteData: NestedRouterBase[] = [
  {
    id: 0,
    path: 'mypage',
    children: [
      {
        id: 0,
        index: true,
        element: <MyOrderPage />,
      },
      {
        id: 1,
        path: ':id',
        index: false,
        element: <MyOrderDetailPage />,
      },
      {
        id: 2,
        path: 'cancel-call/:id',
        index: false,
        element: <MyCancelPage />,
      },
    ],
  },
  {
    id: 1,
    path: 'wish',
    element: <MyWishPage />,
  },
  {
    id: 2,
    path: 'cancel',
    children: [
      {
        id: 0,
        index: true,
        element: <MyOrderPage />,
      },
      {
        id: 1,
        path: ':id',
        index: false,
        element: <MyOrderDetailPage />,
      },
    ],
  },
];
