
import { getWeatherAssets } from '../utils/weatherConfig';

const HourlyForecast = ({ data, tempUnit }) => {
  if (!data) return null;

  const hourlyData = data.days[0]?.hours || [];

  const convertTemp = (temp) => {
    if (tempUnit === 'fahrenheit') {
      return Math.round((temp * 9 / 5) + 32);
    }
    return Math.round(temp);
  };

  return (
    <div className="hourly  rounded-2xl p-4 md:p-6 mb-6">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        Today's Hourly Forecast
      </h2><br />

      <div className=" hourcards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
        {hourlyData.map((hour, index) => {
          const { icon } = getWeatherAssets(hour.icon);
          const time = hour.datetime.slice(0, 5);

          return (
            <div key={index} className="bg-white/5 rounded-xl p-3 md:p-4 text-center">
              {/* <p className="text-white/60 textxl md:text-sm mb-2">{time}</p> */}
              {/* <p className="text-white text-base text-3xl md:text-lg  lg:text-lg mb-2">{time}</p><br /> */}
              <p className="text-white text-sm md:text-lg lg:text-2xl mb-2">{time}</p>

              <img src={icon} alt="weather" className=" houricon w-10 h-10 " />
              <p className="text-white text-base md:text-lg font-bold">
                {convertTemp(hour.temp)}°{tempUnit === 'fahrenheit' ? 'F' : 'C'}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
