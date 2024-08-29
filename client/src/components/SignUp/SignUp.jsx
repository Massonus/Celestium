import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <div className="auth-container">
      <div className="signup-form">
        <h2>Sign up</h2>
        <form>
          <div className="name-fields">
            <div className="input-group">
              <input type="text" className="small-input" placeholder="First Name" />
            </div>
            <div className="input-group">
              <input type="text" className="small-input" placeholder="Last Name" />
            </div>
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn-signup">Continue</button>
          <div className="login-redirect">
            Already have an account? <a href="#">Log in!</a>
          </div>
        </form>
        <div className="auth-divider">or</div>
        <button className="btn-google">Continue with Google</button>
        <button className="btn-microsoft">Continue with your Microsoft account</button>
      </div>
    </div>
  );
}

export default SignUp;
