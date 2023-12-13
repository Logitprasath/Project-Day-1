import React from "react";
import "./Signup.css";

function Signup() {
  

  return (
    <div>
        <h2>PHARMACY MANAGEMENT</h2>
      <form className="signup-form">
        <h2>Create Account</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email Id" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" id="password" name="password" required />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" required />

        <br />
        <a href='http://172.19.60.109:3000'><button type="button"  className="login-button">
          Create
        </button></a>
      </form>
    </div>
  );
}

export default Signup;
