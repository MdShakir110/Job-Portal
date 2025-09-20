import React, { useState } from "react";
import Calendar from "react-calendar";
import { FiChevronDown } from "react-icons/fi";
import "react-calendar/dist/Calendar.css";

const CustomCalendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(null);
  return (
    <div className="px-6 py-3 bg-white my-2 rounded-xl relative">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-medium">My calendar</h3>
        <FiChevronDown
          className={`w-5 h-5 text-gray-600 cursor-pointer transition-transform duration-200 ${
            showCalendar ? "rotate-180" : ""
          }`}
          onClick={() => setShowCalendar(!showCalendar)}
        />
      </div>

      <p className="text-xs text-gray-500 mb-2">Upcoming Interviews</p>

      {date && (
        <div className="flex items-center justify-between mb-2 bg-gray-50 p-2 rounded">
          <span className="text-sm text-gray-500">
            Selected Date:{" "}
            {date.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <button
            onClick={() => setDate(null)}
            className="text-gray-300 hover:text-red-500 font-light px-2"
          >
            ✕
          </button>
        </div>
      )}

      {showCalendar && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowCalendar(false)}
          />

          {/* Calendar popup */}
          <div className="absolute bottom-full left-0 right-0 z-20 mb-1">
            <div className="bg-white rounded-lg shadow-lg p-2">
              <Calendar
                onChange={(newDate) => {
                  setDate(newDate);
                  setShowCalendar(false);
                }}
                value={date}
                className="rounded-lg"
                tileClassName={({ date: tileDate, view }) => {
                  if (date && tileDate.toDateString() === date.toDateString()) {
                    return "bg-blue-500 text-white rounded";
                  }
                  return "hover:bg-gray-200 rounded";
                }}
                navigationLabel={({ date, label }) => (
                  <span className="text-gray-600 font-medium">{label}</span>
                )}
                prevLabel="<"
                nextLabel=">"
                formatShortWeekday={(locale, date) =>
                  date.toLocaleDateString(locale, { weekday: "short" })
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomCalendar;
