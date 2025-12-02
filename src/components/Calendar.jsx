import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function Calendar() {
  const [events, setEvents] = useState([
    { title: "Event Conf.", date: "2025-10-13", color: "#f87171" },
    { title: "Meeting", date: "2025-10-14", color: "#4ade80" },
    { title: "Workshop", date: "2025-10-15", color: "#60a5fa" },
  ]);

  const handleDateClick = (info) => {
    const title = prompt("Enter Event Title:");
    if (title) {
      setEvents([...events, { title, date: info.dateStr, color: "#818cf8" }]);
    }
  };

  const handleAddEvent = () => {
    const title = prompt("Enter Event Title:");
    const date = prompt("Enter Event Date (YYYY-MM-DD):");
    if (title && date) {
      setEvents([...events, { title, date, color: "#fbbf24" }]);
    }
  };

  return (
    <div className="p-10 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            📅 Calendar Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your meetings, events, and schedules with ease.
          </p>
        </div>
        <button
          onClick={handleAddEvent}
          className="bg-indigo-600 hover:bg-indigo-700 text-black font-medium px-5 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105"
        >
          + Add Event
        </button>
      </div>

      {/* Calendar Container */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 border border-gray-100">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "",
          }}
          events={events}
          dateClick={handleDateClick}
          height="75vh"
          eventDisplay="block"
          eventContent={(eventInfo) => (
            <div
              className="text-sm font-semibold rounded-md px-2 py-1 text-white shadow-sm"
              style={{ backgroundColor: eventInfo.event.extendedProps.color }}
            >
              {eventInfo.event.title}
            </div>
          )}
        />
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm mt-10">
        <p>
          Built with <span className="text-indigo-500 font-semibold">FullCalendar</span> and ❤️ by React
        </p>
      </div>
    </div>
  );
}
