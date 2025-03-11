import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session (Modify this based on how you store authentication)
    localStorage.removeItem("authToken"); // Example: Removing token
    sessionStorage.removeItem("userSession");

    // Redirect to login after 3 seconds
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, [navigate]);

  return (
    <div>
      <h2>You have been logged out</h2>
      <p>Please log in again to continue.</p>
      <button onClick={() => navigate("/login")} style={styles.button}>
        Go to Login
      </button>
    </div>
  );
};

// Simple inline CSS styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px",
  },
};

export default Logout;
