import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside
        className="sidebar"
        style={{ backgroundColor: "#616379", height: "36.3rem" }}>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/">🏠 Home</Link>
          </li>
          <li>
            <Link to="/profile">👤 Profile</Link>
          </li>
          <li>
            <Link to="/settings">⚙️ Settings</Link>
          </li>
          <li>
            <Link to="/logout">🚪 Logout</Link>
          </li>
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
  );
};

export default Dashboard;
