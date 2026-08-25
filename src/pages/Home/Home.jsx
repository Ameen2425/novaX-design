import { motion } from "framer-motion";
import "./Home.css";

// Home Components
import HomeHero from "../../components/home/HomeHero/HomeHero";
import BrandOverview from "../../components/home/BrandOverview/BrandOverview";
import CategorySection from "../../components/home/CategorySection/CategorySection";
import PromoBanner from "../../components/home/PromoBanner/PromoBanner";
import BenefitsSection from "../../components/home/BenefitsSection/BenefitsSection";
import StatsSection from "../../components/home/StatsSection/StatsSection";
import LocationSection from "../../components/home/LocationSection/LocationSection";

const Home = () => {
  return (
    <motion.main
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <HomeHero />
      <BrandOverview />
      <CategorySection />
      <PromoBanner />
      <BenefitsSection />
      <StatsSection />
      <LocationSection />
    </motion.main>
  );
};

export default Home;