import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum OrderingStep {
  GUESTS = 0,
  TABLE = 1,
  MEALS = 2,
  SUMMARY = 3,
  RESERVED = 4,
}

export type OrderingState = {
  step: OrderingStep;
  form: OrderingDomainModel.Form;
};

export const initialState: OrderingState = {
  step: OrderingStep.GUESTS,
  form: {
    guests: [],
    organizerId: null,
  },
};

export const orderingSlice = createSlice({
  name: "ordering",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<OrderingStep>) => {
      state.step = OrderingStep.TABLE;
    },
    chooseGuests(state, action: PayloadAction<OrderingDomainModel.Form>) {
      state.form = action.payload;
    },
  },
});

export const orderingReducer = orderingSlice.reducer;
export const orderingActions = orderingSlice.actions;
