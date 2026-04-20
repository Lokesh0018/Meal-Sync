import { useNavigate, useLocation } from "react-router-dom";
import TilichoLogo from "../images/tilichologo.webp";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="App">
      <div className="top-bar">
        <button
          onClick={() => navigate(isLoginPage ? "/" : "/login")}
          className="login-btn"
        >
          {isLoginPage ? "Back" : "Login"}
        </button>
      </div>

      {/* Left Branding Panel */}
      <section className="brand-panel">
        <div className="brand-container">
          <img src={TilichoLogo} alt="Tilicho Labs" className="main-logo" />
          <span>
            <h2 className="brand-name">High-End Digital Product Engineerings</h2>
            <p className="brand-tagline">
              We transform ideas into exceptional digital products.
            </p>
          </span>
        </div>
      </section>

      {children}
    </div>
  );
};

export default AuthLayout;