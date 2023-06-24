import { GuestFactory } from "@ratatouille/modules/order/core/model/guest.factory";
import { MealFactory } from "@ratatouille/modules/order/core/model/meal.factory";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { TableFactory } from "@ratatouille/modules/order/core/model/table.factory";
import { selectSummary } from "@ratatouille/modules/order/core/selectors/summary.selector";
import { createTestState } from "@ratatouille/modules/testing/tests-environment";

it("should return a summary when the guest has choosen every meal", () => {
  const ordering: OrderingDomainModel.State = {
    step: OrderingDomainModel.Step.GUESTS,
    form: {
      guests: [
        GuestFactory.create({
          id: "user-1",
          firstName: "John",
          lastName: "Doe",
          meals: {
            entry: "meal-1",
            mainCourse: "meal-2",
            dessert: "meal-3",
            drink: "meal-4",
          },
        }),
      ],
      organizerId: "user-1",
      tableId: "table-1",
    },
    availableTables: {
      status: "idle",
      error: null,
      data: [
        TableFactory.create({
          id: "table-1",
          title: "Ma table",
        }),
      ],
    },
    availableMeals: {
      status: "idle",
      error: null,
      data: [
        MealFactory.create({
          id: "meal-1",
          title: "Meal 1",
        }),
        MealFactory.create({
          id: "meal-2",
          title: "Meal 2",
        }),
        MealFactory.create({
          id: "meal-3",
          title: "Meal 3",
        }),

        MealFactory.create({
          id: "meal-4",
          title: "Meal 4",
        }),
      ],
    },
    reservation: {
      status: "idle",
    },
  };

  const state = createTestState({
    ordering,
  });

  expect(selectSummary(state)).toEqual({
    table: {
      id: "table-1",
      title: "Ma table",
    },
    guests: [
      {
        id: "user-1",
        name: "John Doe",
        isOrganizer: true,
        meals: {
          entry: {
            id: "meal-1",
            title: "Meal 1",
          },
          mainCourse: {
            id: "meal-2",
            title: "Meal 2",
          },
          dessert: {
            id: "meal-3",
            title: "Meal 3",
          },
          drink: {
            id: "meal-4",
            title: "Meal 4",
          },
        },
      },
    ],
  });
});

it("should return a summary when the guest has only choosen a main course", () => {
  const ordering: OrderingDomainModel.State = {
    step: OrderingDomainModel.Step.GUESTS,
    form: {
      guests: [
        GuestFactory.create({
          id: "user-1",
          firstName: "John",
          lastName: "Doe",
          meals: {
            entry: null,
            mainCourse: "meal-1",
            dessert: null,
            drink: null,
          },
        }),
      ],
      organizerId: "user-1",
      tableId: "table-1",
    },
    availableTables: {
      status: "idle",
      error: null,
      data: [
        TableFactory.create({
          id: "table-1",
          title: "Ma table",
        }),
      ],
    },
    availableMeals: {
      status: "idle",
      error: null,
      data: [
        MealFactory.create({
          id: "meal-1",
          title: "Meal 1",
        }),
      ],
    },
    reservation: {
      status: "idle",
    },
  };

  const state = createTestState({
    ordering,
  });

  expect(selectSummary(state)).toEqual({
    table: {
      id: "table-1",
      title: "Ma table",
    },
    guests: [
      {
        id: "user-1",
        name: "John Doe",
        isOrganizer: true,
        meals: {
          entry: null,
          mainCourse: {
            id: "meal-1",
            title: "Meal 1",
          },
          dessert: null,
          drink: null,
        },
      },
    ],
  });
});
