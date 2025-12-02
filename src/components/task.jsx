import React, { useState } from "react";
import { FaTrash, FaCheckCircle, FaPlus } from "react-icons/fa";

export default function Tabel() {
  // ================== TASK TABLE DATA ==================
  const [tasksData, setTasksData] = useState([
    {
      id: 1,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2023/09/asusrogzephyrusg14-2048px-2x1-1.jpg",
      task: "Update Website UI",
      user: "Aarav Mehta",
      device: "Laptop",
      budget: "$2,000",
      status: "In Progress",
      deadline: "01 Dec, 2027",
    },
    {
      id: 2,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83_AV1?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1660803962974",
      task: "Design Landing Page",
      user: "Priya Singh",
      device: "iPad",
      budget: "$850",
      status: "Completed",
      deadline: "29 Jun, 2027",
    },
    {
      id: 3,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-ultra2-hero-49mm-titanium-orange-alpine-loop?wid=940&hei=1112&fmt=png-alpha&.v=1693594195910",
      task: "App Testing",
      user: "Rohit Sharma",
      device: "Apple Watch",
      budget: "$1,500",
      status: "Pending",
      deadline: "13 Mar, 2027",
    },
    {
      id: 4,
      image:
        "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds_ii/product_silo_images/qc_earbuds_ii_triple_black_EC_hero.psd/jcr:content/renditions/cq5dam.web.320.320.png",
      task: "Backend API Setup",
      user: "Neha Patel",
      device: "Desktop",
      budget: "$2,300",
      status: "In Progress",
      deadline: "18 Nov, 2027",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    task: "",
    user: "",
    device: "",
    budget: "",
    status: "Pending",
    deadline: "",
    image: "",
  });

  const handleAddTaskData = () => {
    if (
      !newTask.task ||
      !newTask.user ||
      !newTask.device ||
      !newTask.budget ||
      !newTask.deadline
    ) {
      alert("Please fill all fields before adding!");
      return;
    }

    const newItem = { ...newTask, id: Date.now() };
    setTasksData([...tasksData, newItem]);
    setIsModalOpen(false);
    setNewTask({
      task: "",
      user: "",
      device: "",
      budget: "",
      status: "Pending",
      deadline: "",
      image: "",
    });
  };

  // ================== SIMPLE TODO LIST ==================
  const [todoList, setTodoList] = useState([
    { id: 1, text: "Add new project", completed: false },
    { id: 2, text: "Update client pricing", completed: true },
    { id: 3, text: "Check server logs", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    setTodoList([...todoList, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleToggle = (id) => {
    setTodoList(
      todoList.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  // ================== RENDER ==================
  return (
    <div className="min-h-screen bg-gray-50 p-8 space-y-10">

      {/* SIMPLE TODO SECTION (NOW ON TOP) */}
      <div className="bg-white w-full max-w-lg mx-auto p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          ✅ Daily Task To-Do List
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow border border-gray-300 rounded-l-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter new task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-r-lg"
          >
            <FaPlus />
          </button>
        </div>
        <ul className="space-y-3">
          {todoList.map((t) => (
            <li
              key={t.id}
              className={`flex items-center justify-between p-3 border rounded-lg ${
                t.completed ? "bg-green-50 border-green-400" : "bg-gray-50"
              }`}
            >
              <div
                onClick={() => handleToggle(t.id)}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <FaCheckCircle
                  className={`text-xl ${
                    t.completed ? "text-green-500" : "text-gray-300"
                  }`}
                />
                <span
                  className={`text-gray-700 ${
                    t.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {t.text}
                </span>
              </div>
              <button
                onClick={() => handleDelete(t.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
        {todoList.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No tasks yet 😴</p>
        )}
      </div>

      {/* TASK TABLE SECTION (NOW BELOW TODO LIST) */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">🧾 Project Task List</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-black px-5 py-2 rounded-lg shadow-md"
          >
            + Add Task
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-100">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="p-4">#</th>
                <th className="p-4 text-left">Task</th>
                <th className="p-4 text-left">User</th>
                <th className="p-4 text-left">Device</th>
                <th className="p-4 text-left">Budget</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Deadline</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {tasksData.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-4 text-gray-500">{index + 1}</td>
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.task}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <span className="font-medium text-gray-900">{item.task}</span>
                  </td>
                  <td className="p-4">{item.user}</td>
                  <td className="p-4">{item.device}</td>
                  <td className="p-4 font-medium">{item.budget}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4">{item.deadline}</td>
                  <td className="p-4 text-gray-400 hover:text-gray-600 cursor-pointer">
                    ⋮
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ADD TASK MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Add New Task
              </h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Task Name"
                  value={newTask.task}
                  onChange={(e) =>
                    setNewTask({ ...newTask, task: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="User Name"
                  value={newTask.user}
                  onChange={(e) =>
                    setNewTask({ ...newTask, user: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Device"
                  value={newTask.device}
                  onChange={(e) =>
                    setNewTask({ ...newTask, device: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Budget (e.g. $500)"
                  value={newTask.budget}
                  onChange={(e) =>
                    setNewTask({ ...newTask, budget: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg"
                />
                <select
                  value={newTask.status}
                  onChange={(e) =>
                    setNewTask({ ...newTask, status: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg"
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
                <input
                  type="text"
                  placeholder="Image URL"
                  value={newTask.image}
                  onChange={(e) =>
                    setNewTask({ ...newTask, image: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Deadline (e.g. 20 Oct, 2027)"
                  value={newTask.deadline}
                  onChange={(e) =>
                    setNewTask({ ...newTask, deadline: e.target.value })
                  }
                  className="w-full border p-2 rounded-lg"
                />
              </div>

              <div className="flex justify-end mt-4 gap-2">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTaskData}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-black hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
