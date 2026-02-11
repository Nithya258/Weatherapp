import { getWeatherAssets } from '../utils/weatherConfig';

const WeekForecast = ({ data, tempUnit }) => {
  if (!data) return null;

  const weekDays = data.days.slice(0, 7);

  const convertTemp = (temp) => {
    if (tempUnit === 'fahrenheit') {
      return Math.round((temp * 9 / 5) + 32);
    }
    return Math.round(temp);
  };

  return (
    <div className="sevenday  backdrop-blur-md rounded-2xl p-4 md:p-6 mb-8">
      <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
        7 Days Forecast
      </h2>

      <div className=" sevencards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
        {weekDays.map((day, index) => {
          const { icon } = getWeatherAssets(day.icon);
          const date = new Date(day.datetime);
          const dayName = index === 0 ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'long' });

          return (
            // <div key={index} className="week bg-white/5 rounded-xl p-3 md:p-4 text-center">
            //   <h3 className="text-white/90 text-xl md:text-sm mb-2">{dayName}</h3>
            //   <img 
            //     src={icon} 
            //     alt="weather" 
            //     // className="w-20 h-20 mx-auto translate-x-5 mb-2 "

            //     className="w-20 h-20 md:w-12 md:h-12 mx-auto translate-x-5 lg:translate-x-10 mb-2" 
            //   />
            //   <p className="text-white text-lg md:text-xl font-bold">
            //     {convertTemp(day.tempmax)}°{tempUnit === 'fahrenheit' ? 'F' : 'C'}
            //   </p>
            // </div>

            // <div key={index} className="week bg-white/5 rounded-xl p-3 md:p-4 text-center">
            //   <h3 className="text-white/90 text-xl md:text-sm mb-2">{dayName}</h3>
              
            //   <img
            //     src={icon}
            //     alt="weather"
            //     className=" relative mx-auto w-20 h-20 md:w-12 md:h-12 translate-x-16 mb-2"
            //   />
            //   <p className="text-white text-lg md:text-xl font-bold">
            //     {convertTemp(day.tempmax)}°{tempUnit === 'fahrenheit' ? 'F' : 'C'}
            //   </p>
            // </div>

// 
<div key={index} className="week bg-white/5 rounded-xl p-3 md:p-4 text-center ">
  <h3 className="text-white/90 text-xl md:text-sm mb-2">{dayName}</h3>

  <img
    src={icon}
    alt="weather"
    className=" weekicon  w-20 h-20 md:w-12 md:h-12 mb-2"
  />

  <p className="text-white text-lg md:text-xl font-bold">
    {convertTemp(day.tempmax)}°{tempUnit === 'fahrenheit' ? 'F' : 'C'}
  </p>
</div>


          );
        })}
      </div>
    </div>
  );
};

export default WeekForecast;
