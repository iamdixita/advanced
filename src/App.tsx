import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Profile from "./pages/Profile";
const Profile = lazy(() => import("./pages/Profile"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
// import Dashboard from "./pages/Dashboard.tsx";
import Navbar from "./pages/Navbar";
import Logout from "./pages/Logout.tsx";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div style={{ marginTop: "80px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Lazy Loading Applied Here */}
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={<h2>Loading Dashboard...</h2>}>
                  <Dashboard />
                </Suspense>
              }
            />
            {/* Code Splitting Applied Here */}
            <Route
              path="/profile"
              element={
                <Suspense
                  fallback={
                    <h2 style={{ textAlign: "center" }}>Loading...</h2>
                  }>
                  <Profile />
                </Suspense>
              }
            />
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
