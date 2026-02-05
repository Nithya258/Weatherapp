
import React from "react"
import axios from "axios"
import './Weather.css'
import bg from "../assets/bg.jpg"


export default function Weather({ children }) {
  return (
    <div className="screen"style={{ backgroundImage: `url(${bg})` }}>
      <div>
        <main className="mx-auto h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
