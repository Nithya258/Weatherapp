
import { FaMapMarkerAlt } from 'react-icons/fa';
import { getWeatherAssets } from '../utils/weatherConfig';

const WeatherCard = ({ data, tempUnit, compact = false }) => {
  if (!data) return null;

  const currentCondition = data.currentConditions.icon;
  const { icon } = getWeatherAssets(currentCondition);
  const currentDate = new Date();

  const convertTemp = (temp) => {
    if (tempUnit === 'fahrenheit') {
      return Math.round((temp * 9 / 5) + 32);
    }
    return Math.round(temp);
  };

  if (compact) {
    return (
      <>
      <div className='side'>
        <div className=" flex justify-center">
          <img
            src={icon}
            alt="weather"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </div>

        <div className="text-yellow-200 text-center mt-4 md:mt-6 flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-3">
            {convertTemp(data.currentConditions.temp)}°{tempUnit === 'fahrenheit' ? 'F' : 'C'}
          </h1>

          <div className="flex flex-col gap-1 mb-4 lg:text-3xl 2md:text-sm">
            <p>{currentDate.toLocaleDateString('en-US', { weekday: 'long' })}</p>
            <p>{currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
          </div>

          <div className="flex flex-col items-center gap-3 md:gap-5 mb-6">
            {/* <p className=" text-xs md:text-sm  lg:text-2xl  capitalize">{data.currentConditions.conditions}</p> */}
          <p class="text-xs md:text-sm lg:text-2xl capitalize">Partly Cloudy</p>

          </div>

          <p className="text-xs flex items-center  lg:text-2xl justify-center gap-2 px-2 mt-2">
            <FaMapMarkerAlt className="flex-shrink-0  iconmap" />
            <span className="break-words">{data.resolvedAddress}</span>
          </p>
        </div>
        </div>
      </>
    );
  }

  return (
    <h2 className="flex items-center justify-center text-xl md:text-2xl text-yellow-200">
      Plan Accordingly
    </h2>
  );
};

export default WeatherCard;

