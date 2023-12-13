import React from "react";
import "./Login.css";

function Login() {
  function fun()
  {
    alert("Login Successful!!!")
  }
 

  return (
    <div>
      
      <h2>PHARMACY MANAGEMENT</h2>
      <form className="login-form" >
        <h2>Login</h2>
        <label htmlFor="username">Email:</label>
        <input type="text" placeholder="Email" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" id="password" name="password" required />

        <div>
          <button type="submit" onClick={fun}>Login</button>
          <br />
          <p className='last'>Create new account.  <span><a className="link2" href='http://172.19.60.109:3001'>Register</a></span></p>        </div>
      </form>
    </div>
  );
}

export default Login;
