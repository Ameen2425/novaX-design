import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Signup.css";
import amezaSignupHero from "../../assets/ameza-signup-hero.jpg";

import AuthHero from "../../components/auth/AuthHero/AuthHero";
import SignupForm from "../../components/auth/SignupForm/SignupForm";

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
    }, 2800);
  };

  const validation = (e) => {
    e.preventDefault();

    const { name, email, mobile, password } = form;

    if (!name || !email || !mobile || !password) {
      return showError("All fields are required");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return showError("Please enter a valid email address");
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      return showError("Please enter a valid 10-digit mobile number");
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
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="signup-error-icon">✦</span>
            <span>{error}</span>
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
        {/* Subtle ambient luxury glow */}
        <div className="signup-ambient-glow"></div>

        <div className="signup-container">
          {/* Left Editorial Section */}
          <AuthHero
            image={amezaSignupHero}
            label="JOIN AMEZA"
            title={
              <>
                Start
                <br />
                <span>Something New.</span>
              </>
            }
            subtitle="Create your AMEZA account and discover products curated for your luxury lifestyle."
            benefits={["10K+ Happy Customers", "Premium Quality Assured", "Global Shopping"]}
          />

          {/* Right Form Section */}
          <motion.div
            className="signup-form-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <SignupForm
              form={form}
              handleData={handleData}
              validation={validation}
            />
          </motion.div>
        </div>
      </motion.main>
    </>
  );
};

export default Signup;