import { UserActionTypes } from "@/context/UserProvider";
import { TUserState } from "@/types/types";

const userReducer = (
  state: TUserState,
  action: UserActionTypes
): TUserState => {
  switch (action.type) {
    case "CANCEL_SUBSCRIPTION":
      // Set the users subscription to free
      state.subscriptionDetails.plan = "free";
      return state;

    case "START_SUBSCRIPTION":
      // Start users subscription
      state.subscriptionDetails.plan = action.payload.subscription;
      return state;

    case "SET_USER":
      // Set the user details
      return action.payload.user;

    case "UPDATE_ACCOUNT_DETAILS":
      // Get the updates to be made
      state.accountDetails = action.payload.accountDetails;
      return state;

    case "UPDATE_WEATHER_ALERTS":
      // Set the weather alerts
      state.weatherAlerts = action.payload.weatherAlerts;
      return state;

    default:
      return state;
  }
};

export default userReducer;
