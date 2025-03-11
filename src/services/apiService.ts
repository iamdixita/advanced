// import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Replace with your actual API URL

export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    // Fetch users with matching username
    const response = await fetch(`${API_BASE_URL}/users?username=${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }

    const users = await response.json();
    const user = users.find((u: any) => u.password === password); // Validate password manually

    if (!user) {
      throw new Error("Invalid username or password");
    }

    return { id: user.id, username: user.username }; // Return user with fixed ID
  } catch (error) {
    console.error("Login Error:", error);
    throw new Error("Login failed");
  }
};

export const registerUser = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Registration Error:", error);
    throw new Error("Registration failed");
  }
};
