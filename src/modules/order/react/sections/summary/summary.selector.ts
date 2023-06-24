import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { AppState } from "@ratatouille/modules/store/store";

export const selectSummary = (state: AppState): OrderingDomainModel.Summary => {
  function findMealById(id: string) {
    return meals.find((meal) => meal.id === id) ?? null;
  }

  const tableId = state.ordering.form.tableId;
  const table = state.ordering.availableTables.data.find(
    (table) => table.id === tableId
  )!;

  const organizerId = state.ordering.form.organizerId;

  const meals = state.ordering.availableMeals.data;

  const guests = state.ordering.form.guests.map((guest) => ({
    id: guest.id,
    name: `${guest.firstName} ${guest.lastName}`,
    isOrganizer: guest.id === organizerId,
    meals: {
      entry: guest.meals.entry ? findMealById(guest.meals.entry) : null,
      mainCourse: findMealById(guest.meals.mainCourse!)!,
      dessert: guest.meals.dessert ? findMealById(guest.meals.dessert) : null,
      drink: guest.meals.drink ? findMealById(guest.meals.drink) : null,
    },
  }));

  return {
    table: {
      id: table.id,
      title: table.title,
    },
    guests,
  };
};
