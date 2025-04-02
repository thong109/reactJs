import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Users/HomePage";
import {
  ADMIN_PATH,
  ROUTERS
} from "./utils/router";
import MasterLayout from "./pages/Users/Theme/MasterLayout";
import MasterAdminLayout from "./pages/Admin/Theme/MasterAdminLayout";
import ProfilePage from "./pages/Users/ProfilePage";
import ProductsPage from "./pages/Users/ProductsPage";
import ProductDetailPage from "./pages/Users/ProductDetailPage";
import FontLoader from './utils/font.jsx';
import ShoppingCard from "./pages/Users/ShoppingCard";
import CheckoutPage from "./pages/Users/CheckoutPage/index.jsx";
import LoginPage from "./pages/Admin/LoginPage/index.jsx";
import OrdersPage from "./pages/Admin/OrdersPage/index.jsx";
import ProductsAdPage from "./pages/Admin/ProductsAdPage/index.jsx";
import DashboardPage from "./pages/Admin/DashboardPage/index.jsx";
import { ContextProvider, userStateContext } from "./contexts/ContextProvider.jsx";

const renderUserRoutes = () => {
  const userRoutes = [
    {
      path: ROUTERS.USER.HOME,
      component: < HomePage />
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: < ProfilePage />
    },
    {
      path: ROUTERS.USER.PRODUCT,
      component: < ProductsPage />
    },
    {
      path: ROUTERS.USER.PRODUCT_ID,
      component: < ProductDetailPage />
    },
    {
      path: ROUTERS.USER.CART,
      component: < ShoppingCard />
    },
    {
      path: ROUTERS.USER.CHECKOUT,
      component: < CheckoutPage />
    },
  ]

  return (
    <>
    <FontLoader />
    <MasterLayout>
      <Routes>
        {
          userRoutes.map((item, key) => (
            <Route key={key} path={item.path} element={item.component}/>
          ))
        }
      </Routes>
    </MasterLayout>
    </>
  )
}

const renderAdminRoutes = () => {
  const { userToken, currentUser } = userStateContext(ContextProvider);

  if (!userToken) {
    return (
      <>
        <FontLoader />
        <Routes>
          <Route path={ROUTERS.ADMIN.LOGIN} element={<LoginPage />} />
          <Route path="/*" element={<Navigate to={ROUTERS.ADMIN.LOGIN} />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <FontLoader />
      <MasterAdminLayout>
        <Routes>
          <Route path={ROUTERS.ADMIN.ORDERS} element={<OrdersPage />} />
          <Route path={ROUTERS.ADMIN.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTERS.ADMIN.PRODUCTS} element={<ProductsAdPage />} />
          <Route path="/*" element={<Navigate to={ROUTERS.ADMIN.DASHBOARD} />} />
        </Routes>
      </MasterAdminLayout>
    </>
  );
}

const RouterCustom = () => {
  const location = useLocation();
  const isAdminRouters = location.pathname.startsWith(ADMIN_PATH);
  return isAdminRouters ? renderAdminRoutes() : renderUserRoutes();
}

export default RouterCustom;
