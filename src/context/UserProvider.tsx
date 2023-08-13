"use client";

import userReducer from "@/reducers/userReducer";
import {
  TAccountDetails,
  TSubscriptionPlans,
  TUserState,
  TWeatherAlerts,
} from "@/types/types";
import React, { createContext, useReducer } from "react";

const INITIAL_STATE: TUserState = {
  id: "",
  accountDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  },
  weatherAlerts: [
    {
      weatherAlertId: "",
      location: {
        title: "",
        coord: {
          lat: 0,
          long: 0,
        },
      },
      times: [""],
    },
  ],
  notifications: {
    email: {
      enabled: false,
    },
    sms: {
      enabled: false,
    },
    whatsApp: { enabled: false },
    pushNotifications: { enabled: false },
  },
  subscriptionDetails: {
    plan: "free",
    expDate: new Date(),
  },
};

/**
 * ALL THE ACTION TYPES
 */
type SetUserActionType = {
  type: "SET_USER";
  payload: {
    user: TUserState;
  };
};

type StartSubscriptionActionType = {
  type: "START_SUBSCRIPTION";
  payload: {
    subscription: TSubscriptionPlans;
  };
};

type CancelSubscriptionActionType = {
  type: "CANCEL_SUBSCRIPTION";
  payload: {
    subscription: TSubscriptionPlans;
  };
};

type UpdateAccountDetailsActionType = {
  type: "UPDATE_ACCOUNT_DETAILS";
  payload: {
    accountDetails: TAccountDetails;
  };
};

type UpdateWeatherAlertsActionType = {
  type: "UPDATE_WEATHER_ALERTS";
  payload: {
    weatherAlerts: TWeatherAlerts;
  };
};

export type UserActionTypes =
  | SetUserActionType
  | StartSubscriptionActionType
  | CancelSubscriptionActionType
  | UpdateAccountDetailsActionType
  | UpdateWeatherAlertsActionType;

/**
 * THE REDUCER FUNCTION
 */
export const UserContext = createContext<{
  user: TUserState;
  dispatch: React.Dispatch<UserActionTypes>;
}>({
  user: INITIAL_STATE,
  dispatch: () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        user: state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
