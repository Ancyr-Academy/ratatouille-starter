import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import { MealForm } from "@ratatouille/modules/order/core/form/meal.form";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { AppState, useAppDispatch } from "@ratatouille/modules/store/store";
import { orderingSlice } from "@ratatouille/modules/order/core/store/ordering.slice";
import { chooseMeal } from "@ratatouille/modules/order/core/usecases/choose-meal.usecase";
import { selectForm } from "@ratatouille/modules/order/core/selectors/form.selector";

export const useMeal = () => {
  function findGuestById(guestId: string) {
    return form.guests.find((guest) => guest.id === guestId);
  }

  function getSelectableEntries(guestId: string): OrderingDomainModel.Meal[] {
    const guest = findGuestById(guestId);
    if (!guest) {
      return [];
    }

    return mealForm.current.getSelectableEntries(meals, guest);
  }

  function getSelectableMainCourses(
    guestId: string
  ): OrderingDomainModel.Meal[] {
    const guest = findGuestById(guestId);
    if (!guest) {
      return [];
    }

    return mealForm.current.getSelectableMainCourses(meals, guest);
  }

  function getSelectableDesserts(guestId: string): OrderingDomainModel.Meal[] {
    const guest = findGuestById(guestId);
    if (!guest) {
      return [];
    }

    return mealForm.current.getSelectableDesserts(meals, guest);
  }

  function getSelectableDrinks(guestId: string): OrderingDomainModel.Meal[] {
    const guest = findGuestById(guestId);
    if (!guest) {
      return [];
    }

    return mealForm.current.getSelectableDrinks(meals, guest);
  }

  function assignEntry(guestId: string, mealId: string) {
    const nextState = mealForm.current.assignEntry(form, guestId, mealId);
    setForm(nextState);
  }

  function assignMainCourse(guestId: string, mealId: string) {
    const nextState = mealForm.current.assignMainCourse(form, guestId, mealId);
    setForm(nextState);
  }

  function assignDessert(guestId: string, mealId: string) {
    const nextState = mealForm.current.assignDessert(form, guestId, mealId);
    setForm(nextState);
  }

  function assignDrink(guestId: string, mealId: string) {
    const nextState = mealForm.current.assignDrink(form, guestId, mealId);
    setForm(nextState);
  }

  function onNext() {
    dispatch(chooseMeal(form));
  }

  function onPrevious() {
    dispatch(orderingSlice.actions.setStep(OrderingDomainModel.Step.TABLE));
  }

  function isSubmittable() {
    return mealForm.current.isSubmittable(form);
  }

  const dispatch = useAppDispatch();
  const meals: OrderingDomainModel.Meal[] = useSelector(
    (state: AppState) => state.ordering.availableMeals.data
  );

  const mealForm = useRef(new MealForm());

  const initialForm = useSelector(selectForm);
  const [form, setForm] = useState<OrderingDomainModel.Form>(initialForm);

  return {
    getSelectableEntries,
    getSelectableMainCourses,
    getSelectableDesserts,
    getSelectableDrinks,

    assignEntry,
    assignMainCourse,
    assignDessert,
    assignDrink,

    onNext,
    onPrevious,

    isSubmittable: isSubmittable(),
    guests: form.guests,
  };
};
