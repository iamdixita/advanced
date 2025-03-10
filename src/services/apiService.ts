// import axios from "axios";

// const API_URL = "http://localhost:5000"; // Point to your JSON server

// // API call for login (checking for existing user)
// export const loginUser = async (username: string, password: string) => {
//   try {
//     const response = await axios.get(`${API_URL}/users`);
//     const user = response.data.find(
//       (user: { username: string; password: string }) =>
//         user.username === username && user.password === password
//     );

//     if (user) {
//       return user; // ✅ Return user object
//     } else {
//       throw new Error("Invalid credentials"); // ❌ Avoid returning `false`
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     throw error; // Let the caller handle it
//   }
// };

// export const registerUser = async (username: string, password: string) => {
//   try {
//     // Fetch all existing users
//     const response = await axios.get(`${API_URL}/users`);
//     const users = response.data;

//     // Find the highest numeric ID (filter out null or undefined values)
//     const maxId =
//       users.length > 0
//         ? Math.max(...users.map((user: { id: number }) => Number(user.id) || 0))
//         : 0;

//     // Create new user with sequential ID
//     const newUser = {
//       id: maxId + 1, // ✅ Ensure numeric ID
//       username,
//       password,
//     };

//     // Send POST request to add the new user
//     const result = await axios.post(`${API_URL}/users`, newUser, {
//       headers: { "Content-Type": "application/json" },
//     });

//     return result.data;
//   } catch (error) {
//     console.error("Error registering user:", error);
//     throw error;
//   }
// };

// src/services/apiService.ts
import axios from "axios";

const API_BASE_URL = "https://your-api-url.com"; // Replace with your actual API URL

// Login function
export const loginUser = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw new Error("Login failed");
  }
};

// Register function
export const registerUser = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, data);
    return response.data;
  } catch (error) {
    throw new Error("Registration failed");
  }
};
