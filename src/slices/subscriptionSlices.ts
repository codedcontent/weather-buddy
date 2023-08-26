import { RootState } from "@/app/store";
import { TSubscriptionType } from "@/types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type InitialStateType = {
  subscription: {
    plan: TSubscriptionType;
    currentPlanExp: string | null;
  } | null;
  status: "idle" | "success" | "failed" | "pending";
  error: string | null;
};

const initialState: InitialStateType = {
  error: null,
  status: "idle",
  subscription: null,
};

export const fetchSubscription = createAsyncThunk(
  "subscription/fetchSubscription",
  async (userId: string) => {
    const url = `/api/subscriptions/${userId}`;

    const resp = await axios.get(url);

    const data = resp.data;

    return data;
  }
);

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSubscription.fulfilled,
        (
          state,
          action: PayloadAction<{ plan: TSubscriptionType; exp?: string }>
        ) => {
          const payload = action.payload;
          state.status = "success";

          state.subscription = {
            plan: payload.plan,
            currentPlanExp: payload.exp || null,
          };
        }
      )
      .addCase(fetchSubscription.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchSubscription.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      });
  },
});

const subscriptionReducer = subscriptionSlice.reducer;

export const selectSubscription = (state: RootState) =>
  state.subscription.subscription;

export const getSubscriptionError = (state: RootState) =>
  state.subscription.error;

export const getSubscriptionStatus = (state: RootState) =>
  state.subscription.status;

export default subscriptionReducer;
