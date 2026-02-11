
import AirQuality from './Airquality';

const TodaysHighlights = ({ data }) => {
  if (!data) return null;

  const current = data.currentConditions;

  const formatTime = (timeStr) => {
    if (!timeStr) return "N/A";
    const date = new Date(`1970-01-01T${timeStr}`);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
  };

  return (
    <div className="highlights bg-white/10 rounded-xl p-4 md:p-6 mb-6">
      <h3 className="mt-4 md:mt-8 text-white text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        Today's Highlights
      </h3>
<br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4  text-center ">

        <div className="bg-white/5 rounded-xl p-5 md:p-6  min-h-[150px] ">
          {/* <p className=" text-3xl text-white md:text-base mb-3 ">UV Index</p><br /> */}
         <p className="text-base md:text-3xl text-white mb-3">UV Index</p> <br />

         <p className="text-white text-3xl md:text-4xl font-bold">
            {current.uvindex ?? "N/A"}
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-5 md:p-6 ">
          <p className="text-base md:text-3xl text-white mb-3">Wind Status</p><br />
          <p className="text-white text-3xl md:text-4xl  font-bold">
            {current.windspeed}
            <br /><br />
          </p>
          <p className="text-white/70 text-2xl text-left font-bold
          ">km/hr</p>
        </div>

        <div className="bg-white/5 rounded-xl p-5 md:p-6  min-h-[150px]">
          <p className="text-base md:text-3xl text-white mb-3">Sunrise & Sunset</p><br />
          <p className="text-white text-xl md:text-2xl font-bold">
            {formatTime(current.sunrise)}
          </p>
          <p className="text-white text-xl md:text-2xl font-bold text-left"><br />
            {formatTime(current.sunset)}
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-5 md:p-6 ">
          <p className="text-base md:text-3xl text-white mb-3">Humidity</p><br />
          <p className="text-white text-3xl md:text-4xl font-bold">
            {current.humidity}%
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-5 md:p-6  min-h-[150px]">
          <p className="text-base md:text-3xl text-white mb-3">Visibility</p>    <br />
          <p className="text-white text-3xl md:text-4xl font-bold">
            {current.visibility} km
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-5 md:p-6">
          <p className="text-base md:text-3xl text-white mb-3">Air Quality</p><br />
          <p className="text-white text-3xl md:text-4xl font-bold text-center">
            {current.aqius ?? "N/A"}
          </p>
          <br /><br />
          <div className='text-left text-3xl'>
          <AirQuality pm2p5={current.pm2p5} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TodaysHighlights;
