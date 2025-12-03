import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { FaUsers, FaBox } from "react-icons/fa";
import Table from "./Tabel";
import Calendar from "./Calendar";
// import UserProfile from "./userprofile";
import Logout from "./Logout";
import Form from "./Form";
import Ecommerce from "./Ecommerce";
import Task from "./task";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard"); // default active section
  const [activeTab, setActiveTab] = useState("Monthly");

  // Dummy Sales Data
  const salesData = [
    { name: "Jan", sales: 150 },
    { name: "Feb", sales: 350 },
    { name: "Mar", sales: 200 },
    { name: "Apr", sales: 280 },
    { name: "May", sales: 180 },
    { name: "Jun", sales: 190 },
    { name: "Jul", sales: 290 },
    { name: "Aug", sales: 100 },
    { name: "Sep", sales: 200 },
    { name: "Oct", sales: 320 },
    { name: "Nov", sales: 240 },
    { name: "Dec", sales: 90 },
  ];

  const statsData = [
    { name: "Jan", target: 180, achieved: 40 },
    { name: "Feb", target: 190, achieved: 30 },
    { name: "Mar", target: 175, achieved: 50 },
    { name: "Apr", target: 165, achieved: 40 },
    { name: "May", target: 175, achieved: 55 },
    { name: "Jun", target: 168, achieved: 40 },
    { name: "Jul", target: 172, achieved: 70 },
    { name: "Aug", target: 205, achieved: 100 },
    { name: "Sep", target: 230, achieved: 115 },
    { name: "Oct", target: 210, achieved: 125 },
    { name: "Nov", target: 240, achieved: 150 },
    { name: "Dec", target: 235, achieved: 140 },
  ];

  // Menu Items with unique keys
  const menuItems = [
    { key: "dashboard", label: "Dashboard", icon: "📊" },
    // { key: "aiAssistant", label: "AI Assistant", icon: "🤖" },
    { key: "ecommerce", label: "Products", icon: "🛒" },
    { key: "calendar", label: "Calendar", icon: "📅" },
    { key: "userProfile", label: "User Profile", icon: "👤" },
    { key: "task", label: "Task", icon: "📝" },
    { key: "forms", label: "Forms", icon: "📄" },
    { key: "tables", label: "Tables", icon: "📋" },
    { key: "logout", label: "logout", icon: "📂" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 fixed h-screen">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">TailAdmin</h2>
        <nav className="space-y-3">
          <p className="text-sm text-gray-500 uppercase">Menu</p>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.key}
                onClick={() => setActiveMenu(item.key)}
                className={`p-2 hover:bg-gray-100 rounded cursor-pointer flex items-center space-x-2 ${activeMenu === item.key
                  ? "bg-gray-100 font-semibold"
                  : "text-gray-700"
                  }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ml-64">
        {/* ------------------- DASHBOARD ------------------- */}
        {activeMenu === "dashboard" && (
          <>
            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Customers */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <FaUsers className="text-2xl text-gray-500" />
                </div>
                <h3 className="text-sm font-medium mt-2">Customers</h3>
                <p className="text-2xl font-bold">3,782</p>
                <span className="text-green-600 text-sm font-medium">
                  ↑ 11.01%
                </span>
              </div>

              {/* Orders */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-between">
                  <FaBox className="text-2xl text-gray-500" />
                </div>
                <h3 className="text-sm font-medium mt-2">Orders</h3>
                <p className="text-2xl font-bold">5,359</p>
                <span className="text-red-600 text-sm font-medium">
                  ↓ 9.05%
                </span>
              </div>

              {/* Monthly Target */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium">Monthly Target</h3>
                <div className="text-center my-4">
                  <div className="text-3xl font-bold">75.55%</div>
                  <p className="text-green-600 text-sm">+10%</p>
                </div>
                <p className="text-gray-600 text-sm">
                  You earn $3287 today, it’s higher than last month. Keep up your good work!
                </p>
              </div>
            </div>

            {/* Sales Chart */}
            <div className="bg-white p-6 rounded-lg shadow mt-6">
              <h3 className="text-sm font-medium mb-4">Monthly Sales</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#4F46E5" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Area Chart */}
            <div className="bg-white p-6 rounded-lg shadow mt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Statistics</h3>
                  <p className="text-gray-500 text-sm">
                    Target you’ve set for each month
                  </p>
                </div>
                <div className="flex space-x-2">
                  {["Monthly", "Quarterly", "Annually"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-1 rounded ${activeTab === tab
                        ? "bg-gray-100 text-black font-medium"
                        : "text-gray-500 hover:text-black"
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={statsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="target"
                    stroke="#4338ca"
                    fill="url(#colorTarget)"
                  />
                  <Area
                    type="monotone"
                    dataKey="achieved"
                    stroke="#3b82f6"
                    fill="url(#colorAchieved)"
                  />
                  <defs>
                    <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4338ca" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#4338ca" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAchieved" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {/* ------------------- TABLES ------------------- */}
        {activeMenu === "tables" && (
          <div className="mt-6">
            <Table />
          </div>
        )}

        {/* ------------------- CALENDAR ------------------- */}
        {activeMenu === "calendar" && (
          <div className="mt-6">
            <Calendar />
          </div>
        )}

        {/* ------------------- USER PROFILE ------------------- */}
        {activeMenu === "userProfile" && (
          <div className="mt-6">
            {/* <UserProfile /> */}
          </div>
        )}

        {/*----------------------logout----------------------*/}
        {activeMenu === "logout" && (
          <div className="mt-6">
            <Logout />
          </div>
        )}

        {/*----------------------Form----------------------*/}
        {activeMenu === "forms" && (
          <div className="mt-6">
            <Form />
          </div>
        )}


        {/* --------------------ecommerce---------------------- */}
        {activeMenu === "ecommerce" && (
          <div className="mt-6">
            <Ecommerce />
          </div>
        )}

        {/* --------------------task---------------------- */}
        {activeMenu === "task" && (
          <div className="mt-6">
            <Task />
          </div>
        )}




      </main>
    </div>
  );
}

export default Dashboard;
