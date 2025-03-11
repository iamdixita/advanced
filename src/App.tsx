import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard.tsx";
import Navbar from "./pages/Navbar";
import Logout from "./pages/Logout.tsx";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <div style={{ marginTop: "80px", padding: "20px" }}>
        {/* Prevents content from being hidden under navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  </Provider>
);

export default App;
