import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signup.css";

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

    const {
      name,
      email,
      mobile,
      password,
    } = form;


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
      return showError(
        "Password must contain at least 6 characters"
      );
    }


    const user = {
      name,
      email,
      mobile,
      password,
    };


    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );


    setTimeout(() => {
      navigate("/login");
    }, 800);

  };


  return (
    <>

      {error && (
        <div className="signup-error-box">
          {error}
        </div>
      )}


      <main className="signup-page">

        <div className="signup-container">


          {/* =================================================
              LEFT PRODUCT IMAGE
          ================================================= */}

          <div className="signup-image">

            <div className="signup-image-content">

              <span className="signup-image-label">
                JOIN NOVAX
              </span>


              <h2>
                Start
                <br />
                <span>Something New.</span>
              </h2>


              <p>
                Create your NovaX account and discover
                products, styles, and everyday essentials
                curated for your shopping journey.
              </p>


              <div className="signup-image-features">

                <span>
                  New Collections
                </span>

                <span>
                  Exclusive Deals
                </span>

                <span>
                  Easy Shopping
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIGNUP FORM
          ================================================= */}

          <div className="signup-form-section">

            <div className="signup-form-wrapper">

              <form
                className="signup-form"
                onSubmit={validation}
              >

                <p className="signup-form-label">
                  CREATE YOUR ACCOUNT
                </p>


                <h1>
                  Sign Up
                </h1>


                <p className="signup-subtitle">
                  Create your NovaX account and start shopping.
                </p>


                {/* NAME */}

                <div className="signup-form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleData}
                  />

                </div>


                {/* EMAIL */}

                <div className="signup-form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleData}
                  />

                </div>


                {/* MOBILE */}

                <div className="signup-form-group">

                  <label>
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={form.mobile}
                    onChange={handleData}
                  />

                </div>


                {/* PASSWORD */}

                <div className="signup-form-group">

                  <label>
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    placeholder="Create your password"
                    value={form.password}
                    onChange={handleData}
                  />

                </div>


                {/* TERMS */}

                <div className="signup-terms">

                  <input
                    type="checkbox"
                    required
                  />

                  <label>
                    I agree to the Terms and Conditions
                  </label>

                </div>


                {/* BUTTON */}

                <button
                  type="submit"
                  className="signup-submit-btn"
                >
                  Create Account
                  <span>→</span>
                </button>


                {/* LOGIN */}

                <p className="signup-login-text">

                  Already have an account?

                  <Link to="/login">
                    Login
                  </Link>

                </p>

              </form>

            </div>

          </div>

        </div>

      </main>

    </>
  );
};

export default Signup;