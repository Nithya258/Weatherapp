const getUvStatus = (uv) => {
  if (uv <= 2) return "Low";
  if (uv <= 5) return "Moderate";
  if (uv <= 7) return "High";
  if (uv <= 10) return "Very High";
  return "Extreme";
};

const UvIndex = ({ uv }) => {
  if (uv === undefined || uv === null) {
    return (
      <p className="text-white/60 text-sm mt-1">
        UV Index: N/A
      </p>
    );
  }

  const status = getUvStatus(uv);

  return (
    <p className="text-yellow-400 text-xl mt-1 font-medium">
      UV Index: {status}
    </p>
  );
};

export default UvIndex;
