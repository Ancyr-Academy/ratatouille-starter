import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type OrderingState = {
  form: OrderingDomainModel.Form;
};

export const initialState: OrderingState = {
  form: {
    guests: [],
    organizerId: null,
  },
};

export const orderingSlice = createSlice({
  name: "ordering",
  initialState,
  reducers: {
    chooseGuests(state, action: PayloadAction<OrderingDomainModel.Form>) {
      state.form = action.payload;
    },
  },
});

export const orderingReducer = orderingSlice.reducer;
export const orderingActions = orderingSlice.actions;
