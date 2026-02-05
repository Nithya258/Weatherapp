import React from "react";
import Weather from "./components/Weather";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

export default function App() {
  return (
    <Weather>
      <div className="grid grid-cols-1 lg:grid-cols-6 h-full p-5 gap-4">

        {/* Sidebar */}
        <aside className="col-span-1 lg:col-span-2 bg-black/40 backdrop-blur-lg rounded-lg p-4">
          <Sidebar />
        </aside>

        {/* Right-side cards */}
        <div className="col-span-1 lg:col-span-4 bg-yellow-200 p-2">
          <Card count={24} />
        </div>

      </div>
    </Weather>
  );
}

