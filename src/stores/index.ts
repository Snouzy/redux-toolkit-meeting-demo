import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction
} from "@reduxjs/toolkit";
import { reducer as GameReducer } from "./Game/game.reducer";

const rootReducer = combineReducers({
  Game: GameReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
