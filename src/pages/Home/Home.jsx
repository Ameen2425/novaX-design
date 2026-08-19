import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./Home.css";

// Home Components
import HomeHero from "../../components/home/HomeHero/HomeHero";
import CategorySection from "../../components/home/CategorySection/CategorySection";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import PromoBanner from "../../components/home/PromoBanner/PromoBanner";
import BenefitsSection from "../../components/home/BenefitsSection/BenefitsSection";
import StatsSection from "../../components/home/StatsSection/StatsSection";
import LocationSection from "../../components/home/LocationSection/LocationSection";
import FinalCTA from "../../components/home/FinalCTA/FinalCTA";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=12"
      );
      setProducts(data.products || []);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <motion.main
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <HomeHero />
      <CategorySection />
      <FeaturedProducts products={products} loading={loading} />
      <PromoBanner />
      <BenefitsSection />
      <StatsSection />
      <LocationSection />
      <FinalCTA />
    </motion.main>
  );
};

export default Home;