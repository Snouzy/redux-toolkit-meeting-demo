import { AppThunk } from "stores";
import slice from "./game.reducer";

export const increment = (): AppThunk => (dispatch) => {
  dispatch(slice.actions.increment());
};
