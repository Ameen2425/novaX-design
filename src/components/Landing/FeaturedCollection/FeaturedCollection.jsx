import { motion } from "framer-motion";
import "./FeaturedCollection.css";

const pillars = [
  {
    num: "01",
    title: "Curation",
    body: "Choosing less, but choosing better. Every piece earns its place through material, craft and the feeling it creates in the everyday.",
  },
  {
    num: "02",
    title: "Craft",
    body: "Objects with character, material and intention. Things made with hands, with patience, with a clear sense of purpose.",
  },
  {
    num: "03",
    title: "Discovery",
    body: "Finding something unexpected in the ordinary. The quiet pleasure of an object that reveals more the longer you live with it.",
  },
];

const FeaturedCollection = () => (
  <section
    className="philosophy-section"
    id="philosophy"
    aria-labelledby="philosophy-heading"
  >
    <div className="philosophy-inner">
      <motion.div
        className="philosophy-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="philosophy-label">Our Philosophy</span>
        <h2 id="philosophy-heading" className="philosophy-heading">
          WE BELIEVE<br />
          THE ORDINARY<br />
          <em>CAN BE</em><br />
          EXTRAORDINARY.
        </h2>
      </motion.div>

      <div className="philosophy-pillars">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            className="philosophy-pillar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="pillar-number">{pillar.num}</span>
            <h3 className="pillar-title">{pillar.title}</h3>
            <div className="pillar-dash" aria-hidden="true" />
            <p className="pillar-body">{pillar.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCollection;
