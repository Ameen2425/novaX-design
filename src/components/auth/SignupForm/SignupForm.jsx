import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./SignupForm.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const SignupForm = ({ form, handleData, validation }) => {
  return (
    <div className="signup-form-wrapper">
      <Link to="/" className="signup-back-link">
        ← Back to Home
      </Link>
      <motion.form
        className="signup-form"
        onSubmit={validation}
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <motion.p className="signup-form-label" variants={fadeInUp}>
          CREATE YOUR ACCOUNT
        </motion.p>

        <motion.h1 variants={fadeInUp}>Sign Up</motion.h1>

        <motion.p className="signup-subtitle" variants={fadeInUp}>
          Join AMEZA to discover and order curated products.
        </motion.p>

        {/* NAME */}
        <motion.div className="signup-form-group" variants={fadeInUp}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleData}
          />
        </motion.div>

        {/* EMAIL */}
        <motion.div className="signup-form-group" variants={fadeInUp}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleData}
          />
        </motion.div>

        {/* MOBILE */}
        <motion.div className="signup-form-group" variants={fadeInUp}>
          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            value={form.mobile}
            onChange={handleData}
          />
        </motion.div>

        {/* PASSWORD */}
        <motion.div className="signup-form-group" variants={fadeInUp}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create your password"
            value={form.password}
            onChange={handleData}
          />
        </motion.div>

        {/* TERMS */}
        <motion.div className="signup-terms" variants={fadeInUp}>
          <input type="checkbox" required />
          <label>I agree to the Terms and Conditions</label>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          type="submit"
          className="signup-submit-btn"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          Create Account
          <span>→</span>
        </motion.button>

        {/* LOGIN */}
        <motion.p className="signup-login-text" variants={fadeInUp}>
          Already have an account?
          <Link to="/login"> Login</Link>
        </motion.p>
      </motion.form>
    </div>
  );
};

export default SignupForm;
