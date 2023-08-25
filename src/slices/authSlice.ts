import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

export type AuthState = {
  isAuthenticated: boolean;
  id: string;
};

const initialState: AuthState = {
  isAuthenticated: false,
  id: "",
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<{ id: string }>) => {
      state.isAuthenticated = true;
      state.id = action.payload.id;
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
