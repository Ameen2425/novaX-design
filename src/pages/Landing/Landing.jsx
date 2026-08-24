import React from "react";
import LandingHeader from "../../components/Landing/LandingHeader/LandingHeader";
import LandingHero from "../../components/Landing/LandingHero/LandingHero";
import BrandStatement from "../../components/Landing/BrandStatement/BrandStatement";
import CategoryShowcase from "../../components/Landing/CategoryShowcase/CategoryShowcase";
import FeaturedCollection from "../../components/Landing/FeaturedCollection/FeaturedCollection";
import ProductHighlights from "../../components/Landing/ProductHighlights/ProductHighlights";
import EditorialBanner from "../../components/Landing/EditorialBanner/EditorialBanner";
import WhyAmeza from "../../components/Landing/WhyAmeza/WhyAmeza";
import BrandStory from "../../components/Landing/BrandStory/BrandStory";
import LandingCTA from "../../components/Landing/LandingCTA/LandingCTA";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="ameza-landing-page">
      <LandingHeader />
      <LandingHero />
      <BrandStatement />
      <CategoryShowcase />
      <FeaturedCollection />
      <ProductHighlights />
      <EditorialBanner />
      <WhyAmeza />
      <BrandStory />
      <LandingCTA />
    </div>
  );
};

export default Landing;
