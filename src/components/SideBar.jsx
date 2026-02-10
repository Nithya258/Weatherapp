
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/WeatherSlice';
import { FaSearch } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import WeatherCard from './WeatherCard';



const Sidebar = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { data, tempUnit } = useSelector((state) => state.weather);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city));
      // setCity('');
    }
  };

  return (
    <div className="w-full md:w-3/12 lg:w-2/12 min-h-screen bg-gradient-to-b from-blue-900/40 to-blue-950/60 p-4 md:p-6 flex flex-col">
      {/* 
      <h2 className="flex justify-center items-center text-white text-xl md:text-2xl font-bold mb-4 md:mb-6 ">
        EXPLORE
      </h2> */}

      {/* <form onSubmit={handleSearch} className="mb-4">
        <div className="relative mb-3">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city..."
            className="w-full pl-4 pr-12 mt-5 py-5 rounded-lg bg-white/10 backdrop-blur-md text-white outline-none focus:ring-2 focus:ring-white/40 text-2xl placeholder:text-white/50"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-all flex items-center gap-2"
          // className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-all"
          >
            <FaX className="text-red-200" /> <br />
            <FaSearch className="text-white" />


          </button>
        </div>
      </form> */}



      {/*  */}
      <form onSubmit={handleSearch} className="mb-4">
        <div className="relative mb-3 w-3/4 mx-auto"> {/* narrower width, centered */}
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city..."
            className="w-full pl-4 pr-14 py-6 rounded-lg bg-white/10 backdrop-blur-md text-white outline-none focus:ring-2 focus:ring-white/40 text-2xl placeholder:text-white/50"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-all flex items-center gap-2"
          >
            <FaX className="text-red-200" />
            <FaSearch className="text-white" />
          </button>
        </div>
      </form>


      <br /><br /><br /><br /><br /><br />


      <WeatherCard data={data} tempUnit={tempUnit} compact={true} />
    </div>
  );
};

export default Sidebar;
