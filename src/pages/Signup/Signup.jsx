import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Signup.css";

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

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleData = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showError = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const validation = (e) => {
    e.preventDefault();

    const { name, email, mobile, password } = form;

    if (!name || !email || !mobile || !password) {
      return showError("All Fields are Required");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return showError("Enter a Valid Email");
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      return showError("Enter a Valid Mobile Number");
    }

    if (password.length < 6) {
      return showError("Password must contain at least 6 characters");
    }

    const user = {
      name,
      email,
      mobile,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.div
            className="signup-error-box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        className="signup-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="signup-container">
          {/* =================================================
              LEFT PRODUCT IMAGE
          ================================================= */}
          <motion.div
            className="signup-image"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=85"
              alt="Join NovaX"
              className="auth-bg-img"
            />
            <div className="auth-image-overlay"></div>
            <div className="signup-image-content">
              <span className="signup-image-label">JOIN NOVAX</span>

              <h2>
                Start
                <br />
                <span>Something New.</span>
              </h2>

              <p>
                Create your NovaX account and discover products, styles, and
                everyday essentials curated for your shopping journey.
              </p>

              <div className="signup-image-features">
                <motion.span whileHover={{ scale: 1.05 }}>
                  New Collections
                </motion.span>
                <motion.span whileHover={{ scale: 1.05 }}>
                  Exclusive Deals
                </motion.span>
                <motion.span whileHover={{ scale: 1.05 }}>
                  Easy Shopping
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIGNUP FORM
          ================================================= */}
          <motion.div
            className="signup-form-section"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
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
                  Join NovaX to discover and order curated products.
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
          </motion.div>
        </div>
      </motion.main>
    </>
  );
};

export default Signup;