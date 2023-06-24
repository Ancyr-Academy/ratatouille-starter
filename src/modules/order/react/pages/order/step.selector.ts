import { AppState } from "@ratatouille/modules/store/store";

export const selectStep = (state: AppState) => state.ordering.step;
