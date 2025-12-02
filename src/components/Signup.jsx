import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
function SignUp() {
        const [name, setName] = useState("");
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const navigate = useNavigate();
       const handleSubmit = (e) => { e.preventDefault();
         const newUser = { name, email, password, isLoggedIn: false };
         const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
         existingUsers.push(newUser);
          localStorage.setItem("users", JSON.stringify(existingUsers));
          alert("Signup successful!");
           navigate("/Dashboard"); };
           
  return (
      <div className="min-h-screen flex">
        {/* Left Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-md w-full mx-auto">
            {/* Back link */}
            <a href="#" className="text-sm text-gray-500 hover:text-indigo-600 flex items-center mb-6">
              ← Back to dashboard
            </a>
 
            <h2 className="text-3xl font-bold text-gray-900">Sign Up</h2>
            <p className="mt-2 text-gray-600">Enter your email and password to sign up!</p>
 
            {/* Social buttons */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 border rounded-md py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                Sign up with Google
              </button>
 
              <button
                type="button"
                className="flex items-center justify-center gap-2 border rounded-md py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.86 1.09A4.52 4.52 0 0 0 16.11 0c-2.6 0-4.71 2.16-4.71 4.81 0 .38.04.75.12 1.1A12.94 12.94 0 0 1 1.64.9a4.81 4.81 0 0 0-.64 2.42c0 1.67.82 3.15 2.08 4.02a4.36 4.36 0 0 1-2.14-.6v.06c0 2.34 1.63 4.29 3.78 4.74a4.52 4.52 0 0 1-2.13.08c.6 1.95 2.4 3.37 4.52 3.41A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 7 2.1c8.39 0 12.98-7.14 12.98-13.34 0-.2 0-.39-.01-.58A9.46 9.46 0 0 0 23 3z" />
                </svg>
                Sign up with X
              </button>
            </div>
 
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-sm text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
 
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First + Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
 
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input  value={email} onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
 
              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Password *</label>
                <input  value={password} onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 text-base shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
 
              {/* Checkbox */}
              <div className="flex items-start">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-1" />
                <p className="ml-2 text-sm text-gray-600">
                  By creating an account means you agree to the{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a>, and our{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
                </p>
              </div>
 
              {/* Submit button */}
              <button
                type="submit"
                className="w-full flex justify-center rounded-md bg-blue-600 px-5 py-3  font-medium hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
              >
                Sign Up
              </button>
            </form>
 
            {/* Sign in link */}
            <p className="mt-6 text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Sign In
              </a>
            </p>
          </div>
        </div>
 
        {/* Right Panel */}
        <div className="hidden lg:flex w-1/2 bg-indigo-900 text-white items-center justify-center min-h-screen">
          <div className="text-center px-8">
            <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
              <span className="bg-white text-indigo-700 rounded-full p-3">📊</span>
              TailAdmin
            </h1>
            <p className="mt-4 text-gray-300 text-lg">
              Free and Open-Source Tailwind CSS Admin Dashboard Template
            </p>
          </div>
        </div>
      </div>  )
}
 
export default SignUp;
 