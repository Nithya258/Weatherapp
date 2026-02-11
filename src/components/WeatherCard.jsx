
// import { FaMapMarkerAlt } from 'react-icons/fa';
import { getWeatherAssets } from '../utils/weatherConfig';
// import { FaMapMarkerAlt } from 'react-icons/fa';


const WeatherCard = ({ data, tempUnit, compact = false }) => {
  if (!data) return null;



  console.log("Full data object:", data);

  const conditionText = data.currentConditions.conditions;
  console.log(conditionText);
  // 



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
              className="lg:w-70 lg:h-80  md:w-30 md:h-27 sm:w-10 sm:h-10  bg-red-200 "


            />
          </div>
          <br />


          <div className="text-yellow-200 text-center mt-4 md:mt-6 flex-1 text-left">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-3"><br />
              {convertTemp(data.currentConditions.temp)}°{tempUnit === 'fahrenheit' ? 'F' : 'C'}
            </h1><br />

            <div className="flex flex-row gap-1 mb-4 lg:text-xl 2md:text-sm ">
              <p>{currentDate.toLocaleDateString('en-US', { weekday: 'long' })}</p> br <br />
              <p>{currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <br /><hr />

            <div className="flex flex-row items-center gap-3 md:gap-5 mb-6">
              {/* <p className=" text-xs md:text-sm  lg:text-2xl  capitalize">{data.currentConditions.conditions}</p> */}
              {/* <p class="text-xs md:text-sm lg:text-2xl capitalize">{data.conditions}%</p> */}




              <p className="text-white text-xl md:text-2xl font-bold capitalize">
                {data.currentConditions.conditions}
              </p>






            </div>

            <p className="flex text-xs lg:text-2xl gap-2 px-2 mt-2 ">

              <span className="break-words">{data.resolvedAddress}</span>
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h2 className="flex items-center justify-center text-xl md:text-2xl text-yellow-200 mt-2">
        WEATHER FORECAST
      </h2>

    </>

  );
};

export default WeatherCard;

