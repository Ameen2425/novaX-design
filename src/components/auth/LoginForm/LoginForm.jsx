import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./LoginForm.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
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

const LoginForm = ({ form, handleData, validation }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-form-wrapper">
      <Link to="/" className="auth-back-link" title="Return to Home">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>Back to Home</span>
      </Link>

      <motion.form
        className="auth-form-card"
        onSubmit={validation}
        initial="hidden"
        animate="show"
        variants={staggerContainer}
      >
        <motion.div className="auth-header-block" variants={fadeInUp}>
          <span className="auth-form-badge">ACCOUNT ACCESS</span>
          <h1 className="auth-form-title">Welcome Back</h1>
          <p className="auth-subtitle">Enter your credentials to access your AMEZA private collection.</p>
        </motion.div>

        {/* EMAIL FIELD */}
        <motion.div className="form-group" variants={fadeInUp}>
          <label htmlFor="login-email">Email Address</label>
          <div className="input-wrap">
            <svg className="input-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <input
              id="login-email"
              type="email"
              placeholder="name@example.com"
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
          <div className="form-group-header">
            <label htmlFor="login-password">Password</label>
            <Link to="#" className="forgot-link">Forgot Password?</Link>
          </div>
          <div className="input-wrap password-wrap">
            <svg className="input-field-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )}
            </button>
          </div>
        </motion.div>

        {/* REMEMBER ME */}
        <motion.div className="auth-options" variants={fadeInUp}>
          <label className="checkbox-wrap">
            <input type="checkbox" defaultChecked />
            <span className="checkbox-custom"></span>
            <span className="checkbox-label">Keep me signed in</span>
          </label>
        </motion.div>

        {/* SUBMIT BUTTON */}
        <motion.button
          type="submit"
          className="auth-primary-btn"
          variants={fadeInUp}
          whileHover={{ translateY: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>SIGN IN</span>
          <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </motion.button>

        {/* AUTH SWITCH */}
        <motion.p className="auth-switch-text" variants={fadeInUp}>
          Don't have an account?{" "}
          <Link to="/signup" className="auth-switch-link">Create Account</Link>
        </motion.p>
      </motion.form>
    </div>
  );
};

export default LoginForm;
