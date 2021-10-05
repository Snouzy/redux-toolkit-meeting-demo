import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  counter: number;
}

const initialState = {
  counter: 0
};

const slice = createSlice({
  name: "game",
  initialState,
  reducers: {
    increment(state: GameState) {
      state.counter = state.counter++;
    }
  }
});

export const { reducer } = slice;
export default slice;
