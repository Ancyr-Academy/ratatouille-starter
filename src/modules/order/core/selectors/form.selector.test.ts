import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { createTestState } from "@ratatouille/modules/testing/tests-environment";
import { selectForm } from "@ratatouille/modules/order/core/selectors/form.selector";

const orderingState: OrderingDomainModel.State = {
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

it("should return the form", () => {
  const state = createTestState({
    ordering: orderingState,
  });

  expect(selectForm(state)).toEqual({
    guests: [],
    organizerId: null,
    tableId: null,
  });
});
