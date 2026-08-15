import { useLocation } from "react-router-dom";
import { AppRouter } from "../AppRouter/AppRouter";
import "./MainLayout.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {

  const location = useLocation();

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