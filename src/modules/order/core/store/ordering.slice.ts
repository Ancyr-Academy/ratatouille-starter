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
  availableMeals: {
    data: OrderingDomainModel.Meal[];
    status: "idle" | "loading" | "success" | "error";
    error: string | null;
  };

  reservation: ReservationStatus;
};

export type ReservationStatus =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "error";
      error: string;
    }
  | {
      status: "success";
    };

export const initialState: OrderingState = {
  step: OrderingDomainModel.Step.GUESTS,
  form: {
    guests: [],
    organizerId: null,
    tableId: null,
  },
  availableTables: {
    status: "idle",
    error: null,
    data: [],
  },
  availableMeals: {
    status: "idle",
    error: null,
    data: [],
  },
  reservation: {
    status: "idle",
  },
};

export const orderingSlice = createSlice({
  name: "ordering",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<OrderingDomainModel.Step>) => {
      state.step = action.payload;
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
    chooseTable(state, action: PayloadAction<string>) {
      state.form.tableId = action.payload;
    },
    storeMeals: (state, action: PayloadAction<OrderingDomainModel.Meal[]>) => {
      state.availableMeals.data = action.payload;
      state.availableMeals.status = "success";
    },
    handleMealsLoading: (state) => {
      state.availableMeals.status = "loading";
      state.availableMeals.error = null;
    },
    handleMealsError: (state, action: PayloadAction<string>) => {
      state.availableMeals.status = "error";
      state.availableMeals.error = action.payload;
    },
    chooseMeal: (state, action: PayloadAction<OrderingDomainModel.Form>) => {
      state.form = action.payload;
    },

    handleReservationLoading: (state) => {
      state.reservation = {
        status: "loading",
      };
    },
    handleReservationError: (state, action: PayloadAction<string>) => {
      state.reservation = {
        status: "error",
        error: action.payload,
      };
    },
    handleReservationSuccess: (state) => {
      state.reservation = {
        status: "success",
      };
      state.step = OrderingDomainModel.Step.RESERVED;
    },
  },
});

export const orderingReducer = orderingSlice.reducer;
export const orderingActions = orderingSlice.actions;
