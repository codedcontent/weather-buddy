import { UserActionTypes } from "@/context/UserProvider";
import { TUserState } from "@/types/types";

const userReducer = (
  state: TUserState,
  action: UserActionTypes
): TUserState => {
  const payload = action.payload;

  switch (action.type) {
    case "CANCEL_SUBSCRIPTION":
      console.log(state.subscriptionDetails);
      // Cancel users subscription

      state.subscriptionDetails.plan = "free";
      return { ...(state as TUserState) };

    case "START_SUBSCRIPTION":
      // Start users subscription
      state.subscriptionDetails.plan = payload.subscription;
      return { ...(state as TUserState) };

    // default:
    //   return { ...(state as TUserState) };
  }
};

export default userReducer;
