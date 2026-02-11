const Navigation = ({ activeTab, setActiveTab, tempUnit, setTempUnit }) => {
  return (
    <div className="nav flex flex-row bg-black/50 p-4 mb-7 items-center justify-between gap-6">
      
      <div className="flex gap-5">
        <button
          onClick={() => setActiveTab('today')}
          className={`hovering px-6 py-2 rounded-lg font-bold transition-all text-base ${
            activeTab === 'today'
              ? 'bg-white text-black'
              : 'text-white hover:bg-white/20'
          }`}
        >
          Today
        </button>

        <button
          onClick={() => setActiveTab('week')}
          className={`hovering px-6 py-2 rounded-lg font-bold transition-all text-base ${
            activeTab === 'week'
              ? 'bg-white text-blue-900'
              : 'text-white hover:bg-white/20'
          }`}
        >
          Week
        </button>
      </div>

      <div className="flex gap-2 bg-white/10 rounded-lg p-1">
        <button
          onClick={() => setTempUnit('celsius')}
          className={` px-6 py-2 rounded-md font-semibold transition-all text-base ${
            tempUnit === 'celsius'
              ? 'bg-white text-blue-900'
              : 'text-white hover:bg-white/20'
          }`}
        >
          °C
        </button>

        <button
          onClick={() => setTempUnit('fahrenheit')}
          className={`hovering px-6 py-2 rounded-md font-semibold transition-all text-base ${
            tempUnit === 'fahrenheit'
              ? 'bg-white text-blue-900'
              : 'text-white hover:bg-white/20'
          }`}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Navigation;
