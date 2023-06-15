import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";

import { orderingSlice } from "@ratatouille/modules/order/core/store/ordering.slice";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { fetchTables } from "@ratatouille/modules/order/core/usecases/fetch-tables.usecase";
import { fetchMeals } from "@ratatouille/modules/order/core/usecases/fetch-meals.usecase";

export const registerFetcherListeners = (
  listener: ListenerMiddlewareInstance
) => {
  listener.startListening({
    actionCreator: orderingSlice.actions.setStep,
    effect: (action, api) => {
      switch (action.payload) {
        case OrderingDomainModel.Step.TABLE: {
          api.dispatch(fetchTables as any);
          break;
        }
        case OrderingDomainModel.Step.MEALS: {
          api.dispatch(fetchMeals as any);
          break;
        }
      }
    },
  });
};
