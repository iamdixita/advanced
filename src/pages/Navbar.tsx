import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  const navbarStyle: React.CSSProperties = {
    backgroundColor: "GrayText", // Dark blue navbar
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2px",
    position: "fixed",
    width: "100%",
    height: "60px", // Ensure visible height
    top: 0,
    left: 0,
    zIndex: 1000, // Ensures it's above other content
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adds slight shadow for visibility
  };

  const logoStyle: React.CSSProperties = {
    fontSize: "24px",
    marginLeft: "2rem",
    fontWeight: "bold",
  };

  const navLinksStyle: React.CSSProperties = {
    listStyle: "none",
    display: "flex",
    gap: "70px",
    padding: 0,
  };

  const linkStyle = (link: string): React.CSSProperties => ({
    textDecoration: "none",
    color: hovered === link ? "#f39c12" : "white", // Hover effect
    fontSize: "18px",
    transition: "0.3s",
  });

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}> MyApp</div>
      <ul style={navLinksStyle}>
        {["/", "/dashboard", "/profile", "/settings", "/logout"].map(
          (path, index) => {
            const names = ["Home", "Dashboard", "Profile", "Logout"];
            return (
              <li key={path}>
                <Link
                  to={path}
                  style={linkStyle(path)}
                  onMouseEnter={() => setHovered(path)}
                  onMouseLeave={() => setHovered(null)}>
                  {names[index]}
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
