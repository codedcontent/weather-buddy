import { TNotificationType, TNotifications } from "./../types/types";
import { RootState } from "@/app/store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type InitialStateType = {
  notifications: TNotificationType | null;
  error: string | null;
  status: "idle" | "success" | "failed" | "pending";
};

const initialState: InitialStateType = {
  notifications: null,
  error: null,
  status: "idle",
};

const NOTIFICATIONS_BASE_URL = "/api/notifications";

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async (userId: string) => {
    const url = `${NOTIFICATIONS_BASE_URL}/${userId}`;

    const resp = await axios.get(url);

    const data = resp.data;

    return data;
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    checkNotification: (
      state,
      action: PayloadAction<{
        notificationName: keyof TNotificationType;
        isChecked: boolean;
      }>
    ) => {
      const payload = action.payload;

      if (state.notifications) {
        state.notifications[payload.notificationName] = payload.isChecked;
      }
    },

    resetNotification: (
      state,
      action: PayloadAction<{ notifications: TNotificationType }>
    ) => {
      state.notifications = action.payload.notifications;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchNotifications.fulfilled,
        (state, action: PayloadAction<{ notifications: TNotifications }>) => {
          state.status = "success";

          const notifications = action.payload.notifications;

          state.notifications = {
            email: notifications.email.enabled as boolean,
            pushNotifications: notifications.pushNotifications
              .enabled as boolean,
            sms: notifications.sms.enabled as boolean,
            whatsApp: notifications.whatsApp.enabled as boolean,
          };
        }
      )
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message as string;
      })
      .addCase(fetchNotifications.pending, (state) => {
        state.status = "pending";
        state.error = null;
      });
  },
});

export const { checkNotification, resetNotification } =
  notificationsSlice.actions;

export const selectNotifications = (state: RootState) =>
  state.notifications.notifications;

export const getNotificationsStatus = (state: RootState) =>
  state.notifications.status;

export const getNotificationsError = (state: RootState) =>
  state.notifications.error;

const notificationsReducer = notificationsSlice.reducer;

export default notificationsReducer;
