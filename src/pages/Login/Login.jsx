import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Login.css";
import amezaLoginHero from "../../assets/novax-login-hero.jpg";

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
    }, 2000);
  }

  function validation(e) {
    e.preventDefault();
    const { email, password } = form;

    if (!email && !password) {
      return showError("All Fields are Required");
    }

    const user = JSON.parse(localStorage.getItem("user"));

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
          <AuthHero
            image={amezaLoginHero}
            label="AMEZA EDIT"
            title={
              <>
                Welcome
                <br />
                Back.
              </>
            }
            subtitle="Continue your shopping journey with AMEZA and discover something you will love."
          />

          <motion.div
            className="auth-form-section"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
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