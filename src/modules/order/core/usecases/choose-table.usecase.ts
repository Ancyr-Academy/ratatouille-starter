import { orderingSlice } from "@ratatouille/modules/order/core/store/ordering.slice";
import { AppDispatch, AppGetState } from "@ratatouille/modules/store/store";

export const chooseTable =
  (tableId: string) => (dispatch: AppDispatch, getState: AppGetState) => {
    dispatch(orderingSlice.actions.chooseTable(tableId));
  };
