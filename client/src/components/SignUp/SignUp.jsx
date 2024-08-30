import React from 'react';
import '../../styles/SignUp.css';

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
            Already have an account? <a href="/login">Log in!</a>
          </div>
        </form>
        <div className="auth-divider">or</div>
        <button className="btn-google">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
            <path fill="#4285F4"
                  d="M46.615 24.53c0-1.424-.127-2.82-.373-4.172H24v8.482h12.681c-.548 2.944-2.248 5.426-4.778 7.082v5.875h7.725c4.527-4.165 7.138-10.315 7.138-17.267z"/>
            <path fill="#34A853"
                  d="M24 48c6.475 0 11.89-2.144 15.853-5.812l-7.726-5.875c-2.145 1.441-4.88 2.292-8.127 2.292-6.24 0-11.52-4.213-13.392-9.86H3.74v6.03C7.69 42.73 15.267 48 24 48z"/>
            <path fill="#FBBC05"
                  d="M10.607 28.745a14.751 14.751 0 01-.772-4.666c0-1.62.283-3.195.772-4.666V13.383H3.739A23.955 23.955 0 000 24c0 3.681.88 7.16 2.431 10.264l6.838-5.518z"/>
            <path fill="#EA4335"
                  d="M24 9.533c3.526 0 6.687 1.222 9.173 3.61l6.839-6.837C35.89 2.855 30.475.711 24 .711 15.268.711 7.69 5.97 3.74 13.386l6.868 5.516c1.87-5.647 7.152-9.869 13.392-9.869z"/>
          </svg>
          Continue with Google
        </button>
        <button className="btn-microsoft">
          <span className="icon-microsoft">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#f25022" d="M2 2h20v20H2z"/>
              <path fill="#7fba00" d="M26 2h20v20H26z"/>
              <path fill="#00a4ef" d="M2 26h20v20H2z"/>
              <path fill="#ffb900" d="M26 26h20v20H26z"/>
            </svg>
          </span>
          Continue with your Microsoft account
        </button>
      </div>
    </div>
  );
}

export default SignUp;
