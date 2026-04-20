import React, { useState } from 'react';
import TilichoLogo from "../images/tilichologo.webp";
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const isValidEmail = (email) => {
        return email.endsWith("@tilicho.in");
    };
    const handleSendOtp = async () => {
        if (!isValidEmail(email)) {
            alert("Invalid email. Please use your institutional email.");
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/api/auth/send-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                throw new Error("Failed to send OTP");
            }

            setStep(2);
        } catch (err) {
            console.error(err);
            alert("Failed to send OTP");
        }
    };

    const [otp, setOtp] = useState("");

    const handleVerifyOtp = async () => {
        if (otp.length !== 6) {
            alert("Enter valid 6-digit OTP");
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/api/auth/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, otp }),
            });

            if (res.ok) {
                alert("Login successful");
                navigate("/dashboard");
            } else {
                alert("Invalid OTP");
            }
        } catch (err) {
            console.error(err);
            alert("Verification failed");
        }
    };
    return (
        <div className="auth-page">
            <section className="form-panel">
                <div className="auth-card">
                    <header className="auth-header">
                        <h2>{step === 1 ? 'Employee Access' : 'Verify Identity'}</h2>
                        <p>
                            {step === 1
                                ? 'Enter your work email to receive a secure code.'
                                : 'A 6-digit code was sent to your email.'}
                        </p>
                    </header>

                    <form onSubmit={(e) => e.preventDefault()}>
                        {step === 1 ? (
                            <div className="input-field">
                                <label>Institutional Email</label>
                                <input
                                    type="email"
                                    placeholder="name@tilicho.in"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        ) : (
                            <div className="input-field">
                                <label>Verification Code</label>
                                <div className="otp-container">
                                    <input
                                        type="text"
                                        maxLength="6"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        className="otp-input"
                                    />
                                </div>
                            </div>
                        )}

                        <button
                            type="button"
                            className="action-btn"
                            onClick={step === 1 ? handleSendOtp : handleVerifyOtp}
                        >
                            {step === 1 ? "Send OTP" : "Verify & Sign In"}
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