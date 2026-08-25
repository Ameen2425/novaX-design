import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Login.css";
import amezaLoginHero from "../../assets/ameza-login-hero.jpg";

import AuthHero from "../../components/auth/AuthHero/AuthHero";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleData(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function showError(message) {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 2800);
  }

  function validation(e) {
    e.preventDefault();
    const { email, password } = form;

    if (!email && !password) {
      return showError("All Fields are Required");
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      return showError("No account found. Please Sign Up first");
    }

    if (email !== user.email) {
      return showError("Email address does not match our records");
    }

    if (password !== user.password) {
      return showError("Incorrect password. Please try again");
    }

    setTimeout(() => {
      navigate("/");
    }, 800);
  }

  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.div
            className="error-box"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="error-icon">✦</span>
            <span>{error}</span>
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
        {/* Subtle ambient luxury glow */}
        <div className="auth-ambient-glow"></div>

        <div className="auth-container">
          {/* Left Editorial Section */}
          <AuthHero
            image={amezaLoginHero}
            label="AMEZA EDIT"
            title={
              <>
                Welcome
                <br />
                <span>Back.</span>
              </>
            }
            subtitle="Continue your shopping journey with AMEZA and discover curated luxury essentials."
            benefits={["Secure & Safe", "Fast Delivery", "Easy Returns"]}
          />

          {/* Right Form Section */}
          <motion.div
            className="auth-form-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <LoginForm
              form={form}
              handleData={handleData}
              validation={validation}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Login;