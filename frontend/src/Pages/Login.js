import React, { useState } from 'react';
import TilichoLogo from "../images/tilichologo.webp";
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    return (
         <div className="login-page">
            <section className="form-panel">
                <div className="auth-card">
                    <header className="auth-header">
                        <h2>Welcome Back</h2>
                        <p>Enter your work email and password to sign in  .
                        </p>
                    </header>

                    <form onSubmit={(e) => e.preventDefault()}>
                            <div className="input-field">
                                <label>Institutional Email</label>
                                <input type="email" placeholder="name@tilicho.in" autoFocus required />
                            </div>
                            <div className="input-field">
                                <label>Password</label>
                                <input type="password" placeholder="********" required />
                            </div>

                        <button
                            className="action-btn"
                            onClick={() => step === 1 && setStep(2)}
                        >
                            Login
                        </button>
                    </form>

                    <div className="card-footer">
                        {step === 2 && (
                            <button className="text-btn" onClick={() => setStep(1)}>
                                Change email address
                            </button>
                        )}
                        <button className="text-btn">Need help?</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Auth;