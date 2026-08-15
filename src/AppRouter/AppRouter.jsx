import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/Loader/Loader";

export const Home = React.lazy(() => import("../pages/Home/Home"));
export const About = React.lazy(() => import("../pages/About/About"));
export const Products = React.lazy(() => import("../pages/Products/products"));
export const Cart = React.lazy(() => import("../pages/Cart/Cart"));
export const Login = React.lazy(() => import("../pages/Login/Login"));
export const Signup = React.lazy(() => import("../pages/Signup/Signup"));
export const Users = React.lazy(() => import("../pages/Users/Users"));
export const SingleProduct = React.lazy(() => import("../pages/SinglePage/SingleProduct"));

export const AppRouter = () => {

  const routes = [
    {
      path: "/",
      element: <Home />,
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
    <Suspense fallback={<Loader />}>
      <Routes>

        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}

      </Routes>
    </Suspense>
  );
};