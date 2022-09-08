import { lazy, Suspense } from "react";
import {
  Route,
  Routes as RouteWrapper,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';

const Home = lazy(() => import('./screens/Home/home'));

const Routes = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <RouteWrapper>
          <Route path="/user/list" element={<Home />} />

          <Route path="*" element={<Navigate to="/user/list" />} />
        </RouteWrapper>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
