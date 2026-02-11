
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './redux/WeatherSlice';
import { getWeatherAssets } from './utils/weatherConfig';
import TodaysHighlights from './components/TodaysHighlights';
import WeekForecast from './components/WeekForecast';
import HourlyForecast from './components/HourlyForecast';
import WeatherCard from './components/WeatherCard';
import Sidebar from './components/SideBar';
import Navigation from './components/Navigation';
import './App.css';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.weather);
  const [activeTab, setActiveTab] = useState('today');
  const [tempUnit, setTempUnit] = useState('celsius');

  useEffect(() => {
    dispatch(fetchWeather('mt kailash'));
  }, [dispatch]);

  const backgroundImage = data
    ? getWeatherAssets(data.currentConditions.icon).background
    : 'https://i.ibb.co/qNv7NxZ/pc.webp';

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat  gap "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="min-h-screen  flex flex-col md:flex-row">

          <Sidebar />

          <div className="w-full md:w-10/12 lg:w-10/12 p-4 md:p-6 lg:p-8 overflow-y-auto">

            {loading && (
              <div className="text-white text-center text-xl md:text-2xl">Loading...</div>
            )}

            {error && (
              <div className="text-red-400 text-center text-base md:text-xl bg-red-900/30 backdrop-blur-md rounded-lg p-4">
                Error: {error}
              </div>
            )}

            {data && !loading && (
              <>
                <WeatherCard data={data} tempUnit={tempUnit} />

                <Navigation
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  tempUnit={tempUnit}
                  setTempUnit={setTempUnit}
                />

                {activeTab === 'today' ? (
                  <HourlyForecast data={data} tempUnit={tempUnit} />
                  // <WeekForecast data={data} tempUnit={tempUnit} />

                ) : (
                  // <HourlyForecast data={data} tempUnit={tempUnit} />

                  <WeekForecast data={data} tempUnit={tempUnit} />
                )}
                <br /><br />
                <TodaysHighlights data={data} />
                <Footer />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

