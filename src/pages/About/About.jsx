import { motion } from "framer-motion";
import "./About.css";

import AboutHero from "../../components/about/AboutHero/AboutHero";
import AboutStats from "../../components/about/AboutStats/AboutStats";
import OurStory from "../../components/about/OurStory/OurStory";
import OurValues from "../../components/about/OurValues/OurValues";
import AboutFeatures from "../../components/about/AboutFeatures/AboutFeatures";
import AboutCTA from "../../components/about/AboutCTA/AboutCTA";

const About = () => {
  return (
    <motion.main
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <AboutHero />
      <AboutStats />
      <OurStory />
      <OurValues />
      <AboutFeatures />
      <AboutCTA />
    </motion.main>
  );
};

export default About;