import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AppRouter } from "../../../app/router/AppRouter";
import "./MainLayout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollProgress from "../../common/ScrollProgress/ScrollProgress";
import BackToTop from "../../common/BackToTop/BackToTop";

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

  const noHeaderPaths = [
    "/login",
    "/signup",
    "/landing"
  ];

  const noFooterPaths = [
    "/login",
    "/signup",
    "/landing"
  ];

  const hideHeader = noHeaderPaths.includes(
    location.pathname.toLowerCase()
  );

  const hideFooter = noFooterPaths.includes(
    location.pathname.toLowerCase()
  );

  return (
    <div className="main-layout">
      {/* Sitewide Scroll Progress Indicator */}
      <ScrollProgress />

      {!hideHeader && <Header />}

      <main className="main-content">
        <AppRouter />
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;