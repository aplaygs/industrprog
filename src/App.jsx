import React, { useState } from "react";

const DAYS = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

function App() {
  const [tasksByDay, setTasksByDay] = useState(() => {
    const initial = {};
    DAYS.forEach((day) => {
      initial[day] = "";
    });
    return initial;
  });

  const handleChange = (day, value) => {
    setTasksByDay((prev) => ({
      ...prev,
      [day]: value,
    }));
  };

  const handleClear = () => {
    setTasksByDay((prev) => {
      const cleared = {};
      DAYS.forEach((day) => {
        cleared[day] = "";
      });
      return cleared;
    });
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <h1 style={{ color: "#333" }}>Таблица дел на неделю</h1>
      <p style={{ color: "#666" }}>
        Впишите задачи на каждый день (по одной задаче в строке).
      </p>

      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          maxWidth: "900px",
          background: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                width: "20%",
                background: "#4a90e2",
                color: "white",
                textAlign: "left",
              }}
            >
              День
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "12px",
                background: "#4a90e2",
                color: "white",
                textAlign: "left",
              }}
            >
              Задачи
            </th>
          </tr>
        </thead>
        <tbody>
          {DAYS.map((day) => (
            <tr key={day}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                  verticalAlign: "top",
                  fontWeight: "600",
                  background: "#f9f9f9",
                  color: "#333",
                }}
              >
                {day}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "12px",
                }}
              >
                <textarea
                  value={tasksByDay[day]}
                  onChange={(e) => handleChange(day, e.target.value)}
                  placeholder="Введите задачи, по одной в строке..."
                  rows={4}
                  style={{
                    width: "100%",
                    resize: "vertical",
                    fontFamily: "inherit",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                    color: "#333",
                    background: "white",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleClear}
        style={{
          marginTop: "16px",
          padding: "10px 20px",
          cursor: "pointer",
          background: "#e74c3c",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Очистить все задачи
      </button>
    </div>
  );
}

export default App;
