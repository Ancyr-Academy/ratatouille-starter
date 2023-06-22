import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import {
  orderingActions,
  orderingSlice,
} from "@ratatouille/modules/order/core/store/ordering.slice";
import { AppDispatch } from "@ratatouille/modules/store/store";

export const chooseMeal =
  (form: OrderingDomainModel.Form) => (dispatch: AppDispatch) => {
    dispatch(orderingSlice.actions.chooseMeal(form));
  };
