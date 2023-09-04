import authReducer from "@/slices/authSlice";
import counterReducer from "@/slices/counterSlice";
import notificationsReducer from "@/slices/notificationsSlice";
import subscriptionReducer from "@/slices/subscriptionSlices";
import userReducer from "@/slices/userSlice";
import weatherAlertsReducer from "@/slices/weatherAlertsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    weatherAlerts: weatherAlertsReducer,
    auth: authReducer,
    notifications: notificationsReducer,
    subscription: subscriptionReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
