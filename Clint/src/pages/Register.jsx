import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: ""
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/user/register", formData);

      setMessage({ type: "success", text: "Registration successful!" });

      setTimeout(() => setMessage({ type: "", text: "" }), 3000);

    } catch (error) {
      const errorMsg =
        error.response?.data?.error || "Registration failed";

      setMessage({ type: "error", text: errorMsg });

      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2 className="register-title">Register</h2>

        {message.text && (
          <div className={`alert-box ${message.type}`}>
            {message.text}
          </div>
        )}

        <input
          className="register-input"
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setFormData({ ...formData, Username: e.target.value })
          }
          required
        />

        <input
          className="register-input"
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setFormData({ ...formData, Email: e.target.value })
          }
          required
        />

        <input
          className="register-input"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, Password: e.target.value })
          }
          required
        />

        <button className="register-button" type="submit">
          Register
        </button>

        <p className="register-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;