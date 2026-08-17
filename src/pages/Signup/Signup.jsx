import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Signup.css";
import novaxSignupHero from "../../assets/novax-signup-hero.jpg";

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
          <AuthHero
            image={novaxSignupHero}
            label="JOIN NOVAX"
            title={
              <>
                Start
                <br />
                <span>Something New.</span>
              </>
            }
            subtitle="Create your NovaX account and discover products, styles, and everyday essentials curated for your shopping journey."
            features={["New Collections", "Exclusive Deals", "Easy Shopping"]}
          />

          <motion.div
            className="signup-form-section"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
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