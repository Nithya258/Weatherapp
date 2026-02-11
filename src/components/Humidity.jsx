const getHumidityStatus = (humidity) => {
  if (humidity <= 30) return "Dry";
  if (humidity <= 60) return "Comfortable";
  if (humidity <= 80) return "Humid";
  return "Very Humid";
};

const Humidity = ({ humidity }) => {
  if (humidity === undefined || humidity === null) {
    return (
      <p className="text-white/60 text-sm mt-1">
        Humidity: N/A
      </p>
    );
  }

  const status = getHumidityStatus(humidity);

  return (
    <p className="text-blue-400 text-xl mt-1 font-medium">
      Humidity: {status}
    </p>
  );
};

export default Humidity;
