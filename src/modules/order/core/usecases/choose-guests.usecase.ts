import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { orderingActions } from "@ratatouille/modules/order/core/store/ordering.slice";
import { AppDispatch, AppGetState } from "@ratatouille/modules/store/store";

export const chooseGuests =
  (form: OrderingDomainModel.Form) =>
  async (dispatch: AppDispatch, getState: AppGetState) => {
    dispatch(orderingActions.chooseGuests(form));
  };
