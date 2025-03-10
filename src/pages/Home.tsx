import { useNavigate } from "react-router-dom";
import "../index.css"; // ✅ Ensure this is imported

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to the Page</h1>
      <div className="button-container">
        <button className="animated-button" onClick={handleLogin}>
          Login
        </button>
        <button className="animated-button" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default HomePage;
