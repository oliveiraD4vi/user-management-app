import { lazy, Suspense } from "react";
import {
  Route,
  Routes as RouteWrapper,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

const Layout = lazy(() => import("./screens/Layout/layout"));
const Consult = lazy(() => import("./screens/Consult/consult"));
const Register = lazy(() => import("./screens/Register/register"));
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
          <Route
            path="/consult"
            element={
              <Layout>
                <Consult />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
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
