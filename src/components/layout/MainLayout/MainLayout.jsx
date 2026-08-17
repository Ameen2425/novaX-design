import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AppRouter } from "../../../app/router/AppRouter";
import "./MainLayout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = () => {

  const location = useLocation();

  // Automatically scroll to the top of the page on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [location.pathname]);

  const pathLoc = [
    "/login",
    "/signup"
  ];

  const removePath = pathLoc.includes(
    location.pathname.toLowerCase()
  );

  return (
    <div className="main-layout">

      {!removePath && <Header />}

      <main className="main-content">
        <AppRouter />
      </main>

      {!removePath && <Footer />}

    </div>
  );
};

export default MainLayout;