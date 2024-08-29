import React from "react";
import './Login.css';

function Login() {
    return (
        <div className="auth-container">
            <div className="login-form">
                <h2>Log in</h2>
                <form>
                    <div className="input-group">
                        <input type="text"  placeholder="Email" />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn-login">Log in</button>
                    <a href="#" className="forgot-password">Forgot your password?</a>
                </form>
                <div className="auth-divider">or</div>
                <button className="btn-google">Continue with Google</button>
                <button className="btn-microsoft">Continue with your Microsoft account</button>
            </div>
        </div>
    );
}

export default Login;