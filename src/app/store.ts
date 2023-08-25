import authReducer from "@/slices/authSlice";
import counterReducer from "@/slices/counterSlice";
import weatherAlertsReducer from "@/slices/weatherAlertsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    weatherAlerts: weatherAlertsReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
