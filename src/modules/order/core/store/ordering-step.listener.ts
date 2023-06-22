import { orderingSlice } from "@ratatouille/modules/order/core/store/ordering.slice";
import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

export const registerOrderingStepListener = (
  listener: ListenerMiddlewareInstance
) => {
  listener.startListening({
    actionCreator: orderingSlice.actions.chooseGuests,
    effect: (_, api) => {
      api.dispatch(
        orderingSlice.actions.setStep(OrderingDomainModel.Step.TABLE)
      );
    },
  });

  listener.startListening({
    actionCreator: orderingSlice.actions.chooseTable,
    effect: (_, api) => {
      api.dispatch(
        orderingSlice.actions.setStep(OrderingDomainModel.Step.MEALS)
      );
    },
  });

  listener.startListening({
    actionCreator: orderingSlice.actions.chooseMeal,
    effect: (_, api) => {
      api.dispatch(
        orderingSlice.actions.setStep(OrderingDomainModel.Step.SUMMARY)
      );
    },
  });
  listener.startListening({
    actionCreator: orderingSlice.actions.handleReservationSuccess,
    effect: (_, api) => {
      api.dispatch(
        orderingSlice.actions.setStep(OrderingDomainModel.Step.RESERVED)
      );
    },
  });
};
