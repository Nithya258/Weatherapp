// src/components/Navigation.jsx
import React from "react";

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 mb-2 bg-green-100">
      
      {/* Left: Today & Week */}
      <div className="flex" style={{ gap: "5px" }}>
        <button className="px-4 py-2 rounded bg-yellow-500 text-white font-bold">
          Today
        </button>
        <button className="px-4 py-2 rounded bg-yellow-200 text-black font-bold">
          Week
        </button>
      </div>


      <div className="flex gap-2">
        <button className="px-3 py-2 rounded bg-yellow-500 text-white bold">
          °C
        </button>
        <button className="px-3 py-2 rounded bg-gray-200 text-black bold">
          °F
        </button>
      </div>

    </nav>
  );
}
