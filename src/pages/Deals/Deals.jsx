import React from "react";
import { motion } from "framer-motion";
import "./Deals.css";

// Deals modular subcomponents
import DealsHero from "../../components/deals/DealsHero/DealsHero";
import DealTimer from "../../components/deals/DealTimer/DealTimer";
import DealCategories from "../../components/deals/DealCategories/DealCategories";
import DealProducts from "../../components/deals/DealProducts/DealProducts";
import FeaturedDeal from "../../components/deals/FeaturedDeal/FeaturedDeal";
import FlashDeals from "../../components/deals/FlashDeals/FlashDeals";
import DealBenefits from "../../components/deals/DealBenefits/DealBenefits";
import DealPromo from "../../components/deals/DealPromo/DealPromo";

const Deals = () => {
  return (
    <motion.main
      className="deals-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <DealsHero />
      <DealTimer />
      <DealCategories />
      <DealProducts />
      <FeaturedDeal />
      <FlashDeals />
      <DealBenefits />
      <DealPromo />
    </motion.main>
  );
};

export default Deals;
