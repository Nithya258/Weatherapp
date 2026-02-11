const getPm25Status = (pm) => {
  if (pm <= 12) return "Good";
  if (pm <= 35.4) return "Moderate";
  if (pm <= 55.4) return "precautions must be taken";
  if (pm <= 150.4) return "constant exposure may be dangerous";
  return "severe risk";
};

const AirQuality = ({ pm2p5 }) => {
  if (!pm2p5) {
    return (
      <p className="text-white/60 text-sm mt-1">
        Air: N/A
      </p>
    );
  }


  const status = getPm25Status(pm2p5);

  return (
    <p className="text-red-500 text-xl mt-1 font-medium">
      Air: {status}
    </p>
  );
};

export default AirQuality;
