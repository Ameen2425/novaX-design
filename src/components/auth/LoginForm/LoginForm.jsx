import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./LoginForm.css";

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

const LoginForm = ({ form, handleData, validation }) => {
  return (
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
          Enter your details to access your AMEZA account.
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
  );
};

export default LoginForm;
