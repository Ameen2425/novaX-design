import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Login.css";
import novaxLoginHero from "../../assets/novax-login-hero.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const Login = () => {
  let navigate = useNavigate();

  let [form, setForm] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState("");

  function handleData(e) {
    let { name, value } = e.target;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function showError(message) {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 2000);
  }

  function validation(e) {
    e.preventDefault();
    let { email, password } = form;

    if (!email && !password) {
      return showError("All Fields are Required");
    }

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return showError("Please Signup First");
    }

    if (email !== user.email) {
      return showError("Email Does Not Match");
    }

    if (password !== user.password) {
      return showError("Password Does Not Match");
    }

    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.div
            className="error-box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="auth-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="auth-container">
          {/* LEFT IMAGE */}
          <motion.div
            className="login-image"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img
              src={novaxLoginHero}
              alt="NovaX Editorial Boutique Shopping Experience"
              className="auth-bg-img"
            />
            <div className="auth-image-overlay"></div>
            <div className="auth-image-content">
              <span className="auth-image-label">NOVAX EDIT</span>

              <h2>
                Welcome
                <br />
                Back.
              </h2>

              <p>
                Continue your shopping journey with NovaX and discover
                something you will love.
              </p>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            className="auth-form-section"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="auth-form-wrapper">
              <Link to="/" className="auth-back-link">
                ← Back to Home
              </Link>
              <motion.form
                className="auth-form"
                initial="hidden"
                animate="show"
                variants={staggerContainer}
              >
                <motion.span className="auth-form-badge" variants={fadeInUp}>
                  ACCOUNT ACCESS
                </motion.span>
                <motion.h1 variants={fadeInUp}>Welcome Back</motion.h1>

                <motion.p className="auth-subtitle" variants={fadeInUp}>
                  Enter your details to access your NovaX account.
                </motion.p>

                <motion.div className="form-group" variants={fadeInUp}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={form.email}
                    onChange={handleData}
                  />
                </motion.div>

                <motion.div className="form-group" variants={fadeInUp}>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={form.password}
                    onChange={handleData}
                  />
                </motion.div>

                <motion.div className="auth-options" variants={fadeInUp}>
                  <div className="checkbox-group">
                    <input type="checkbox" />
                    <label>Remember me</label>
                  </div>

                  <Link to="#">Forgot Password?</Link>
                </motion.div>

                <motion.button
                  className="auth-btn"
                  onClick={(e) => validation(e)}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Login
                </motion.button>

                <motion.p variants={fadeInUp}>
                  Don't have an account?
                  <Link to="/signup"> Sign Up</Link>
                </motion.p>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Login;