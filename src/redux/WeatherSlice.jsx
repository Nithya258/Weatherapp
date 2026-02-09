
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Visual Crossing Weather API key
const API_KEY = 'EJ6UBL2JEQGYB3AA4ENASN62J';

// Async thunk to fetch weather
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&contentType=json&elements=datetime,temp,visibility,tempmax,tempmin,humidity,windspeed,winddir,pressure,cloudcover,icon,sunrise,sunset,uvindex,aqius,pm2p5,pm10,o3,no2,so2,co&key=${API_KEY}`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
