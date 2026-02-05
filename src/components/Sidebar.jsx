import React, { useState, useEffect } from "react";
import axios from "axios";
import sideimg from "../assets/sideimg3.webp";

export default function Sidebar() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`
        );

        const { currentConditions, timezone } = res.data;

        setWeatherData({
          temp: currentConditions.temp,
          conditions: currentConditions.conditions,
          precip: currentConditions.precip,
          area: timezone,
        });
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [location]); 

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex-col">
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="bg-red-900 ml-15 rounded"
          type="text"
          placeholder="Search city..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass cursor-pointer bg-red-900 p-1 rounded"></i>
        </button>
      </form>

      <div className="flex flex-col mt-5 text-xl text-red-200">
        <img src={sideimg} alt="weather" className="h-60" />

        {weatherData && (
          <>
            <div className="mt-28">
              <p>(°C) = {weatherData.temp}</p>
              <h3>City = {location}</h3>
              <h4>Weather = {weatherData.conditions}</h4>
              <h4>Precipitation = {weatherData.precip}</h4>
              <hr />
            </div>

            <p className="mt-56 ml-20">
              {location}, {weatherData.area}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
