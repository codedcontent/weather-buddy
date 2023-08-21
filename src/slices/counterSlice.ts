import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

const counterReducer = counterSlice.reducer;

// Export the slice reducer
export default counterReducer;
