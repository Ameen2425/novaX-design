import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./LoginForm.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05
    }
  }
};

const LoginForm = ({ form, handleData, validation }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-form-wrapper">
      <Link to="/" className="auth-back-link">
        <span className="back-arrow">←</span> Back to Home
      </Link>

      <motion.form
        className="auth-form-card"
        onSubmit={validation}
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <motion.span className="auth-form-badge" variants={fadeInUp}>
          ACCOUNT ACCESS
        </motion.span>

        <motion.h1 className="auth-form-title" variants={fadeInUp}>
          Welcome Back
        </motion.h1>

        <motion.p className="auth-subtitle" variants={fadeInUp}>
          Enter your details to access your AMEZA account.
        </motion.p>

        {/* EMAIL FIELD */}
        <motion.div className="form-group" variants={fadeInUp}>
          <label htmlFor="login-email">Email Address</label>
          <div className="input-wrap">
            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleData}
              required
            />
          </div>
        </motion.div>

        {/* PASSWORD FIELD */}
        <motion.div className="form-group" variants={fadeInUp}>
          <label htmlFor="login-password">Password</label>
          <div className="input-wrap password-wrap">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              autoComplete="current-password"
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

        {/* REMEMBER & FORGOT */}
        <motion.div className="auth-options" variants={fadeInUp}>
          <label className="checkbox-wrap">
            <input type="checkbox" defaultChecked />
            <span className="checkbox-custom"></span>
            <span className="checkbox-label">Remember me</span>
          </label>

          <Link to="#" className="forgot-link">Forgot Password?</Link>
        </motion.div>

        {/* SUBMIT BUTTON */}
        <motion.button
          type="submit"
          className="auth-primary-btn"
          variants={fadeInUp}
          whileHover={{ translateY: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>LOGIN</span>
          <span className="btn-arrow">→</span>
        </motion.button>

        {/* AUTH SWITCH */}
        <motion.p className="auth-switch-text" variants={fadeInUp}>
          Don't have an account?
          <Link to="/signup" className="auth-switch-link"> Sign Up</Link>
        </motion.p>
      </motion.form>
    </div>
  );
};

export default LoginForm;
