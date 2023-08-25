import {
  TLocation,
  TSingleWeatherAlert,
  TWeatherAlert,
  TWeatherAlertTimes,
} from "@/types/types";
import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/store";

const WEATHER_ALERTS_URL = "/api/alerts";

// TWeatherAlert[]
type TStateErrors = "idle" | "loading" | "success" | "failed";

type InitialStateType = {
  weatherAlerts: TWeatherAlert[];
  status: TStateErrors;
  error: string;
};

const initialState: InitialStateType = {
  weatherAlerts: [],
  status: "idle",
  error: "",
};

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

export const saveWeatherAlertChanges = createAsyncThunk(
  "weatherAlerts/saveWeatherAlertChanges",
  async ({
    userId,
    weatherAlerts,
  }: {
    userId: string;
    weatherAlerts: TWeatherAlert[];
  }) => {}
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
      const foundAlert = state.weatherAlerts.find(
        (alert) => alert.id === locationId
      );

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
      const foundAlert = state.weatherAlerts.find(
        (alert) => alert.id === locationId
      );

      if (foundAlert) {
        // Remove the deleted time from the alerts time array
        foundAlert.times.splice(timeIndex, 1);
      }
    },

    addNewWeatherAlert: (state) => {
      state.weatherAlerts.push({
        id: nanoid(),
        times: ["5:00 AM"],
        location: {
          title: "",
          coord: { lat: 0, long: 0 },
        },
      });
    },

    deleteWeatherAlert: (
      state,
      action: PayloadAction<{ locationId: string }>
    ) => {
      state.weatherAlerts = state.weatherAlerts.filter(
        (weatherAlert) => weatherAlert.id !== action.payload.locationId
      );
    },

    resetWeatherAlerts: (state, action: PayloadAction<TWeatherAlert[]>) => {
      state.weatherAlerts = action.payload;
    },

    updateWeatherAlertLocation: (
      state,
      action: PayloadAction<{ location: TLocation; id: string }>
    ) => {
      const foundWeatherAlert = state.weatherAlerts.find(
        (weatherAlert) => weatherAlert.id === action.payload.id
      );

      if (foundWeatherAlert) {
        foundWeatherAlert.location = action.payload.location;
      }
    },
  },

  extraReducers(builder) {
    builder
      .addCase(
        fetchWeatherAlerts.fulfilled,
        (state, action: PayloadAction<TWeatherAlert[]>) => {
          state.status = "success";
          state.weatherAlerts = action.payload;
        }
      )
      .addCase(fetchWeatherAlerts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherAlerts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      })
      .addCase(saveWeatherAlertChanges.fulfilled, (state, action) => {});
  },
});

const weatherAlertsReducer = weatherAlertsSlice.reducer;

export const selectAllWeatherAlerts = (state: RootState) =>
  state.weatherAlerts.weatherAlerts;
export const getWeatherAlertsStatus = (state: RootState) =>
  state.weatherAlerts.status;
export const getWeatherAlertsError = (state: RootState) =>
  state.weatherAlerts.error;

export const {
  addNewTime,
  deleteTime,
  addNewWeatherAlert,
  deleteWeatherAlert,
  resetWeatherAlerts,
  updateWeatherAlertLocation,
} = weatherAlertsSlice.actions;

export default weatherAlertsReducer;
