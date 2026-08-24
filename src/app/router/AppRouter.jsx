import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageLoader from "../../components/common/PageLoader/PageLoader";

export const Home = React.lazy(() => import("../../pages/Home/Home"));
export const Landing = React.lazy(() => import("../../pages/Landing/Landing"));
export const About = React.lazy(() => import("../../pages/About/About"));
export const Products = React.lazy(() => import("../../pages/Products/products"));
export const Deals = React.lazy(() => import("../../pages/Deals/Deals"));
export const Cart = React.lazy(() => import("../../pages/Cart/Cart"));
export const Login = React.lazy(() => import("../../pages/Login/Login"));
export const Signup = React.lazy(() => import("../../pages/Signup/Signup"));
export const Users = React.lazy(() => import("../../pages/Users/Users"));
export const SingleProduct = React.lazy(() => import("../../pages/SinglePage/SingleProduct"));

export const AppRouter = () => {
  const location = useLocation();

  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/landing",
      element: <Landing />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/deals",
      element: <Deals />,
    },
    {
      path: "/products/:id",
      element: <SingleProduct />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/user",
      element: <Users />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ];

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};