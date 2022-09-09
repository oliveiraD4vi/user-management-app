import { lazy, Suspense } from "react";
import {
  Route,
  Routes as RouteWrapper,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

const Layout = lazy(() => import("./screens/Layout/layout"));
const Home = lazy(() => import("./screens/Home/home"));
const User = lazy(() => import("./screens/UserData/userData"));

const Routes = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <RouteWrapper>
          <Route
            path="/user/list"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/user/data"
            element={
              <Layout>
                <User />
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
