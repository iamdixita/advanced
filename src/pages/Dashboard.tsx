import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css"; // Ensure this CSS file exists

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <body>
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2>Dashboard</h2>
          <ul>
            <li onClick={() => navigate("/")}>🏠 Home</li>
            <li onClick={() => navigate("/Profile")}>👤 Profile</li>
            <li onClick={() => navigate("/settings")}>⚙️ Settings</li>
            <li onClick={() => navigate("/logout")}>🚪 Logout</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <header>
            <h1>Welcome Back!</h1>
            <p>Your dashboard overview</p>
          </header>

          <section className="cards">
            <div className="card">
              <h3>Users</h3>
              <p>1,250 Active</p>
            </div>

            <div className="card">
              <h3>Sales</h3>
              <p>$25,400 Revenue</p>
            </div>

            <div className="card">
              <h3>Reports</h3>
              <p>12 New Reports</p>
            </div>

            <div className="card">
              <h3>Messages</h3>
              <p>5 Unread</p>
            </div>
          </section>

          <section className="activity">
            <h2>Recent Activity</h2>
            <ul>
              <li>✔️ You updated your profile.</li>
              <li>🛍️ A new sale was recorded.</li>
              <li>📩 You received a new message.</li>
              <li>🔔 System update completed.</li>
            </ul>
          </section>
        </main>
      </div>
    </body>
  );
};

export default Dashboard;
