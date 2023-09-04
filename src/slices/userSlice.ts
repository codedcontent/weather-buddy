import { RootState } from "@/app/store";
import { TAccountDetails } from "@/types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type InitialStateType = {
  user: TAccountDetails;
  status: "idle" | "success" | "failed" | "pending";
  error: string | null;
};

const initialState: InitialStateType = {
  error: null,
  status: "idle",
  user: {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  },
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId: string) => {
    const url = `/api/users/${userId}`;

    const resp = await axios.get(url);

    const data = resp.data;

    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserDetails: (state, action: PayloadAction<TAccountDetails>) => {
      const userDetails = action.payload;

      state.user = userDetails;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<TAccountDetails>) => {
          const payload = action.payload;
          state.status = "success";

          state.user = payload;
        }
      )
      .addCase(fetchUser.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

const userReducer = userSlice.reducer;

export const selectUser = (state: RootState) => state.user.user;

export const getUserError = (state: RootState) => state.user.error;

export const getUserStatus = (state: RootState) => state.user.status;

export default userReducer;
