import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

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


    let user = JSON.parse(
      localStorage.getItem("user")
    );


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

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}


      <div className="auth-page">

        <div className="auth-container">


          {/* LEFT IMAGE */}

            <div className="login-image">
            <div className="auth-image-content">

              <span className="auth-image-label">
                NOVAX
              </span>

              <h2>
                Welcome
                <br />
                Back.
              </h2>

              <p>
                Continue your shopping journey
                with NovaX and discover something
                you will love.
              </p>

            </div>

          </div>


          {/* RIGHT FORM */}

          <div className="auth-form-section">

            <div className="auth-form-wrapper">

              <form className="auth-form">

                <h1>Login</h1>

                <p className="auth-subtitle">
                  Welcome back! Please login.
                </p>


                <div className="form-group">

                  <label>Email</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={form.email}
                    onChange={handleData}
                  />

                </div>


                <div className="form-group">

                  <label>Password</label>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={form.password}
                    onChange={handleData}
                  />

                </div>


                <div className="auth-options">

                  <div className="checkbox-group">

                    <input type="checkbox" />

                    <label>
                      Remember me
                    </label>

                  </div>


                  <Link to="#">
                    Forgot Password?
                  </Link>

                </div>


                <button
                  className="auth-btn"
                  onClick={(e) => validation(e)}
                >
                  Login
                </button>


                <p>

                  Don't have an account?

                  <Link to="/signup">
                    Sign Up
                  </Link>

                </p>

              </form>

            </div>

          </div>

        </div>

      </div>

    </>

  );

};

export default Login;