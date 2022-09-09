import { lazy, Suspense } from "react";
import {
  Route,
  Routes as RouteWrapper,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

const Layout = lazy(() => import("./screens/Layout/layout"));
const UserList = lazy(() => import("./screens/User/list"));
const UserData = lazy(() => import("./screens/User/data"));

const Routes = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <RouteWrapper>
          <Route
            path="/user/list"
            element={
              <Layout>
                <UserList />
              </Layout>
            }
          />
          <Route
            path="/user/data"
            element={
              <Layout>
                <UserData />
              </Layout>
            }
          />

          <Route path="*" element={<Navigate to="/user/list" />} />
        </RouteWrapper>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
