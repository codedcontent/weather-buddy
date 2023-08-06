"use client";

import { Location } from "@/types/types";
import React, { createContext, useReducer } from "react";

// The ts-type of our state in the reducer
type StateType = {
  id: number;
  location: Location;
  times: string[];
}[];

// The action types for the reducer
type DeleteLocationActionType = {
  type: "DELETE_LOCATION";
  payload: {
    id: number;
  };
};

type AddLocationActionType = {
  type: "ADD_NEW_LOCATION";
  payload: {
    id: number;
  };
};

type AddTimeActionType = {
  type: "ADD_NEW_TIME";
  payload: {
    id: number;
    time: string;
  };
};

type DeleteTimeActionType = {
  type: "DELETE_TIME";
  payload: {
    id: number;
    time: string;
  };
};

type ActionType =
  | AddLocationActionType
  | AddTimeActionType
  | DeleteLocationActionType
  | DeleteTimeActionType;

const INITIAL_STATE: StateType = [
  {
    id: 1,
    location: {
      title: "Indianapolis",
      coord: { lat: 0, long: 0 },
    },
    times: ["5:00 AM", "4:00 PM"],
  },
];

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_NEW_LOCATION":
      return [
        ...state,
        {
          id: state.length + 1,
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
        (alert) => alert.id !== action.payload.id
      );

      return filteredAlerts;

    case "ADD_NEW_TIME":
      // Find the alert that is being updated
      const weatherAlertBeingUpdated = state[action.payload.id - 1];

      // Update the new time in the alert
      weatherAlertBeingUpdated?.times.push(action.payload.time);

      // THE NEW STATE MUST BE IN THE ORDER IT WAS CREATED IN
      // Find the index of the updated alert
      const updatedAlertIndex = action.payload.id - 1;

      // Get the alerts before the updatedAlert
      const alertsBefore = state.slice(0, updatedAlertIndex);

      // Get the alerts after the updatedAlert
      const alertsAfter = state.slice(updatedAlertIndex + 1);

      // Update the state
      return [...alertsBefore, weatherAlertBeingUpdated, ...alertsAfter];

    case "DELETE_TIME":
      // Find the alert that is being updated
      const weatherAlertBeingUpdated_TIME = state[action.payload.id - 1];

      // Find the index of the time to be removed
      const timeIndex = weatherAlertBeingUpdated_TIME.times.findIndex(
        (time) => time === action.payload.time
      );

      // Remove the payload time from the alert times
      weatherAlertBeingUpdated_TIME.times.splice(timeIndex, 1);

      // THE NEW STATE MUST BE IN THE ORDER IT WAS CREATED IN
      // Find the index of the updated alert
      const updatedAlertIndex_TIME = action.payload.id - 1;

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
