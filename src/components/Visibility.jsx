const getVisibilityStatus = (visibility) => {
  if (visibility >= 10) return "Clear";
  if (visibility >= 5) return "Moderate";
  if (visibility >= 2) return "Low";
  return "Very Low";
};

const Visibility = ({ visibility }) => {
  if (visibility === undefined || visibility === null) {
    return (
      <p className="text-white/60 text-sm mt-1">
        Visibility: N/A
      </p>
    );
  }

  const status = getVisibilityStatus(visibility);

  return (
    <p className="text-green-400 text-xl mt-1 font-medium">
      Visibility: {status}
    </p>
  );
};

export default Visibility;
