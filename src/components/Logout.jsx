import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/Dashboard"); // Go back to dashboard
  };

  const handleLogout = () => {
    // Clear user login state
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map((u) => ({ ...u, isLoggedIn: false }));
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/"); // Go to Signin page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Do you want to log out?</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleCancel}
            className="px-5 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-500 text-black rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
