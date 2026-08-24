import { motion } from "framer-motion";
import "./WhyAmeza.css";

const worlds = [
  {
    num: "01",
    title: "STYLE",
    desc: "Objects that speak quietly but stay with you.",
  },
  {
    num: "02",
    title: "RITUAL",
    desc: "The considered things that make the everyday remarkable.",
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "Form, material and purpose working as one.",
  },
  {
    num: "04",
    title: "EVERYDAY",
    desc: "Enduring quality that improves with use and time.",
  },
];

const WhyAmeza = () => (
  <section
    className="ameza-world-section"
    id="ameza-world"
    aria-labelledby="world-heading"
  >
    <div className="ameza-world-inner">
      <motion.div
        className="world-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <div>
          <span className="world-label">The AMEZA World</span>
          <h2 id="world-heading" className="world-heading">
            Four Ways<br />to Discover
          </h2>
        </div>
        <span className="world-meta">CURATED / CONSIDERED / COLLECTED</span>
      </motion.div>

      <div className="world-panels-grid">
        {worlds.map((world, idx) => (
          <motion.div
            key={world.title}
            className="world-panel"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="world-panel-inner" data-num={world.num}>
              <div className="world-panel-bg" aria-hidden="true" />
              <div className="world-panel-overlay" aria-hidden="true" />
              <div className="world-panel-content">
                <span className="world-panel-num">{world.num}</span>
                <h3 className="world-panel-title">{world.title}</h3>
                <p className="world-panel-desc">{world.desc}</p>
                <div className="world-panel-arrow" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyAmeza;
