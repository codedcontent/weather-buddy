"use client";

import userReducer from "@/reducers/userReducer";
import { TSubscriptionPlans, TUserState } from "@/types/types";
import React, { createContext, useReducer } from "react";
import { useSession } from "next-auth/react";

const INITIAL_STATE: TUserState = {
  id: "someID",
  accountDetails: {
    firstName: "Ogechukwu",
    lastName: "Mephors",
    email: "ogechukwu@example.com",
    phoneNumber: "+1234567890",
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
      enabled: true,
    },
    sms: {
      enabled: true,
    },
    whatsApp: { enabled: false },
    pushNotifications: { enabled: false },
  },
  subscriptionDetails: {
    plan: "premium",
    expDate: new Date("2023-12-31"),
  },
};

/**
 * ALL THE ACTION TYPES
 */
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

export type UserActionTypes =
  | StartSubscriptionActionType
  | CancelSubscriptionActionType;

/**
 * THE REDUCER FUNCTION
 */
export const UserContext = createContext<{
  state: TUserState;
  dispatch: React.Dispatch<UserActionTypes>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

type UserProviderProps = {
  children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const session = useSession();

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
