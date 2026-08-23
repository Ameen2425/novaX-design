import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./SignupForm.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04
    }
  }
};

const SignupForm = ({ form, handleData, validation }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-form-wrapper">
      <Link to="/" className="signup-back-link">
        <span className="back-arrow">←</span> Back to Home
      </Link>

      <motion.form
        className="signup-form-card"
        onSubmit={validation}
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <motion.p className="signup-form-label" variants={fadeInUp}>
          JOIN AMEZA
        </motion.p>

        <motion.h1 className="signup-form-title" variants={fadeInUp}>
          Create Account
        </motion.h1>

        <motion.p className="signup-subtitle" variants={fadeInUp}>
          Join AMEZA to discover and order curated luxury products.
        </motion.p>

        {/* FULL NAME */}
        <motion.div className="signup-form-group" variants={fadeInUp}>
          <label htmlFor="signup-name">Full Name</label>
          <div className="input-wrap">
            <input
              id="signup-name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              autoComplete="name"
              value={form.name}
              onChange={handleData}
              required
            />
          </div>
        </motion.div>

        {/* EMAIL */}
        <motion.div className="signup-form-group" variants={fadeInUp}>
          <label htmlFor="signup-email">Email Address</label>
          <div className="input-wrap">
            <input
              id="signup-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              value={form.email}
              onChange={handleData}
              required
            />
          </div>
        </motion.div>

        {/* MOBILE */}
        <motion.div className="signup-form-group" variants={fadeInUp}>
          <label htmlFor="signup-mobile">Mobile Number</label>
          <div className="input-wrap">
            <input
              id="signup-mobile"
              type="tel"
              name="mobile"
              placeholder="10-digit mobile number"
              autoComplete="tel"
              value={form.mobile}
              onChange={handleData}
              required
            />
          </div>
        </motion.div>

        {/* PASSWORD */}
        <motion.div className="signup-form-group" variants={fadeInUp}>
          <label htmlFor="signup-password">Password</label>
          <div className="input-wrap password-wrap">
            <input
              id="signup-password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create your password (min 6 chars)"
              autoComplete="new-password"
              value={form.password}
              onChange={handleData}
              required
            />
            <button
              type="button"
              className="pwd-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
        </motion.div>

        {/* TERMS */}
        <motion.div className="signup-terms" variants={fadeInUp}>
          <label className="checkbox-wrap">
            <input type="checkbox" required defaultChecked />
            <span className="checkbox-custom"></span>
            <span className="checkbox-label">I agree to the Terms and Conditions</span>
          </label>
        </motion.div>

        {/* SUBMIT BUTTON */}
        <motion.button
          type="submit"
          className="signup-primary-btn"
          variants={fadeInUp}
          whileHover={{ translateY: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>CREATE ACCOUNT</span>
          <span className="btn-arrow">→</span>
        </motion.button>

        {/* LOGIN LINK */}
        <motion.p className="signup-login-text" variants={fadeInUp}>
          Already have an account?
          <Link to="/login" className="signup-login-link"> Login</Link>
        </motion.p>
      </motion.form>
    </div>
  );
};

export default SignupForm;
