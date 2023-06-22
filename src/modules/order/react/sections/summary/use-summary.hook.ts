import { useDispatch, useSelector } from "react-redux";

import { AppState, useAppDispatch } from "@ratatouille/modules/store/store";
import { orderingSlice } from "@ratatouille/modules/order/core/store/ordering.slice";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";

type MealSummary = {
  id: string;
  title: string;
};

type Summary = {
  table: {
    id: string;
    title: string;
  };
  guests: Array<{
    id: string;
    name: string;
    isOrganizer: boolean;
    meals: {
      entry: MealSummary | null;
      mainCourse: MealSummary;
      dessert: MealSummary | null;
      drink: MealSummary | null;
    };
  }>;
};

const selectSummary = (state: AppState): Summary => {
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

export const useSummary = () => {
  function onNext() {
    // Terminer le flow de réservation de table
  }

  function onPrevious() {
    dispatch(orderingSlice.actions.setStep(OrderingDomainModel.Step.MEALS));
  }

  const dispatch = useAppDispatch();
  const summary: Summary = useSelector(selectSummary);

  return {
    onNext,
    onPrevious,
    summary,
  };
};
