"use client";
// TODO: REPLACE LOCATION_ID's WITH LOCATION_INDEX's

import { Location, TWeatherAlerts } from "@/types/types";
import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// The ts-type of our state in the reducer
type StateType = {
  weatherAlertId: string;
  location: Location;
  times: string[];
}[];

// The action types for the reducer
type DeleteLocationActionType = {
  type: "DELETE_LOCATION";
  payload: {
    weatherAlertId: string;
  };
};

type AddLocationActionType = {
  type: "ADD_NEW_LOCATION";
};

type AddTimeActionType = {
  type: "ADD_NEW_TIME";
  payload: {
    weatherAlertId: string;
    time: string;
  };
};

type DeleteTimeActionType = {
  type: "DELETE_TIME";
  payload: {
    weatherAlertId: string;
    time: string;
  };
};

type SetLocationsActionType = {
  type: "SET_ALERTS";
  payload: {
    weatherAlerts: TWeatherAlerts;
  };
};

type UpdateLocationActionType = {
  type: "UPDATE_LOCATION";
  payload: {
    weatherAlertId: string;
    newLocation: Location;
  };
};

type ActionType =
  | AddLocationActionType
  | AddTimeActionType
  | DeleteLocationActionType
  | DeleteTimeActionType
  | SetLocationsActionType
  | UpdateLocationActionType;

const INITIAL_STATE: StateType = [
  {
    weatherAlertId: uuidv4(),
    location: {
      title: "",
      coord: { lat: 0, long: 0 },
    },
    times: ["5:00 AM"],
  },
];

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_ALERTS":
      // Set the users alert locations
      return action.payload.weatherAlerts;

    case "UPDATE_LOCATION":
      const locationIndexToUpdate = state.findIndex(
        (data) => data.weatherAlertId === action.payload.weatherAlertId
      );

      // Update the location
      state[locationIndexToUpdate].location = action.payload.newLocation;

      return state;

    case "ADD_NEW_LOCATION":
      return [
        ...state,
        {
          weatherAlertId: uuidv4(),
          location: {
            title: "",
            coord: { lat: 0, long: 0 },
          },
          times: ["5:00 AM"],
        },
      ];

    case "DELETE_LOCATION":
      // Remove the payload location from the list of alerts
      const filteredAlerts = state.filter(
        (alert) => alert.weatherAlertId !== action.payload.weatherAlertId
      );

      return filteredAlerts;

    case "ADD_NEW_TIME":
      // Find the index of the updated alert
      const weatherAlertBeingUpdatedIndex_ADD = state.findIndex(
        (alert) => alert.weatherAlertId === action.payload.weatherAlertId
      );

      // Find the alert that is being updated
      const weatherAlertBeingUpdated = state[weatherAlertBeingUpdatedIndex_ADD];

      // Update the new time in the alert
      weatherAlertBeingUpdated?.times.push(action.payload.time);

      // Update the state
      return state;

    case "DELETE_TIME":
      // Find the index of the updated alert
      const weatherAlertBeingUpdatedIndex_DELETE = state.findIndex(
        (alert) => alert.weatherAlertId === action.payload.weatherAlertId
      );

      // Find the alert that is being updated
      const weatherAlertBeingUpdated_TIME =
        state[weatherAlertBeingUpdatedIndex_DELETE];

      // Find the index of the time to be removed
      const timeIndex = weatherAlertBeingUpdated_TIME.times.findIndex(
        (time) => time === action.payload.time
      );

      // Remove the payload time from the alert times
      weatherAlertBeingUpdated_TIME.times.splice(timeIndex, 1);

      // THE NEW STATE MUST BE IN THE ORDER IT WAS CREATED IN
      // Find the index of the updated alert
      const updatedAlertIndex_TIME = weatherAlertBeingUpdatedIndex_DELETE;

      // Get the alerts before the updatedAlert
      const alertsBefore_TIME = state.slice(0, updatedAlertIndex_TIME);

      // Get the alerts after the updatedAlert
      const alertsAfter_TIME = state.slice(updatedAlertIndex_TIME + 1);

      // Update the state
      return [
        ...alertsBefore_TIME,
        weatherAlertBeingUpdated_TIME,
        ...alertsAfter_TIME,
      ];

    default:
      return state;
  }
};

type WeatherAlertsProviderProps = {
  children: React.ReactNode;
};

export const WeatherAlertsContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

export const WeatherAlertsProvider: React.FC<WeatherAlertsProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <WeatherAlertsContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherAlertsContext.Provider>
  );
};
