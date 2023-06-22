import { GuestFactory } from "@ratatouille/modules/order/core/model/guest.factory";
import { OrderingDomainModel } from "@ratatouille/modules/order/core/model/ordering.domain-model";
import { chooseMeal } from "@ratatouille/modules/order/core/usecases/choose-meal.usecase";
import { createTestStore } from "@ratatouille/modules/testing/tests-environment";

const guestForm: OrderingDomainModel.Form = {
  guests: [
    GuestFactory.create({
      id: "1",
      meals: {
        entry: "1",
        mainCourse: "1",
        dessert: "1",
        drink: "1",
      },
    }),
  ],
  organizerId: "1",
  tableId: "1",
};
describe("Feature: choosing a meal", () => {
  it("should choose the meal", () => {
    const store = createTestStore();
    store.dispatch(chooseMeal(guestForm));
    expect(store.getState().ordering.form.guests).toEqual(guestForm.guests);
    expect(store.getState().ordering.step).toEqual(
      OrderingDomainModel.Step.SUMMARY
    );
  });
});
