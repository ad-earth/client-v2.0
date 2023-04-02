import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProtectedRoute from '../../pages/ProtectedRoute';
import { myRouteData, routerData } from './RouteList';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {routerData.map(router => {
        if (router.withAuth) {
          return (
            <Route
              key={router.id}
              path={router.path}
              element={
                <ProtectedRoute redirectPath={router.redirectPath}>
                  {router.element}
                </ProtectedRoute>
              }
            >
              {myRouteData.map(myRouter => {
                return (
                  <Route
                    key={myRouter.id}
                    path={myRouter.path}
                    element={myRouter.element}
                  >
                    {myRouter.children &&
                      myRouter.children.map(item => (
                        <Route
                          index={item.index}
                          key={item.id}
                          path={item.path}
                          element={item.element}
                        />
                      ))}
                  </Route>
                );
              })}
            </Route>
          );
        } else {
          return (
            <Route
              key={router.id}
              path={router.path}
              element={router.element}
            />
          );
        }
      })}
    </Route>
  )
);

export default Router;

function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  min-height: 850px;
`;
