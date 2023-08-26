import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

export type AuthState = {
  isAuthenticated: boolean;
  id: string;
  email: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
  id: "",
  email: "",
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    authenticate: (
      state,
      action: PayloadAction<{ id: string; email: string }>
    ) => {
      state.isAuthenticated = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    unAuthenticate: (state) => {
      state.isAuthenticated = false;
      state.id = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { authenticate, unAuthenticate } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

const authReducer = authSlice.reducer;

// Export the slice reducer
export default authReducer;
