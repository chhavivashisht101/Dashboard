import React, { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function UserProfile() {
  // 🧠 Initialize directly from localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userProfile");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          firstName: "Musharof",
          lastName: "Chowdhury",
          email: "randomuser@pimjo.com",
          phone: "+09 363 398 46",
          bio: "Team Manager",
          location: "Arizona, United States",
        };
  });

  const [isEditing, setIsEditing] = useState(false);

  // 📝 Save to localStorage whenever user data changes
  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem("userProfile", JSON.stringify(user));
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <img
              src="https://react-demo.tailadmin.com/images/user/owner.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full border"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-600">
                {user.bio} | {user.location}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-black">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <FaInstagram size={20} />
            </a>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="border border-gray-300 rounded-full px-4 py-1 text-sm hover:bg-gray-100 transition"
            >
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Personal Information
            </h3>
            {isEditing && (
              <button
                onClick={handleSave}
                className="bg-indigo-600 hover:bg-indigo-700 text-black px-4 py-1 rounded-full text-sm"
              >
                Save
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                First Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  className="border rounded-lg w-full p-2 focus:outline-none focus:ring focus:ring-indigo-200"
                />
              ) : (
                <p className="text-gray-800 font-medium">{user.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Last Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  className="border rounded-lg w-full p-2 focus:outline-none focus:ring focus:ring-indigo-200"
                />
              ) : (
                <p className="text-gray-800 font-medium">{user.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="border rounded-lg w-full p-2 focus:outline-none focus:ring focus:ring-indigo-200"
                />
              ) : (
                <p className="text-gray-800 font-medium">{user.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone</label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  className="border rounded-lg w-full p-2 focus:outline-none focus:ring focus:ring-indigo-200"
                />
              ) : (
                <p className="text-gray-800 font-medium">{user.phone}</p>
              )}
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 mb-1">Bio</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={user.bio}
                  onChange={handleChange}
                  rows="3"
                  className="border rounded-lg w-full p-2 focus:outline-none focus:ring focus:ring-indigo-200"
                />
              ) : (
                <p className="text-gray-800 font-medium">{user.bio}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
