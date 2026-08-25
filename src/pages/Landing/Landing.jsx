import React from "react";
import "./Landing.css";

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

const Landing = () => {
  return (
    <div className="ameza-landing-page">
      {/* Minimal editorial header — no cart, no ecommerce */}
      <LandingHeader />

      {/* 01 — Hero: Everything Worth Discovering */}
      <LandingHero />

      {/* 02 — Brand Statement: Less Noise. Better Choices. */}
      <BrandStatement />

      {/* 03 — Editorial Story: Our Approach (asymmetric image spread) */}
      <CategoryShowcase />

      {/* 04 — Philosophy: We Believe the Ordinary Can Be Extraordinary */}
      <FeaturedCollection />

      {/* 05 — Fullscreen Image Moment: The Beauty Is in the Details */}
      <EditorialBanner />

      {/* 06 — Artisan Story: Objects With a Sense of Place */}
      <ProductHighlights />

      {/* 07 — AMEZA World: Style / Ritual / Design / Everyday */}
      <WhyAmeza />

      {/* 08 — Typographic Interlude: Find What Stays */}
      <BrandStory />

      {/* 09 — Final Brand CTA: Enter AMEZA */}
      <LandingCTA />
    </div>
  );
};

export default Landing;
