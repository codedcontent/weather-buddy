import {
  TLocation,
  TSingleWeatherAlert,
  TWeatherAlert,
  TWeatherAlertTimes,
} from "@/types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

const WEATHER_ALERTS_URL = "/api/alerts";

type InitialState = TSingleWeatherAlert;

const initialState: TWeatherAlert[] = [
  //   {
  //     location: {} as TLocation,
  //     times: [],
  //     id: "",
  //   },
];

// Get the users weather alerts
export const fetchWeatherAlerts = createAsyncThunk(
  "weatherAlerts/fetchWeatherAlerts",
  async (userDetails: {
    id: string;
    weatherAlerts?: Record<string, unknown>;
  }) => {
    const { id } = userDetails;

    const url = `${WEATHER_ALERTS_URL}/${id}`;

    const response = await axios.get(url);
    // console.log(response.data);

    return response.data;
  }
);

const weatherAlertsSlice = createSlice({
  name: "weatherAlerts",
  initialState,
  reducers: {
    addNewTime: (
      state,
      action: PayloadAction<{
        locationId: string;
        time: TWeatherAlertTimes;
      }>
    ) => {
      const { locationId, time } = action.payload;
      const foundAlert = state.find((alert) => alert.id === locationId);

      if (foundAlert) {
        foundAlert.times.push(time);
      }
    },

    deleteTime: (
      state,
      action: PayloadAction<{
        locationId: string;
        timeIndex: number;
      }>
    ) => {
      const { locationId, timeIndex } = action.payload;
      const foundAlert = state.find((alert) => alert.id === locationId);

      if (foundAlert) {
        // Remove the deleted time from the alerts time array
        foundAlert.times.splice(timeIndex, 1);
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(
        fetchWeatherAlerts.fulfilled,
        (_, action: PayloadAction<TWeatherAlert[]>) => {
          return action.payload;
        }
      )
      .addCase(fetchWeatherAlerts.pending, (state, action) => {
        // console.log({ state, action, status: "pending" });
      })
      .addCase(fetchWeatherAlerts.rejected, (state, action) => {
        // console.log({ state, action, status: "rejected" });
      });
  },
});

const weatherAlertsReducer = weatherAlertsSlice.reducer;

export const { addNewTime, deleteTime } = weatherAlertsSlice.actions;

export default weatherAlertsReducer;
