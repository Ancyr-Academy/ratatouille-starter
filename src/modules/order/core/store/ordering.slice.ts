import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type OrderingState = {
  step: OrderingDomainModel.Step;
  form: OrderingDomainModel.Form;

  availableTables: {
    data: OrderingDomainModel.Table[];
    status: "idle" | "loading" | "success" | "error";
    error: string | null;
  };
};

export const initialState: OrderingState = {
  step: OrderingDomainModel.Step.GUESTS,
  form: {
    guests: [],
    organizerId: null,
  },
  availableTables: {
    status: "idle",
    error: null,
    data: [],
  },
};

export const orderingSlice = createSlice({
  name: "ordering",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<OrderingDomainModel.Step>) => {
      state.step = OrderingDomainModel.Step.TABLE;
    },
    handleTablesLoading: (state) => {
      state.availableTables.status = "loading";
      state.availableTables.error = null;
    },
    handleTablesError: (state, action: PayloadAction<string>) => {
      state.availableTables.status = "error";
      state.availableTables.error = action.payload;
    },
    storeTables: (
      state,
      action: PayloadAction<OrderingDomainModel.Table[]>
    ) => {
      state.availableTables.data = action.payload;
      state.availableTables.status = "success";
    },
    chooseGuests(state, action: PayloadAction<OrderingDomainModel.Form>) {
      state.form = action.payload;
    },
  },
});

export const orderingReducer = orderingSlice.reducer;
export const orderingActions = orderingSlice.actions;
