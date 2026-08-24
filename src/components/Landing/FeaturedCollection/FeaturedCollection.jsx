import React from "react";
import { motion } from "framer-motion";
import "./FeaturedCollection.css";

const tenets = [
  {
    num: "01",
    title: "Curation",
    tagline: "Choosing less, but choosing better.",
    desc: "We filter out the ephemeral noise to present only objects that elevate daily life through timeless form and enduring substance.",
  },
  {
    num: "02",
    title: "Craft",
    tagline: "Objects with character, material and intention.",
    desc: "Every silhouette, stitch, and scent carries the integrity of passionate artisans who prioritize longevity over planned obsolescence.",
  },
  {
    num: "03",
    title: "Discovery",
    tagline: "Finding something unexpected in the everyday.",
    desc: "Luxury is not ostentation — it is the quiet revelation of beauty in the tools, rituals, and environments we inhabit daily.",
  },
];

const FeaturedCollection = () => {
  return (
    <section className="featured-collection-section" id="philosophy">
      <div className="featured-collection-container">
        {/* Section Header */}
        <div className="philosophy-header">
          <span className="featured-eyebrow">OUR PHILOSOPHY</span>
          <h2 className="philosophy-title">
            We believe the ordinary <br />
            <span className="featured-italic">can be extraordinary.</span>
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="philosophy-grid">
          {tenets.map((tenet, idx) => (
            <motion.div
              key={tenet.num}
              className="philosophy-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
            >
              <span className="philosophy-num">{tenet.num}</span>
              <h3 className="philosophy-card-title">{tenet.title}</h3>
              <div className="philosophy-tagline">{tenet.tagline}</div>
              <p className="philosophy-card-desc">{tenet.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
