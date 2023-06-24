import { AppState } from "@ratatouille/modules/store/store";

export const selectForm = (state: AppState) => state.ordering.form;
