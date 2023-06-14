import {
  OrderingStep,
  orderingSlice,
} from "@ratatouille/modules/order/core/store/ordering.slice";
import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";

export const registerOrderingStepListener = (
  listener: ListenerMiddlewareInstance
) => {
  listener.startListening({
    actionCreator: orderingSlice.actions.chooseGuests,
    effect: (_, api) => {
      api.dispatch(orderingSlice.actions.setStep(OrderingStep.TABLE));
    },
  });
};
